export const sortNameAsc = items => {
  return items
    ? items.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      )
    : []
}

export const sortNameDesc = items => {
  return items
    ? items.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
      )
    : []
}

export const sortPriceAsc = items => {
  return items ? items.sort((a, b) => (a.attack > b.attack ? 1 : -1)) : []
}

export const sortPriceDesc = items => {
  return items ? items.sort((a, b) => (a.attack > b.attack ? -1 : 1)) : []
}
