const { User, Store, Review } = require('..db/')

const banearUser = async (id) => {
    try {
        if(User.isActive === true) {
            await User.update({
                isActive: false,
                isAdmin: false 
        }, {
                where: { id: id }
            })
            return 'Se ha inhabilitado el usuario'
        } else {
            await User.update({ isActive: true }, {
                where: { id: id }
            })
            return 'Se ha habilitado el usuario'
        }
        
    } catch (error) {
        console.log(error);
    }
}

const addAdmin = async (id) => {
    try {
        if(User.isAdmin === false) {
            await User.update({ isAdmin: true}, {
                where: { id: id }
            })
            return 'usuario habilitado como administrador!'
        } else {
            await User.update({ isAdmin: false}, {
                where: { id: id }
            })
            return 'usuario inhabilitado como administrador!'
        }
        
    } catch (error) {
        console.log(error);
    }
}

const totalUser = async () => {
    try {
     const data =  await User.findAndCountAll({
            include: { model: Store, Review }

         })
           console.log(data.count);
           console.log(data.rows);
         return data
        
    } catch (error) {
        console.log(error);
    }
}

const totalStoreUser = async (idUser) => {
    try {
        const data = await Store.findAndCountAll({
            where: {
               id: idUser
            },
         })
         return data
        
    } catch (error) {
        console.log(error);
    }
}

const totalStore = async () => {
    try {
        const data = await Store.findAndCountAll()
         return data
        
    } catch (error) {
        console.log(error);
    }
}

// banear user
router.put('/user/desactiveUser/:id', async function (req, res) {
    const { id } = req.params;

    try {    
        const user = await banearUser(id);

            return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(404).send({mensaje: 'hubo un error'});
    }
})

// agregar admin
router.put('/user/addAdmin/:id', async function (req, res) {
    const { id } = req.params;

    try {    
        const user = await addAdmin(id);

            return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(404).send({mensaje: 'hubo un error'});
    }
})


// trae un objeto 
//data = {count: 'contiene cantidad de usuarios', rows: [array de users con sus compras y review]}

router.get('/totalUser', async function (req, res) {
    try {
        const data = await totalUser();
        
        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(404).send({mensaje: 'hubo un error'});
    }
})

// trae un objeto 
//data = {count: 'contiene cantidad de compras', rows: [array de todas las compras]}

router.get('/totalStore', async function (req, res) {
    try {
        const data = await totalStore();
        
        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(404).send({mensaje: 'hubo un error'});
    }
})

// trae un objeto 
//data = {count: 'contiene cantidad de compras de un usuario en particular', rows: [array de todas las compras de ese user en particular]}

router.get('/totalStore', async function (req, res) {
    const { id } = req.params;

    try {
        const data = await totalStoreUser(id);
        
        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(404).send({mensaje: 'hubo un error'});
    }
})