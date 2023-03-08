const Residents = require('../../../models/residents');

const CreateResident = async function (req, res){    
    try {
        console.log("this is center")

        const {resident_name,resident_address,resident_phone} = req.body;
            const List = await Residents.find();
            console.log(List.length)
            if (List.length ==0 ){
                resident_collection_index = 0;
                console.log(resident_collection_index)
            }else{
                Robject =List.slice(-1).pop()
                resident_collection_index  =Robject.resident_collection_index ;
            }
            console.log(resident_collection_index)
            var resident_id = 'sp-resident-'+(Number(resident_collection_index)+1);
                console.log(resident_id)
                resident_collection_index = (Number(resident_collection_index)+1)
            console.log(resident_collection_index)
            
            var center = await Residents.create({
                resident_id,
                resident_collection_index,
                resident_name,
                resident_address,
                resident_phone
            });
            res.send(center)
    } catch (error) { 
        res.send(error)   
    }
}

const UpdateResident = async function (req, res){    
    try {
        console.log(req.body)
        const {resident_id,resident_name,resident_address,resident_phone} = req.body
        console.log(resident_id)
        const UpdateReisdent = await Residents.findOneAndUpdate({resident_id:resident_id},{$set :{resident_name:resident_name,resident_address:resident_address,resident_phone:resident_phone}});
            res.send(UpdateReisdent)
    } catch (error) { 
        res.send(error)   
    }
}

const getResident = async function (req, res){    
    try {
        const List = await Residents.find();
        res.send(List)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    CreateResident,
    UpdateResident,
    getResident
}