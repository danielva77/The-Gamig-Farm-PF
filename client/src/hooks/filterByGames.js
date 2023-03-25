export const filteredbyGames = (
  filteredAndSorted,
  gamesFilter,
  resetCurrentPage
) => {
  let filteredbyGames = filteredAndSorted;

  filteredbyGames = filteredbyGames.filter(
    (item) => item.Marks[0]?.title === gamesFilter
  );

  resetCurrentPage();

  if (filteredbyGames) {
    return filteredbyGames;
  }
  return filteredAndSorted;
};
