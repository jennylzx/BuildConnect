import type { GatsbySSR } from "gatsby"
import { withPrefix } from "gatsby"
import * as React from "react"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <style key="workSansFontFace">{`
      @font-face {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url(${withPrefix(`/fonts/work-sans.var.woff2`)}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}</style>,
    <link
      rel="preload"
      href={withPrefix(`/fonts/work-sans.var.woff2`)}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="workSansFont"
    />,
    <link rel="icon" href={withPrefix(`/favicon.svg`)} type="image/svg+xml" key="faviconSvg" />,
  ])
}
