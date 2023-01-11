export const filterByName = (items, nameFilter, resetCurrentPage) => {
  let filteredByName

  if (nameFilter) {
    filteredByName = items.filter(item => {
      let aux = item.title.slice(0, nameFilter.length)

      return aux.toLowerCase() === nameFilter.toLowerCase()
    })
    resetCurrentPage()

    return filteredByName
  } else {
    resetCurrentPage()
    return items
  }
}
