export const sortByPrice = (items, sortBy, resetCurrentPage) => {
  if (sortBy === "Menor a Mayor") {
    let sortedItems = items.sort((a, b) => {
      return a.price - b.price
    })
    return sortedItems
  } else if (sortBy === "Mayor a Menor") {
    let sortedItems = items.sort((a, b) => {
      return b.price - a.price
    })
    resetCurrentPage()
    return sortedItems
  }
}
