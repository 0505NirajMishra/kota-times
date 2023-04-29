import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import './contact.css'

const Contact = () => {

  const [data, setdata] = useState([])

  const [loader, setloader] = useState(false);

  const str = "Laxmi Arcade,2nd Floor,Kim OlpadRoad"

  const getdata = () => {
    fetch('https://kt.kotatimes.ac//api/form_contact_us/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
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
        setdata(data.data.form_contact_us[0].conatct_no)
        // console.log("my class api =>" + JSON.stringify(con)
        console.log("my class api =>" + JSON.stringify(data.data.form_contact_us))
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
            }}>Contact us </h3>
          </div>
        </div>
        </div>

      

        <div className="container pt-3 pb-3">
          <div className="row">

            <div className="tu-login-left">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2174420938013!2d77.36433651508234!3d28.623244482421565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544da5a9ebf%3A0x4024cbbabd66b412!2sKLJ%20Noida%20One!5e0!3m2!1sen!2sin!4v1652965290577!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6147600014147!2d72.91250301493895!3d21.4050682857957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be039f8a29af9f7%3A0xedc4563341231659!2sKota%20Times%20Career%20Institute!5e0!3m2!1sen!2sin!4v1662812425367!5m2!1sen!2sin" 
              width="600" height="450" style={{border:0}} 
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="tu-login-right">
              <div className="tu-login-right_title">
                {/* <h2 style={{
                  color: 'black'
                }}>Contact us</h2> */}
              </div>
              <form className="tu-themeform tu-login-form">
                <fieldset>
                  <div className="tu-themeform__wrap">
                    <div className="form-group-wrap">
                      <div className="form-group">
                        <div className="tu-placeholderholder">
                          <input type="text" className="form-control" required placeholder="Full Name" />
                          <div className="tu-placeholder">
                            <span>Name</span>
                            <em>*</em>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="tu-placeholderholder">
                          <input type="email" className="form-control" required placeholder="Email Address" />
                          <div className="tu-placeholder">
                            <span>Email Address</span>
                            <em>*</em>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="tu-placeholderholder">
                          <textarea className="form-control" required placeholder="Enter Message" />
                          <div className="tu-placeholder">
                            <span>Message</span>
                            <em>*</em>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <a href="profile-setting-a.html" className="tu-primbtn-lg"><span>Submit</span></a>
                      </div>

                    </div>
                  </div>
                </fieldset>
              </form>
            </div>

          </div>
        </div>

        <div className="container pt-3 pb-3">
          <div
            className="col-12 col-md-12 col-lg-12 d-flex px-5 py-4 fcfs-form"
            style={{
              background: "no-repeat padding-box #fff",
              boxShadow: "0 3px 6px #00000029",
              borderRadius: "50px"
            }}
          >
            <div className="container">
              <div className="row justify-content-center text-center">

                <div className="col-md-3">
                  <i class="fa-solid fa-phone" style={{
                    fontSize:'140%'
                  }}></i>
                  <span> &nbsp;+91 <a href={`tel:+91{data}`} style={{
                    color: 'black'
                  }}>{data}</a></span>
                </div>

                <div className="col-md-3">
                  <i class="fa-solid fa-envelope" style={{
                    fontSize:'140%'
                  }}></i>
                  <span> &nbsp;info@kotatimes.com</span>
                </div>

                <div className="col-md-6">
                  <i class="fa-solid fa-location-pin" style={{
                    fontSize:'140%'
                  }}></i>
                  <span> &nbsp;{str.replace(', Mulad', '')} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;