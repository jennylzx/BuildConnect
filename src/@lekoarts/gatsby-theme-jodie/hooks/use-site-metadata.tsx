import { graphql, useStaticQuery } from "gatsby"

type SiteMetadata = {
  siteTitle: string
  siteTitleAlt: string
  siteHeadline: string
  siteUrl: string
  siteDescription: string
  siteImage: string
  siteLanguage: string
  author: string
  [key: string]: unknown
}

type QueryData = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const fallbackSiteMetadata: SiteMetadata = {
  siteTitle: `Build and Connect`,
  siteTitleAlt: `Build and Connect`,
  siteHeadline: `Build and Connect`,
  siteUrl: `https://jennylzx.github.io/BuildConnect`,
  siteDescription: `Build and Connect — a physicalization project.`,
  siteImage: `/banner.jpg`,
  siteLanguage: `en`,
  author: `Build and Connect`,
}

const useSiteMetadata = () => {
  try {
    const data = useStaticQuery<QueryData>(graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteTitleAlt
            siteHeadline
            siteUrl
            siteDescription
            siteImage
            siteLanguage
            author
          }
        }
      }
    `)

    return data.site.siteMetadata
  } catch {
    // Fallback prevents app crash when Gatsby fails to hydrate StaticQuery data in development.
    return fallbackSiteMetadata
  }
}

export default useSiteMetadata
