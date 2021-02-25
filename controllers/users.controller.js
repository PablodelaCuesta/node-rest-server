
const { response, request } = require('express')


const getUsers = (req = request, res = response) => {

    const { name = 'No name', age} = req.query;

    res
    .json({
        msg: 'Controller - Get world!',
        queryString: {
            name,
            age
        }
    });

}


const putUsers = (req = request, res = response) => {

    const id = req.params.id

    res
    .json({
        msg: 'Controller - Put world!',
        segmentParams : id
    })
}

const postUsers = (req = request, res= response) => {
    res.status(201)
    .json({
        request: 'Post',
        body: req.body
    })
}

const deleteUsers = (req, res = response) => {
    res
    .json({
        msg: 'Controller - Delete world!'
    })

}



module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
}