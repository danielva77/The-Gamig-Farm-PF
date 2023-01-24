export const filteredbyMarks = (items, markFilter, resetCurrentPage) => {
  let filteredbyMarks = items

  if (markFilter) {
    filteredbyMarks= filteredbyMarks.filter(el => el.Marks[0] !== undefined)
    filteredbyMarks = filteredbyMarks.filter(item =>
      item.Marks[0].title.includes(markFilter)
    )
  }

  resetCurrentPage()

  if (filteredbyMarks) {
    return filteredbyMarks
  }
  return items
}
