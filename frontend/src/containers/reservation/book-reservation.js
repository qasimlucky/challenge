import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DatePicker from 'react-date-picker';


function BookReservation(props) {
  let navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [data, setData] = useState({});
  const [centerdata, setCenterData] = useState();
  const [userdata, setuserData] = useState();
  
  const [startDate, setStartDate] = useState(new Date());
  console.log(data)
  
  useEffect(() => {
    const newdata = {...data}
    newdata["date"] = startDate.toString().slice(4,15)
    setData(newdata)
    console.log(data)
    },[startDate]);

 /*  function handle(e) {
    const newdata = {...data}
    setAddAmount(e.target.value)
    newdata[e.target.id] = e.target.value
    newdata["tdate"] = (startDate).toString().slice(2,10)
    setData(newdata)
    console.log(data)    
    //setAddAmount(e.target.value)
  } */


  const url = "/reservation/create"
async function submit(e) {
    console.log(data)
    axios
        .post(url,data)
      .then(res => {
        console.log(res.data)
            if(res.data == "created"){
                Swal.fire({
                    title: 'Reservation Successfully Completed',
                    width: 600,
                    padding: '3em',
                    confirmButtonText: 'ok!',
                    color: '#716add'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/reservationlist")
                    }
                })  
            }
            if(res.data == "Already has reservation"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already has reservation!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            if(res.data == "This time slot is occupied"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This time slot is occupied in this center',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        
      }).catch(err =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
          navigate("/reservationlist")
          console.log(err)
        })
        
      }

      useEffect(() => {
        axios.get("/center/list").then(Response =>{
          console.log(Response.data)
          setCenterData(Response.data)
        }).catch(err =>{
          console.log(err)
        })
    },[]);

    
    useEffect(() => {
        axios.get("/resident/list").then(Response =>{
          console.log(Response.data)
          setuserData(Response.data)
        }).catch(err =>{
          console.log(err)
        })
    },[]);

function handleCenter(e){
    const newdata = {...data}
    newdata["date"] = startDate.toString().slice(4,15)
    newdata["center_id"] = e.target.value
    setData(newdata)
    console.log(e.target.value)
}
function handleTimeSlot(e){
    const newdata = {...data}
    console.log(e.target.value)
    newdata["time_slot"] = e.target.value
    setData(newdata) 
}

function handleUser(e){
    const newdata = {...data}
    newdata["resident_id"] = e.target.value
    setData(newdata) 
}
const options = [
    { label: '9am-10am', value: '9am-10am' },
    { label: '10am-11am', value: '10am-11am' },
    { label: '11am-12pm', value: '11am-12pm' },
    { label: '12pm-1pm', value: '12pm-1pm' },
    { label: '1pm-2pm', value: '1pm-2pm' },
    { label: '2pm-3pm', value: '2pm-3pm' },
    { label: '3pm-4pm', value: '3pm-4pm' },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="app" style={{ marginTop: 150 }}>
        <section class="section">
          <div class="container mt-10">
            <div class="row">
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-11 offset-xl-2">
                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Book Reservaation</h4>
                  </div>
                  <div class="card-body">
                      <label className="badge badge-primary badge-shadow" style={{ padding: "8px" }}>Reservation Details</label>
                      <div class="row">
                        <div  class="form-group col-2"></div>
                        <div class="form-group col-4">
                            <label for="">Time Slot</label>
                            <select  onChange={(e) => handleTimeSlot(e)} style={{height:"40px" ,width:"100%", lineHeight:"initial"}}>
                                    <option>Please choose one option</option>
                                    {options.map((option, index) => {
                                        return <option key={index} value={option.value} >
                                            {option.label}
                                        </option>
                                    })}
                                </select>
                        </div>
                        <div class="form-group col-4" >
                            <label for="">Reservation Date</label>
                            <DatePicker value={startDate} onChange={(date) => setStartDate(date)} style={{height:"40px",width:"250px"}} />
                        </div>
                      </div>

                      <div class="row">
                      <     div  class="form-group col-2"></div>
                            <div class="form-group col-4">
                              <label for="">Centers</label>
                              <div>
                                    <select onChange={handleCenter} style={{height:"40px" ,width:"100%", lineHeight:"initial"}}>
                                        <option>Please choose one option</option>
                                        {centerdata && centerdata.map((option, index) => {
                                            return <option key={index} value={option.center_id} >
                                                {option.center_name}
                                            </option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-4">
                              <label for="">Resident</label>
                              <div>
                                    <select onChange={handleUser} style={{height:"40px" ,width:"100%", lineHeight:"initial"}}>
                                        <option>Please choose one option</option>
                                        {userdata && userdata.map((option, index) => {
                                            return <option key={index} value={option.resident_id} >
                                                {option.resident_name}
                                            </option>
                                        })}
                                    </select>
                                </div>
                            </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-4"></div>
                        <div class="form-group col-4">
                          <button onClick={(e) => submit(e)}  class="btn btn-success btn-lg btn-block" style={{marginTop:"15px"}}>
                            Book Reservation
                          </button>
                        </div>
                        <div class="form-group col-4"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


export default BookReservation;