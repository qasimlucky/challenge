const Nurses = require('../../../models/nurse');

const Createnurse = async function (req, res){    
    try {
        console.log("this is center")

        const {center_id,nurse_name} = req.body;
            const List = await Nurses.find();
            console.log(List.length)
            if (List.length ==0 ){
                nurse_collection_index = 0;
                console.log(nurse_collection_index)
            }else{
                Robject =List.slice(-1).pop()
                nurse_collection_index  =Robject.nurse_collection_index ;
            }
            console.log(nurse_collection_index)
            var nurse_id = 'sp-nurse-'+(Number(nurse_collection_index)+1);
                console.log(nurse_id)
                nurse_collection_index = (Number(nurse_collection_index)+1)
            console.log(nurse_collection_index)
            
            var center = await Nurses.create({
                nurse_id,
                nurse_collection_index,
                center_id,
                nurse_name
            });
            res.send(center)
    } catch (error) { 
        res.send(error)   
    }
}

const UpdateNurse = async function (req, res){    
    try {
        console.log(req.body)
        const {nurse_id,center_id,nurse_name} = req.body
        console.log(center_id)
        const UpdateNurse = await Nurses.findOneAndUpdate({nurse_id:nurse_id},{$set :{center_id:center_id,nurse_name:nurse_name}});
            res.send(UpdateNurse)
    } catch (error) { 
        res.send(error)   
    }
}

const getNurse = async function (req, res){    
    try {
        const List = await Nurses.find();
        res.send(List)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    Createnurse,
    UpdateNurse,
    getNurse
}