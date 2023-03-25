export const filteredbyJoystick = (
  filteredAndSorted,
  joystickFilter,
  resetCurrentPage
) => {
  let filteredbyJoystick = filteredAndSorted;

  filteredbyJoystick = filteredbyJoystick.filter(
    (item) => item.Marks[0]?.title === joystickFilter
  );

  resetCurrentPage();

  if (filteredbyJoystick) {
    return filteredbyJoystick;
  }
  return filteredAndSorted;
};
