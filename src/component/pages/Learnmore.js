import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar3 from "../Navbar/Navbar2";
import Spinner from 'react-bootstrap/Spinner';
import parse from 'html-react-parser'


const Learn = () => {

    const [data, setdata] = useState([])

    const [loader, setloader] = useState(false);
    const [isloading, setisloading] = useState([]);


    let { id } = useParams()

    const getdata = () => {
        fetch('https://kt.kotatimes.ac//api/form_blog/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                // console.log("my blog data is " + JSON.stringify(blog.data.blog));
                setdata(data.data.form_blog)
                // console.log("my slider api" + JSON.stringify(data.data.form_sliders))
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

        console.log("my id is =>" + id)

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
                        <img src="../images/KOTA TIMES LOGO.png" alt="laoder img" />
                        <div className="tu-loader" />
                    </div>

                </div>
            )}

            <Navbar3 />

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
                        }}>Learn More</h3>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row pb-5 mb-4 pt-4">
                    {

                        data.filter(blogs => blogs.id == id).map((blogs) => (
                            <>
                                <img
                                    src={"https://kt.kotatimes.ac//uploads/form_blog/" + blogs.blog_image}
                                    alt=""
                                    className="img-fluid"
                                    style={{
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        margin: 'auto',
                                        width: '80%',
                                        height: '70vh',
                                    }}
                                />

                                <div style={{
                                    paddingTop:'4%',
                                    paddingLeft:'13%'
                                }}>
                                    <div className="pt-1">{blogs.title}</div>
                                    <div className="pt-1">{parse(blogs.blog_description)}</div>
                                </div>



                            </>
                        ))

                        // data.map((demo) => (
                        //     <>

                        //         <div className="col-md-3 col-lg-3 col-xl-3 mt-5">
                        //             <div className="card">
                        //                 <img
                        //                     src={"https://kt.kotatimes.ac//uploads/form_event/" + demo.banner}
                        //                     alt=""
                        //                     className="img-fluid"
                        //                     style={{
                        //                         objectFit: 'cover',
                        //                         height: '40vh'
                        //                     }}
                        //                 />
                        //                 <div className="card-body">
                        //                     <div
                        //                         id="text-course-event"
                        //                     >
                        //                         <div className="pt-2 d-flex">{demo.event_titl}</div>
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </>
                        // ))
                    }
                </div>
            
            </div>


            <span

            >
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

export default Learn;


