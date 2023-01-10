export const sortByPrice = (items, sortBy) => {
  if (sortBy === "Min price") {
    let sortedItems = items.sort((a, b) => {
      return a.price - b.price
    })
    return sortedItems
  } else if (sortBy === "Max price") {
    let sortedItems = items.sort((a, b) => {
      return b.price - a.price
    })
    return sortedItems
  }
}
