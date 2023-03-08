const VaccinationCenter = require('../../../models/vaccination-center');


const CreateCenter = async function (req, res){    
    try {
        console.log("this is center")

        const {center_name,center_address,reservation_capacity} = req.body;
            const centerList = await VaccinationCenter.find();
            console.log(centerList.length)
            if (centerList.length ==0 ){
                center_collection_index = 0;
                console.log(center_collection_index)
            }else{
                Robject =centerList.slice(-1).pop()
                center_collection_index  =Robject.center_collection_index ;
            }
            console.log(center_collection_index)
            var center_id = 'sp-center-'+(Number(center_collection_index)+1);
                console.log(center_id)
                center_collection_index = (Number(center_collection_index)+1)
            console.log(center_collection_index)
            
            var center = await VaccinationCenter.create({
                center_id,
                center_collection_index,
                center_name,
                center_address,
                reservation_capacity
            });
            res.send(center)
    } catch (error) { 
        res.send(error)   
    }
}

const UpdateCenter = async function (req, res){    
    try {
        console.log(req.body)
        const {center_id,center_address,reservation_capacity,center_name} = req.body
        console.log(center_id)
        const UpdateCenter = await VaccinationCenter.findOneAndUpdate({center_id:center_id},{$set :{center_name:center_name,center_address:center_address,reservation_capacity:reservation_capacity}});
            res.send(UpdateCenter)
    } catch (error) { 
        res.send(error)   
    }
}

const getCenters = async function (req, res){    
    try {
        const centerList = await VaccinationCenter.find();
        res.send(centerList)
    } catch (error) { 
        res.send(error)   
    }
}


module.exports = {
    CreateCenter,
    UpdateCenter,
    getCenters
}
