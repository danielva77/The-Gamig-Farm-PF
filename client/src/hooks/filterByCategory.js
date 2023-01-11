export const filteredbyCategory = (items, categoryFilter) => {
  let filteredbyCategory = items

  if (categoryFilter) {
    filteredbyCategory = filteredbyCategory.filter(item =>
      item.Categories[0].title.includes(categoryFilter)
    )
  }
  if (filteredbyCategory) {
    return filteredbyCategory
  }
  return items
}
