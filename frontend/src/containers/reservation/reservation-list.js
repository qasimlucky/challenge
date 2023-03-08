import React,{ useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link,useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ColorRing } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ReservationList() {
    const [data, setData] = useState([{}])
    const [itemOffset, setItemOffset] = useState(0);
    const [isloading, setIsLoading] = useState(true);
    const MySwal = withReactContent(Swal);
  
    useEffect(() => {
      axios.get("/reservation/list").then(Response =>{
        console.log(Response.data)
          setData(Response.data)
          setIsLoading(false)
      }).catch(err =>{
        console.log(err)
      })
      },[]);
  
    let navigate = useNavigate();
    const url = "/reservation/remove"
    function DeleteReservation(sendData){
        console.log("this is send dataaaaa")
        console.log(sendData)
        var reservation_id = sendData.reservation_id
        axios
        .post(url,{reservation_id:reservation_id})
        .then(res => {
        console.log(res.data)
        Swal.fire({
          title: 'Successfully Completed',
          width: 600,
          padding: '3em',
          confirmButtonText: 'ok!',
          color: '#716add'
        })
        window.location.reload(false)
      }).catch(err =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500
        })
          console.log(err)
        })


    }
  
      var itemsPerPage = 6;
  
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      const currentItems = data.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(data.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
         return (
          <>
          {isloading && (
            <div>
              <Navbar/>
              <Sidebar/>
              <div className="main-content">
                    <section className="section">
                      <div className="row">
                        <div className="col-12">
                          <div className="card" style={{}}>
                          <ColorRing
                            visible={true}
                            height="400"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{width:"auto"}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                          />
                          </div> 
                        </div>
                      </div>
                    </section>
              </div>
  
            </div>
  
          )}
  
         {!isloading && (
          <div>
            <Navbar/>
            <Sidebar/>
            <div className="main-content">
              <section className="section">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4>All Reservations</h4>
                        <div className="card-header-form">
                        
                        </div>
                      </div>
                      <div className="card-header mb-3">
                        
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table table-striped">
                            <tbody>
                              <tr className="align-center">
                                <th>Desisdent Id</th>
                                <th>Center Id</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Action</th>
                              </tr> 
                              {currentItems && currentItems.map(Details => ( 
                                <tr className="align-center">
  
                                <td>{Details.resident_id}</td>
                                <td>{Details.center_id}</td>
                                <td>{Details.time_slot}</td>
                                <td>{Details.date}</td>
                                
                                <td>
                                  <a  onClick={()=>DeleteReservation(Details)} className="btn btn-danger" style={{color:"white"}}>
                                    Cancel
                                  </a>
                                </td>
                              </tr>
                                ))} 
                            </tbody>
                          </table>
                          <div>
                          <ReactPaginate
                                previousLabel="Previous"
                                nextLabel="Next"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={8}
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                                />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <Footer/>
          </div>
         )}
          </>
         );
  }

export default ReservationList;