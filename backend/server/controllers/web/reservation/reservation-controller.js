const reservation = require('../../../models/reservation');

const CreateReservation = async function (req, res){    
    try {
        console.log("this is reservation")
        console.log(req.body)
        const {resident_id,nurse_id,date,time_slot,center_id} = req.body;
        const finduser = await reservation.find({resident_id:resident_id});
        console.log(finduser.length)
            if(finduser.length !== 0){
                console.log(finduser+ "this is find")
                res.send("Already has reservation")
            }else{
                    console.log("this there is no user of thi id")
                    const finddate = await reservation.find({date:date});
                    var dtoccupied= false
                    for (let i = 0; i < finddate.length; i++) {
                        finddate[i].time_slot
                        if(finddate[i].time_slot == time_slot && finddate[i].center_id == center_id){
                            console.log("This time slot is not avaiable")
                            var dtoccupied= true;
                        // res.send("This time slot is not avaiable")
                            }
                        }
                

                        if(dtoccupied == false){
                            console.log(dtoccupied)
                            console.log("time slot avaiable")
                            const List = await reservation.find();
                            console.log(List.length)
                            if (List.length ==0 ){
                                reservation_collection_index = 0;
                                console.log(reservation_collection_index)
                            }else{
                                Robject =List.slice(-1).pop()
                                reservation_collection_index  =Robject.reservation_collection_index ;
                            }
                            console.log(reservation_collection_index)
                            var reservation_id = 'sp-reservation-'+(Number(reservation_collection_index)+1);
                                console.log(reservation_id)
                                reservation_collection_index = (Number(reservation_collection_index)+1)
                            console.log(reservation_collection_index)
                            
                            var center = await reservation.create({
                                reservation_id,
                                reservation_collection_index,
                                resident_id,
                                nurse_id,
                                date,
                                time_slot,
                                center_id
                            });
                            res.send("created")
                        }else{
                            res.send("This time slot is occupied")
                        }
                    }
                    
 

    } catch (error) { 
        res.send(error)   
    }
}

const UpdateResevation = async function (req, res){    
    try {
        console.log(req.body)
        const {reservation_id,status,time_slot} = req.body
        console.log(reservation_id)
        const UpdateCenter = await reservation.findOneAndUpdate({reservation_id:reservation_id},{$set :{status:status,time_slot:time_slot}});
            res.send(UpdateCenter)
    } catch (error) { 
        res.send(error)   
    }
}

const getReservation = async function (req, res){    
    try {
        const List = await reservation.find();
        res.send(List)
    } catch (error) { 
        res.send(error)   
    }
}
const RemoveReservation = async function (req, res){    
    try {
        console.log("this is remove reservation")
        console.log(req.body)
        const {reservation_id} = req.body
        const List = await reservation.deleteOne({reservation_id:reservation_id});
        res.send(List)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    CreateReservation,
    UpdateResevation,
    getReservation,
    RemoveReservation
}