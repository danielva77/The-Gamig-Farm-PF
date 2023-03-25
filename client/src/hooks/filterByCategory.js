export const filteredbyCategory = (
  filteredAndSorted,
  categoryFilter,
  resetCurrentPage
) => {
  let filteredbyCategory = filteredAndSorted;

  filteredbyCategory = filteredbyCategory.filter((item) =>
    item.Categories[0].title.includes(categoryFilter)
  );

  resetCurrentPage();

  if (filteredbyCategory) {
    return filteredbyCategory;
  }
  return filteredAndSorted;
};
