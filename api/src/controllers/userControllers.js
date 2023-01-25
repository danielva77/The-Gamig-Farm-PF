const { User, Store, Review } = require("../db")

const banearUser = async id => {
  try {
    const user = await User.findOne({ where: { id: id } })

    if (user.isActive === true) {
      await User.update(
        {
          isActive: false,
          isAdmin: false,
        },
        {
          where: { id: id },
        }
      )
      return "Se ha inhabilitado el usuario"
    } else {
      await User.update(
        { isActive: true },
        {
          where: { id: id },
        }
      )
      return "Se ha habilitado el usuario"
    }
  } catch (error) {
    console.log(error)
  }
}

const desactivarUsuario = async (req, res) => {
  const { id } = req.params

  try {
    const user = await banearUser(id)

    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(404).send({ mensaje: "hubo un error" })
  }
}

module.exports = {
  desactivarUsuario,
}
