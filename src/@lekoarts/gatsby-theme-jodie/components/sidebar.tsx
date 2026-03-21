/** @jsx jsx */
import { jsx, get } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import Logo from "../icons/logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"
import Navigation from "@lekoarts/gatsby-theme-jodie/src/components/navigation"

type SidebarProps = { bg: string }

const Sidebar = ({ bg }: SidebarProps) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useJodieConfig()

  return (
    <header
      sx={{
        p: [3, 3, 4],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        backgroundColor: bg,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: [`center`, `center`, `center`, `flex-start`],
        justifyContent: [`space-between`, `space-between`, `space-between`, `flex-start`],
        svg: {
          fill: readableColor(bg),
        },
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
      <Link
        to={basePath}
        aria-label={`${siteTitle}, Back to Home`}
        sx={{
          display: `inline-flex`,
          alignItems: `center`,
          gap: [`0.45rem`, `0.55rem`, `0.6rem`, `0.65rem`],
          textDecoration: `none`,
          "svg": {
            width: [`2.6rem`, `2.8rem`, `3rem`, `3.2rem`],
            height: `auto`,
          },
        }}
      >
        <Logo />
        <span
          sx={{
            color: readableColor(bg),
            fontWeight: `bold`,
            fontSize: [1, 2, 2, 3],
            lineHeight: 1,
            whiteSpace: `nowrap`,
          }}
        >
          Build &amp; Connect
        </span>
      </Link>
      <div
        sx={{
          py: 4,
          display: [`none`, `none`, `none`, `block`],
        }}
      />
      <Navigation bg={bg} />
    </header>
  )
}

export default Sidebar