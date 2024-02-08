const User = require('../model/user')

// exports.getUserfromPage = (req,res,next) => {
//     res.status(200).sendFile('index.html',{
//         root:'views'
//     })
//     console.log(req.body)
// }

exports.postUserDetails = (req,res,next) => {
    console.log(req.body)
    const name = req.body.name
    const emailid =req.body.emailid
    const phoneno=req.body.phoneno
    User.create({
        name:name,
        emailid:emailid,
        phoneno:phoneno
    }).then((result) =>{
        console.log('Data added successfully')
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

exports.getUserDetails = (req,res,next) => {
    User.findAll()
    .then((details) => {
        console.log('Data extracted successfully')
        res.json(details)
    })
    .catch(err => console.log(err))
}

exports.deleteUserDetails = (req,res,next) => {
    const dId = req.params.dId
    console.log(dId)
    User
        .destroy({where:{
            id:dId
        }})
        .then(res => {
            console.log('Data deleted succesfully')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.editUserDetails = (req,res,next) => {
    const eId = req.params.eId
    User
        .findByPk(eId)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}
