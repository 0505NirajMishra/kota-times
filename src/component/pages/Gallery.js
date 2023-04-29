import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import Spinner from 'react-bootstrap/Spinner';

const Gallery = () => {

  const [data, setdata] = useState([])

  const [loader, setloader] = useState(false);

  const [isloading, setisloading] = useState([]);


  const getdata = () => {

    setisloading(true);

    fetch('https://kt.kotatimes.ac//api/form_gallery/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
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
        // console.log(data.data);
        setdata(data.data.form_gallery)
        // console.log("my gallery is =>" + JSON.stringify(data.data.form_gallery))
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
    let timer = setTimeout(() => setloader(false), 500);
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
          backgroundColor: 'lightgray',
        }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <h3 style={{
              padding: '1%',
              marginTop: '1%',
              color: "black"
            }}>Gallery</h3>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="row pb-5 mb-4 pt-4">
          {


            data.map((demo,index) => (
              <>
                <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 mt-5" key={index}>
                  <div className="card shadow-sm border-0 rounded">
                    <div className="card-body p-0">
                      <img
                        src={"https://kt.kotatimes.ac//uploads/form_gallery/" + demo.gallery_images}
                        alt
                        className="card-img-top img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </>
            ))
          }
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

export default Gallery;


{/* 
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                </div> 
                */}


{/* <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  
                </div>
              </div>
            </div>
          </div> */}
{/* <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  
                </div>
              </div>
            </div>
          </div> */}
{/* <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
           
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>
                  
                </div>
              </div>
            </div>
          </div> */}


{/* <header className="tu-header">
        <nav className="navbar navbar-expand-xl tu-navbar">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src="images/KOTA TIMES LOGO.png" alt="Logo" />
            </NavLink>
            <button
              className="tu-menu"
              aria-label="Main Menu"
              data-bs-target="#navbarSupportedContent"
              data-bs-toggle="collapse"
            >
              <i className="icon icon-menu" />
            </button>
            <div
              className="collapse navbar-collapse tu-themenav"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/Gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="menu-item-has-children nav-item">
                  <NavLink to="">Results</NavLink>
                </li>
              </ul>
            </div>
            <ul className="nav-item tu-afterlogin">
              <li>
                <NavLink className="nav-link" to="">
                  <span className="icon icon-message-square">
                    <i className="tu-messagenoti">4</i>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  <span className="icon icon-bell">
                    <i className="tu-messagenoti">3</i>
                  </span>
                </NavLink>
              </li>
              <li className="menu-item-has-children">
                <strong>
                  <NavLink className="nav-link" to="">
                    <img src="images/login.png" alt="image-description" />
                  </NavLink>
                </strong>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="">
                      <i className="icon icon-user" />
                      Personal details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-phone" />
                      Contact details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-book" />
                      Education
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-book-open" />
                      Subjects I can teach
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      <i className="icon icon-image" />
                      Media gallery
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header> */}


{/* 
          <div className="container">
        <div className="row pb-5 mb-4 pt-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" >
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" >
       
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" >
      
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
    
            <div className="card shadow-sm border-0 rounded">
              <div className="card-body p-0">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg"
                  alt
                  className="w-100 card-img-top"
                />
                <div className="p-4">
                  <h5 className="mb-0">Mark Rockwell</h5>
                  <p className="small text-muted">CEO - Consultant</p>

                </div>
              </div>
            </div>
          </div>
        </div>
          </div> 
      */}
