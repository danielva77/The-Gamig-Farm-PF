export const paginateItems = (items, currentPage, itemsPerPage) => {
  console.log("ITEMS HOOKPAGINADO", items, currentPage, itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  return currentItems
}
