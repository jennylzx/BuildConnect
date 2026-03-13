import type { GatsbySSR } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/work-sans.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="workSansFont"
    />,
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" key="faviconSvg" />,
    <link rel="icon" href="/favicon.ico" sizes="any" key="faviconIco" />,
  ])
}
