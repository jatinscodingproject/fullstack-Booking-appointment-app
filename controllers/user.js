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
    const user = new User(name,email,phoneno)
    user.save()
        .then(() => {
            res.redirect('/')
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