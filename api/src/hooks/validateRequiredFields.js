module.exports = {
  validateRequiredFields: function (data) {
    if (Array.isArray(data)) {
      // Validate required fields for each object in the array
      data.forEach(item => {
        const requiredFields = [
          "title",
          "price",
          "detail",
          "stock",
          "category",
          "mark",
        ]
        for (let i = 0; i < requiredFields.length; i++) {
          if (!item[requiredFields[i]]) {
            return { message: `Missing field: ${requiredFields[i]}` }
          }
        }
      })
    } else {
      // Validate required fields
      const requiredFields = [
        "title",
        "price",
        "detail",
        "stock",
        "category",
        "mark",
      ]
      for (let i = 0; i < requiredFields.length; i++) {
        if (!data[requiredFields[i]]) {
          return { message: `Missing field: ${requiredFields[i]}` }
        }
      }
    }
    return
  },
}
