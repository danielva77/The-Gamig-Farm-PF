export const filteredbyMarks = (items, markFilter) => {
    let filteredbyMarks = items
  
    if (markFilter) {
      filteredbyMarks = filteredbyMarks.filter(item =>
        item.Marks[0].title.includes(markFilter)
      )
    }
    if (filteredbyMarks) {
      return filteredbyMarks
    }
    return items
  }
  