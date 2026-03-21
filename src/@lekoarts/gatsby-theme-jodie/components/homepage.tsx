/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import GridItem from "@lekoarts/gatsby-theme-jodie/src/components/grid-item"
import locales from "@lekoarts/gatsby-theme-jodie/src/locales"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"
import modifyGrid from "../utils/modify-grid"
import Seo from "@lekoarts/gatsby-theme-jodie/src/components/seo"

export type JodieHomepageProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      __typename: "MdxProject"
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      __typename: "MdxPage"
    }[]
  }
}

const Homepage: React.FC<PageProps<JodieHomepageProps>> = ({ data }) => {
  if (!data) return null
  const { pages, projects } = data
  const rawItems = [...pages.nodes, ...projects.nodes]
  const items = modifyGrid(rawItems)

  return (
    <Layout>
      <h1 sx={visuallyHidden} data-testid="page-title">
        {locales.home}
      </h1>
      <div
        sx={{
          display: `grid`,
          gridTemplateColumns: [`1fr`, `1fr 1fr`, `1fr 1fr`],
          gridTemplateRows: [`auto`, `auto`, `1fr 1fr`],
          height: [`auto`, `auto`, `100vh`],
          overflow: `hidden`,
        }}
      >
        {items.length > 0 ? (
          items.map((item, index) => {
            const isActivityAndToolkit = item.slug === `/activity-and-toolkit`

            return (
              <GridItem
                to={item.slug}
                key={item.title}
                sx={{
                  minHeight: [`200px`, `250px`, `0`],
                  gridColumn: isActivityAndToolkit ? ["auto", "auto", `1 / 2`] : ["auto", "auto", `2 / 3`],
                  gridRow: isActivityAndToolkit
                    ? ["auto", "auto", `1 / 3`]
                    : item.slug === `/about`
                      ? ["auto", "auto", `1 / 2`]
                      : ["auto", "auto", `2 / 3`],
                }}
                data-testid={item.title}
              >
                <GatsbyImage
                  loading={isActivityAndToolkit || index === 0 ? `eager` : `lazy`}
                  image={item.cover.childImageSharp.gatsbyImageData}
                  alt=""
                  imgStyle={
                    isActivityAndToolkit
                      ? {
                          objectFit: `cover`,
                          objectPosition: `center 35%`,
                        }
                      : {
                          objectFit: `cover`,
                          objectPosition: `center center`,
                        }
                  }
                />
                <span>{item.title}</span>
              </GridItem>
            )
          })
        ) : (
          <div sx={{ padding: 3 }}>
            No projects and pages found at the locations defined for "projectsPath" and "pagesPath"
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
