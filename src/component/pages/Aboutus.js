import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";

const Aboutus = () => {

  const [loader, setloader] = useState(false);


  useEffect(() => {
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
              }}>About us</h3>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              {/* <h2>About Us</h2> */}
              <div className="col-12">
                <div
                  style={{
                    textAlign: "left",
                    fontFamily: "Gilroy-Medium ,sans-serif!important",
                    letterSpacing: 0,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#333"
                  }}
                >
                  <p>

                    <br />
                    <b>
                      KOTATIMES
                    </b> &nbsp; is a renowned name among educational service provider industry. Our main services are in the field of Coaching School Empower program. We offered courses for &nbsp;
                    <b>
                      class 9th to 12th (Biology & Mathematics), NEET, AIIMS, IIT-JEE(Mains + Advance) 6th 7th 8th 9th 10th 11th to 12th.....NEET , AIIMS , IIT-JEE ( MAINS+ADVANCE) , OLYMPIAD , KVPY ,NTSE ,NTSO IJSO
                    </b>
                    ,all Board exams

                    <br />
                    <br />

                    We also offer  courses, online and offline test series 24*7 Doubt Solving  etc.

                    <br />
                    <br />

                    The founders of <b> KOTATIMES
                    </b> believe that good results can be achieved only by keeping Students of this age close to parents and in a family environment, our team has worked tirelessly to develop a system that gives students a competitive environment along with the best in class education.

                    <br />
                    <br />

                    our organization does not work on one size all fit approach.  we have extensively and thoroughly worked on the syllabus that needs to be taught for competitive exams keeping in mind the previous year papers of <b>NEET/JEE</b>. We conduct tests, based on same pattern as competitive exams, on a fortnightly basis

                    <br/>
                    <br/>

                    Kota Times is the most trusted Institute in India for JEE-Mains & Advance, NEET, NTSE & Olympiads & Board Exam Preparation. The institute has substantiated itself consistently by recording outstanding results in NEET, JEE, KVPY, Board exams, NTSO, IJSO, and various other Olympiads by following 15 years legacy of Kota coaching classroom studies effectively. Students from classes 6th to 12th and 12th pass get complete assistance from experienced and well-learned faculties. In the process of mentoring, the institute has ensured to provide the best offline and online aid to students of Kota classroom batches. being the pioneers of e-learning, 
                    Kota Times guarantees to offer the best and most advanced studying structure.

                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div
            className="features-card test-series-card"
            style={{
              background: "#f2f8ff",
              boxShadow: "0 0 25px -3px rgb(192 139 139 / 12%)",
              borderRadius: "12px",
              padding: "16px",
              paddingTop: "28px",
              paddingBottom: "28px",
              margin: "20px 0"
            }}
          >
            <div className="row">
              <div className="col-lg-1">
                <img
                  className
                  src="https://www.pw.live/version12/assets/img/about-us/testseries.svg"
                  alt="studymaterial"
                />
              </div>
              <div className="col col-lg-11">
                <p className="card-details-text semibold my-3">Test Series</p>
                <p className="details pe-md-3">
                  We provide you the best test series for Class XI, XII, JEE,
                  NEET chapterwise which will be scheduled for whole year. This
                  test series follows very logical sequence of Basic → Advance
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="features-card test-series-card"
            style={{
              background: "#f2f8ff",
              boxShadow: "0 0 25px -3px rgb(192 139 139 / 12%)",
              borderRadius: "12px",
              padding: "16px",
              paddingTop: "28px",
              paddingBottom: "28px",
              margin: "20px 0"
            }}
          >
            <div className="row">
              <div className="col-lg-1">
                <img
                  className
                  src="https://www.pw.live/version12/assets/img/about-us/testseries.svg"
                  alt="studymaterial"
                />
              </div>
              <div className="col col-lg-11">
                <p className="card-details-text semibold my-3">Test Series</p>
                <p className="details pe-md-3">
                  We provide you the best test series for Class XI, XII, JEE,
                  NEET chapterwise which will be scheduled for whole year. This
                  test series follows very logical sequence of Basic → Advance
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="features-card test-series-card"
            style={{
              background: "#f2f8ff",
              boxShadow: "0 0 25px -3px rgb(192 139 139 / 12%)",
              borderRadius: "12px",
              padding: "16px",
              paddingTop: "28px",
              paddingBottom: "28px",
              margin: "20px 0"
            }}
          >
            <div className="row">
              <div className="col-lg-1">
                <img
                  className
                  src="https://www.pw.live/version12/assets/img/about-us/testseries.svg"
                  alt="studymaterial"
                />
              </div>
              <div className="col col-lg-11">
                <p className="card-details-text semibold my-3">Test Series</p>
                <p className="details pe-md-3">
                  We provide you the best test series for Class XI, XII, JEE,
                  NEET chapterwise which will be scheduled for whole year. This
                  test series follows very logical sequence of Basic → Advance
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="features-card test-series-card"
            style={{
              background: "#f2f8ff",
              boxShadow: "0 0 25px -3px rgb(192 139 139 / 12%)",
              borderRadius: "12px",
              padding: "16px",
              paddingTop: "28px",
              paddingBottom: "28px",
              margin: "20px 0"
            }}
          >
            <div className="row">
              <div className="col-lg-1">
                <img
                  className
                  src="https://www.pw.live/version12/assets/img/about-us/testseries.svg"
                  alt="studymaterial"
                />
              </div>
              <div className="col col-lg-11">
                <p className="card-details-text semibold my-3">Test Series</p>
                <p className="details pe-md-3">
                  We provide you the best test series for Class XI, XII, JEE,
                  NEET chapterwise which will be scheduled for whole year. This
                  test series follows very logical sequence of Basic → Advance
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div> */}

      </div>

      <Footer />
    </>
  );
};

export default Aboutus;


{/* <header className="tu-header">
        <nav className="navbar navbar-expand-xl tu-navbar">
          <div className="container-fluid">
            <strong>
              <NavLink className="navbar-brand" to="/">
                <img src="images/KOTA TIMES LOGO.png" alt="Logo" />
              </NavLink>
            </strong>
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
                  <NavLink to="">Pages</NavLink>
                  
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
