export const getNumberButtons = (
  filteredAndSorted,
  itemsPerPage,
  dispatch,
  setNumbersPaginated
) => {
  let numberButtons = []

  const amountOfPages = Math.ceil(filteredAndSorted.length / itemsPerPage)

  for (let i = 1; i <= amountOfPages; i++) {
    numberButtons.push(i)
  }

  dispatch(setNumbersPaginated(numberButtons))
}
