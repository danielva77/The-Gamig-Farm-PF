export const filteredbyCategory = (items, categoryFilter) => {
  let filteredbyCategory = items

  if (categoryFilter) {
    filteredbyCategory = filteredbyCategory.filter(
      item => item.categoryName === categoryFilter
    )

    return filteredbyCategory
  }

  return items
}
