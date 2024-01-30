exports.getSubscriberPage = async function(req,res){
    try{
        res.render('../pages/subscriber')
    }catch(err){
        console.log("Error message : "+err)
    }
}