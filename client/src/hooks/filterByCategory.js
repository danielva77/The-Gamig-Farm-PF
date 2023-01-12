export const filteredbyCategory = (items, categoryFilter, resetCurrentPage) => {
  let filteredbyCategory = items

  if (categoryFilter) {
    filteredbyCategory = filteredbyCategory.filter(item =>
      item.Categories[0].title.includes(categoryFilter)
    )
  }

  resetCurrentPage()

  if (filteredbyCategory) {
    return filteredbyCategory
  }
  return items
}
