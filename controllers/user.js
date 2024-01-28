const User = require('../model/user')

exports.getUserfromPage = (req,res,next) => {
    res.status(200).sendFile('index.html',{
        root:'views'
    })
}

exports.addUserDetails = (req,res,next) => {
    const name = req.body.name
    const email = req.body.emailid
    const phoneno = req.body.phoneno
    User.create({
        name:name,
        emailid:email,
        phoneno:phoneno
    })
    .then((result) => {
        console.log(result)
        console.log('data Created successfull')
        res.redirect('/appointments/data')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getallUserDetails = async(req,res,next) =>  {
    try{
        const data = await User.findAll()
        res.send(data)
    }catch(err){
        console.log(err)
    }
}