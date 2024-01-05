const userDetails = require('../controllers/user');

exports.getUserfromPage =  async(request,response,next) =>  {
    try{
        response.sendFile('index.html',{
            root:'views'
        })
    }catch(err){
        console.log(err)
    }
}

exports.addUserDetails = async(request,response,next) => {
    try{
        const{uname,uemail,uphone} = request.body;
        await userDetails.create({
            uname:uname,
            uemail:uemail,
            uphone: uphone
        })
        response.redirect('user/appointments')
    }catch(err){
        console.log(err)
        response.send('Duplicate Entry');
    }
}

exports.getalluserDetails = async(request,response,next) => {
    try{
        const data = await userDetails.findAll();
        response.send(data)
    }catch(err){
        console.log(err)
    }
}

exports.deleteuserDetails = async(request,response,next) => {
    const dId = request.params.dId;
    try{
        await userDetails.destroy({
           where:{
            id:dId
           } 
        })
        response.redirect('user/appointments')
    }catch(err){
        console.log(err)
    }
}


exports.edituserDetails = async(request,response,next) => {
    const eId = request.params.eId;
    try{
        const  uniqueProduct = await userDetails.findByPk(eId)
        response.send('unique Entry')
    }catch(err){
        console.log(err)
    }
}