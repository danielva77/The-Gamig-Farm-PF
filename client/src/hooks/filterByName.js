export const filterByName = (items, nameFilter) => {
  let filteredByName

  if (nameFilter) {
    filteredByName = items.filter(item => {
      let aux = item.title.slice(0, nameFilter.length)

      return aux.toLowerCase() === nameFilter.toLowerCase()
    })

    return filteredByName
  } else {
    return items
  }
}
