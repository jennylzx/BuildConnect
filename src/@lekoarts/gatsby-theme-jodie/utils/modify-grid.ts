import type { IGatsbyImageData } from "gatsby-plugin-image"

interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

// Define the desired order for homepage tiles
const desiredOrder = [
  `/about`,
  `/activity-and-toolkit`,
  `/use-cases`,
]

const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => {
  // Keep only items whose slug matches our desired pages
  const filtered = data.filter((item) =>
    desiredOrder.some((slug) => item.slug === slug || item.slug === `${slug}/`)
  )

  // Sort them in the desired order
  filtered.sort((a, b) => {
    const aSlug = a.slug.replace(/\/$/, ``)
    const bSlug = b.slug.replace(/\/$/, ``)
    return desiredOrder.indexOf(aSlug) - desiredOrder.indexOf(bSlug)
  })

  return filtered
}

export default modifyGrid
