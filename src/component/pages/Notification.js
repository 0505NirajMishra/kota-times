import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import './contact.css'
import Spinner from 'react-bootstrap/Spinner';


const Notification = () => {

    const [notification, setnotification] = useState([])

    const [loader, setloader] = useState(false);
    const [isloading, setisloading] = useState([]);



    const getdata = () => {
        fetch('https://kt.kotatimes.ac//api/form_notification/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((notification) => {
                return notification.json();
            })
            .then((notification) => {
                // console.log(data.data);
                setnotification(notification.data.form_notification)
                // console.log("my class api =>" + JSON.stringify(con)
            })
            .catch(error => {
                console.log("Error is =>" + error);
              })
              .finally(() => {
                setisloading(false);
              });
    }

    useEffect(() => {
        getdata()
        setloader(true);
        let timer = setTimeout(() => setloader(false), 1000);
        return () => {
            clearTimeout(timer);
        };


    }, [])

    return (
        <>



            {loader === true && (
                <div className="tu-preloader">

                    <div className="tu-preloader_holder">
                        <img src="images/KOTA TIMES LOGO.png" alt="laoder img" />
                        <div className="tu-loader" />
                    </div>

                </div>
            )}

            <Navbar2 />

            <div
                style={{
                    backgroundColor: "#f8f9fa"
                }}
            >

                <div
                    style={{
                        backgroundColor: 'lightgray',
                    }}>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <h3 style={{
                                padding: '1%',
                                marginTop: '1%',
                                color: "black"
                            }}>Notification</h3>
                        </div>
                    </div>

                </div>

                <div class="container">

                    <div className="row g-4 pt-3 pb-3">
                        {
                            notification.map((noti) => (
                                <>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                        <div className="card">
                                            <img
                                                src={"https://kt.kotatimes.ac//uploads/form_notification/" + noti.select_file}
                                                alt=""
                                                className="img-fluid"
                                                style={{
                                                    width:'100%',
                                                    height:'40vh',
                                                }}
                                            />
                                            <div style={{
                                                padding: '5%',
                                                color: "black"
                                            }}>
                                                <a href="" style={{
                                                    color: "black"
                                                }}>
                                                    <b>{noti.title}</b></a>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>



            </div>

            <span>
        {
          isloading == true ?

            <Spinner animation="border" style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: "auto",
              display: 'block',
              marginBottom: "2%"

            }} /> : ""
        }
      </span>

            <Footer />
        </>
    );
};

export default Notification;