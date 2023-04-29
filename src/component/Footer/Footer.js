import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {

  const [contact, setcontact] = useState([])

  const getcontact = () => {

    fetch('https://kt.kotatimes.ac//api/form_contact_us/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((contact) => {
        return contact.json();
      })
      .then((contact) => {
        // console.log(contact.data);
        setcontact(contact.data.form_contact_us[0].conatct_no)
        // console.log("my class api =>" + JSON.stringify(contact.data.form_contact_us[0].conatct_no))
      });

  }

  useEffect(() => {
    getcontact()
  }, [])



  return (
    <>

      <div
        id="call"
        style={{
          // backgroundColor: '#5a4bda',
          backgroundColor: "#dc3545",
          textAlign: 'center',
          color: '#fff',
          height: "50px"
        }}>
        <div style={{
          fontFamily: 'Gilroy-Regular,sans-serif!important',
          paddingTop: '12px'
        }}><b>  Talk to Our counsellor <a href={`tel:+91${contact}`} style={{
          color: "white"
        }}>
          +91 {contact}
        </a></b></div>
      </div>


      <footer>
        <div className="tu-footer">
          <div className="container">
            <div className="tu-footer_maintitle">
              <h3 style={{
                fontSize:'18px'
              }}>Best Learning Institute for NCERT to ICSE, CBSE, ICSE, JEE & NEET Class 6th to 12th.....NEET,AIIMS , IIT-JEE ( MAINS+ADVANCE) , OLYMPIAD , KVPY ,NTSE ,NTSO IJSO</h3>
              {/* <h3>Approach tutors near to your house</h3> */}
            </div>
            <div className="row tu-footer_row">

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">NCERT Solutions</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">NCERT</NavLink>
                  </li>
                  <li>
                    <NavLink to="">NCERT Solution</NavLink>
                  </li>
                 
                  <li>
                    <NavLink to="">NCERT Solution for Class 6th</NavLink>
                  </li>
                  <li>
                    <NavLink to="">NCERT Solution for Class 7th</NavLink>
                  </li>
                  <li>
                    <NavLink to="">NCERT Solution for Class 8th</NavLink>
                  </li>
                  <li>
                    <NavLink to="">NCERT Solution for Class 9 Math </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 9 Science</NavLink>
                  </li>

                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 10 Math</NavLink>
                  </li>

                  <li>
                    <NavLink to="">

                      NCERT Solution for Class 10 Science</NavLink>
                  </li>

                
                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">NCERT Solutions</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">NCERT Solution for Class 11 Chemistry</NavLink>
                  </li>
                  <li>
                    <NavLink to="">NCERT Solution for Class 11 Math</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 11 Physics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 11 Biology</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 12 Physics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 12 Chemistry</NavLink>
                  </li>

                  <li>
                    <NavLink to="">
                      NCERT Solution for Class 12 Math</NavLink>
                  </li>

                  <li>
                    <NavLink to="">

                      NCERT Solution for Class 12 Biology</NavLink>
                  </li>
                


                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Questions Papers</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">JEE Mains Sample Paper
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">NEET Sample Paper</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Sample Papers</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Previous Year paper CBSE class 10</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Previous Year paper CBSE class 12</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Previous Year paper JEE Mains</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Previous Year paper NEET</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Competitive Exams</h5>
                <ul className="tu-footerlist">

                  <li>
                    <NavLink to="">
                      IIT</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      JEE</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      JEE Main</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      JEE Advanced</NavLink>
                  </li>

                  <li>
                    <NavLink to="">NEET</NavLink>
                  </li>

                  <li>
                    <NavLink to="">
                      Olympiad Preparation</NavLink>
                  </li>

                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Competitive Exams</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">NDA</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      KVPY</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NTSE</NavLink>
                  </li>
                  <li>
                    <NavLink to="">State Boards</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      CBSE Boards</NavLink>
                  </li>
                  <li>
                    <NavLink to="">

                      ICSE</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Important Subjects</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">
                      Physics</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Biology</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Chemistry</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Maths</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      English</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Commerce</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Civics</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Reference book solutions</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">
                      HC Verma Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      RD Sharma Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      RS Aggarwal Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      NCERT Exemplar Solutions</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      Lakhmir Singh Solutions </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      DK Goel Solutions </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      TS Grewal Solutions </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
                <h5 className="tu-footertitle">Revision Notes</h5>
                <ul className="tu-footerlist">
                  <li>
                    <NavLink to="">
                      Revision Notes</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      CBSE Class 12 Notes</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      CBSE Class 11 Notes</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      CBSE Class 10 Notes</NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      CBSE Class 9 Notes </NavLink>
                  </li>
                  <li>
                    <NavLink to="">
                      CBSE Class 8 Notes</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tu-footerdark">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <strong className="tu-footerlogo">
                  <NavLink to="index.html">
                    {/* <img src="images/logo_white.png" alt="Logo" /> */}
                    <img src="images/KOTA TIMES LOGO.png" alt="laoder img" style={{
                      width: '7rem'
                    }} />
                  </NavLink>
                </strong>
                <p className="tu-footerdescription">
                  KOTATIMES is a renowned name among educational service provider industry.
                  Our main services are in the field of Coaching School Empower program.
                  We offered courses for class 9th to 12th (Biology & Mathematics), NEET, AIIMS, IIT-JEE(Mains + Advance),
                  all Board exams.
                </p>
                <ul className="tu-socialmedia">
                  <li className="tu-facebookv3">
                    <a href="https://www.facebook.com/kotatimescareerinstitute" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="tu-twitterv3">
                    <a href="https://www.instagram.com/kota_times/?r=nametag" target="_blank">
                      {/* <i className="fab fa-twitter" /> */}
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="tu-linkedinv3">
                    <a href="https://www.youtube.com/channel/UC8sfX9WGD0ZgnoC4bfKaVXQ" target="_blank">
                      {/* <i className="fab fa-linkedin-in" /> */}
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>

                  <a href={`https://wa.me/919727677784`} target="_blank" rel="noopener noreferrer"
                    style={{
                      position: 'fixed', width: 60, height: 60, bottom: 20, right: 20,
                      backgroundColor: '#25d366',
                      zIndex: 100,
                      color: '#FFF', borderRadius: 50, textAlign: 'center', fontSize: 30,
                    }} id="setwhatsappicon">
                    <i className="fa-brands fa-whatsapp my-float" style={{ marginTop: 3, marginLeft: 3 }} />
                  </a>

                  {/* 
                  <li className="tu-dribbblev3">
                    <NavLink to="https://dribbble.com/" target="_blank">
                      <i className="fab fa-dribbble" />
                    </NavLink>
                  </li>
                  <li className="tu-twitchv3">
                    <NavLink to="https://www.twitch.tv/" target="_blank">
                      <i className="fab fa-twitch" />
                    </NavLink>
                  </li> 
                  */}
                </ul>
              </div>
              <div className="col-lg-5">
                <h5 className="tu-footertitle">
                  Feel free to share your question
                </h5>
                <ul className="tu-footerlist tu-footericonlist">

                  <li style={{
                    display: 'flex'
                  }}>
                    <i className="icon icon-phone-call" />

                    <a href={`tel:{contact}`} style={{
                      marginLeft: '3%'
                    }}>
                      +91 {contact} ( Mon to Sun 9am - 11pm GMT )
                    </a>

                  </li>

                  <li>
                    <a href="">
                      <i className="icon icon-mail" />
                      <em>info@kotatimes.com</em>
                    </a>
                  </li>
                  {/* <li>
                    <NavLink to="tel:+681109998263">
                      <i className="icon icon-printer" />
                      <em>+62 811 09998263</em>
                    </NavLink>
                  </li> */}
                  <li>
                    <a href="">
                      <i className="fas fa-location-dot" />
                      {/* <em>(+33)7 75 55 9375</em> */}
                      {/* <span>( Mon to Sun 9am - 11pm GMT )</span> */}
                      <span style={{
                        color: "white"
                      }}>Laxmi Arcade,2nd Floor,Kim OlpadRoad</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-location-dot" />
                      {/* <em>(+33)7 75 55 9375</em> */}
                      {/* <span>( Mon to Sun 9am - 11pm GMT )</span> */}
                      <span style={{
                        color: "white"
                      }}>GIPCL, Nani Naroli, Gujarat - 394110</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-location-dot" />
                      {/* <em>(+33)7 75 55 9375</em> */}
                      {/* <span>( Mon to Sun 9am - 11pm GMT )</span> */}
                      <span style={{
                        color: "white"
                      }}>1st floor, Balaji Palace, KIM (Above IDFC bank)</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-location-dot" />
                      {/* <em>(+33)7 75 55 9375</em> */}
                      {/* <span>( Mon to Sun 9am - 11pm GMT )</span> */}
                      <span style={{
                        color: "white"
                      }}>141/142 & 129 to 136,Karmyogi-1,Behind </span>
                      <span style={{
                        color: "white"
                      }}>Piyush-Point,Opp.Kavita Hospital,Pandesara,Surat.</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12">
                <div className="tu-footerlistholder  tu-seperator">
                  {/* <div className="tu-footercontent">
                    <h5 className="tu-footertitle">Courses</h5>

                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">Arjuna VI</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Udaan XI</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Enthusiastic XII (NEET)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Ekalavya VII  </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Nurture XI (IIT-JEE) </NavLink>
                      </li>
                      <li>
                        <NavLink to=""></NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Vijeta VIII</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Nurture XI (NEET)</NavLink>
                      </li>
                      <li>
                        <NavLink to=""></NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Lakshya IX</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Vijaya XII</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                           
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Drona X</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Enthusiastic XII (IIT-JEE)</NavLink>
                      </li>
                      <li>
                        <NavLink to=""></NavLink>
                      </li>
                    </ul>
                  </div>  */}

                  {/* <div className="tu-footercontent-two">
                    
                    <h5 className="tu-footertitle">
                          Upcoming classes
<                      <span className="tu-tag tu-bggreen">NEW</span>
                    </h5>

                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="javascript:void(0);">Online science classes</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online islamiat classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online mathemetic classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">Online java classes</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online computer classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">IBM python Analyst</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online geographic classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online C programming classes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Online statistic classes
                        </NavLink>
                      </li>
                      <li className="tu-footerlist-explore">
                        <NavLink to="">Explore all</NavLink>
                      </li>
                    </ul>
                  </div> */}

                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <h5 className="tu-footertitle">Courses</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">
                          Arjuna VI</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                            Ekalavya VII
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Vijeta VIII</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Lakshya IX
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Drona X
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Udaan XI
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <h5 className="tu-footertitle">Courses</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">Nurture XI (IIT-JEE)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Nurture XI (NEET)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Vijaya XII</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Enthusiastic XII (IIT-JEE)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Enthusiastic XII (NEET)</NavLink>
                      </li>

                    </ul>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <h5 className="tu-footertitle">Top Academy</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">
                          Best NEET Coaching In Gujarat</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Best IIT-JEE Coaching In Surat</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Best NEET Coaching In India</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Best IIT-JEE Coaching In South Gujarat</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <h5 className="tu-footertitle">
                      Special Classes</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="">
                          CBSE Tuitions</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          ICSE Tuitions</NavLink>
                      </li>
                      <li>
                        <NavLink to="">JEE (Main & Advanced)</NavLink>
                      </li>
                      <li>
                        <NavLink to="">NEET for Class 11</NavLink>
                      </li>
                      <li>
                        <NavLink to="">NEET for Class 12</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Eklavya JEE</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Eklavya NEET</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Free Live Classes</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="tu-footerlistholder  tu-seperator m-0">
                  <div className="tu-footercontent-two">
                    <h5 className="tu-footertitle">Company</h5>
                    <ul className="tu-footerlist">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Aboutus">
                          Abouts us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Contact">
                          Contact us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Events">
                          Events</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Notification">
                          Notification</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Courses">
                          Courses</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Gallery">
                          Gallery</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="">
                          Notes</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/Privacyandpolicy">
                          Privacy Policy</NavLink>
                      </li>
                      <li>
                        <NavLink to="">
                          Terms of Condition</NavLink>
                      </li>
                    </ul>
                  </div>

                  {/* <span className="tu-tag tu-bggreen">soon</span> */}

                  <div className="tu-footercontent d-xl-flex">
                    <div className="tu-footercontent_title">
                      <h5 className="tu-footertitle">
                        Get mobile app
                      </h5>
                      <p>
                        We’re available on Android devices and platforms. Study from anywhere at your convenience.
                      </p>

                      <ul className="tu-footerdevice">
                        {/* <li>
                          <NavLink to="">
                            <img src="images/ios.png" alt="devices" />
                          </NavLink>
                        </li> */}
                        <li>
                          <a href="https://play.google.com/store/apps/details?id=co.jack.dviiq" target="_blank" rel="noreferrer">
                            <img src="images/android.png" alt="devices" style={{
                              width:'50vw'
                            }}/>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tu-footernewsletter">
                      <h5 className="tu-footertitle">Newsletter</h5>
                      <p>
                        Subscribe Email to Get Access To Our Upcoming News and Announcements.
                      </p>
                      <div className="tu-inputbtn">
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="form-control"
                        />
                        <NavLink to="" className="tu-primbtn-icon tu-primbtn-orange">
                          <i className="icon icon-send" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tu-footercopyright">
            <div className="container">
              <div className="tu-footercopyright_content">
                <p>© 2022 All Rights Reserved Kota Times.</p>
                <ul className="tu-footercopyright_list">
                  <li>
                    <Link to="/Contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/Aboutus">About us</Link>
                  </li>
                  <li>
                    <Link to="/Termsandconditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/Privacyandpolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;