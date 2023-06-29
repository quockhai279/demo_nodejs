import express from "express";
import APIController from '../controller/APIController'

let router = express.Router();

const initAPIRoute = (app) => {
    // method get -> read data
    router.get('/users', APIController.getAllUsers);
    // method post -> create data
    router.post('/create-user', APIController.createNewUsers)
    // method put -> update data
    router.put('/update-user', APIController.updateUser)
    //method delete -> delete data
    router.delete('/delete-user/:id', APIController.deleteUser)

    return app.use('/api/v1', router)
}

module.exports = initAPIRoute;