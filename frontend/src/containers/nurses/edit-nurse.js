import React, { useState } from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function EditNurse(props) {

  let navigate = useNavigate();
  const MySwal = withReactContent(Swal)
  const [data, setData] = useState({})

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    newdata["nurse_id"] = CenterData.nurse_id
    setData(newdata)
    console.log(data)
  }

  const url = "/nurse/update"
  function submit(e) {
    console.log(data)
    e.preventDefault();
    axios
      .post(url, data)
      .then(res => {
        console.log(res.data)
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'Nurse is Edit!!!!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/nurselist")
      }).catch(err =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/nurselist")
          console.log(err)
        })
       
      }

  const location = useLocation();
  const CenterData = location.state.sendData
  console.log("this is location recived data")


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
                    <h4>Edit Nurse</h4>
                  </div>
                  <div class="card-body">
                    <form onSubmit={(e) => submit(e)} method="HTTP_METHOD" enctype="multipart/form-data">

                      <label className="badge badge-primary badge-shadow" style={{ padding: "8px" }}>Nurse Details</label>
                      <div class="row">
                        <div class="form-group col-6">
                          <label for="">Name</label>
                          <input onChange={(e) => handle(e)} id="nurse_name" type="text" class="form-control" name="nurse_name" placeholder="e.g name" defaultValue={CenterData.nurse_name} />
                        </div>
                      </div>
                      

                      <div class="row">
                      <div class="form-group col-4"></div>
                        <div class="form-group col-4">
                          <button type="submit" class="btn btn-success btn-lg btn-block" style={{marginTop:"15px"}}>
                            Edit Nurse
                          </button>
                        </div>
                      </div>
                    </form>
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


export default EditNurse;