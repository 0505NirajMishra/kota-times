import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink, Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
// import Typewriter from "typewriter-effect";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typed from "react-typed"
// import './card.css'
// import ReactHtmlParser from "react-html-parser";
import parse from 'html-react-parser'
import Slider from "react-slick";
import Spinner from 'react-bootstrap/Spinner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Indexv2 = () => {

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(false);
  const [blog, setblog] = useState([])
  const [course, setcourse] = useState([])
  const [teacher, setteacher] = useState([])
  const [notification, setnotification] = useState([])
  const [isloading, setisloading] = useState([]);
  const [event,setevent] = useState([])


  const getdata = () => {

    setisloading(true);

    fetch('https://kt.kotatimes.ac//api/form_sliders/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
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
        setdata(data.data.form_sliders)
        // console.log("my slider api" + JSON.stringify(data.data.form_sliders))
      })
      .catch(error => {
        console.log("Error is =>" + error);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  const getblog = () => {
    fetch('https://kt.kotatimes.ac//api/form_blog/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((blog) => {
        return blog.json();
      })
      .then((blog) => {
        // console.log("my blog data is " + JSON.stringify(blog.data.blog));
        setblog(blog.data.form_blog)
        // console.log("my slider api" + JSON.stringify(data.data.form_sliders))
      })
   
  }

  const getcourse = () => {
    fetch('https://kt.kotatimes.ac//api/form_course/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((course) => {
        return course.json();
      })
      .then((course) => {
        // console.log("my course data is  " + JSON.stringify(course.data.form_course));
        setcourse(course.data.form_course)
        // console.log("my slider api" + JSON.stringify(data.data.form_sliders))
      })
      .catch(error => {
        console.log("Error is =>" + error);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  const getteacher = () => {

    setisloading(true);

    fetch('https://kt.kotatimes.ac//api/form_teacher/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((teacher) => {
        return teacher.json();
      })
      .then((teacher) => {
        // console.log(data.data);
        setteacher(teacher.data.form_teacher)
        // console.log("my slider api" + JSON.stringify(data.data.form_sliders))
      })
      .catch(error => {
        console.log("Error is =>" + error);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  const getnotification = () => {
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
        setnotification(notification.data.form_notification);
        // console.log("my class api =>" + JSON.stringify(notification.data.form_notification));
      })
      .catch(error => {
        console.log("Error is =>" + error);
      })
      .finally(() => {
        setisloading(false);
      });
  }

  const getevent = () =>{
    fetch('https://kt.kotatimes.ac//api/form_event/all?X-Api-Key=74121DE3232D437180D63745C66D8E29'
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then((event) => {
      return event.json();
    })
    .then((event) => {
      // console.log(data.data);
      setevent(event.data.form_event)
      // console.log("djbvsvkjsnvksn" + JSON.stringify(data.data.form_Events))
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
    getblog()
    getcourse()
    getteacher()
    getnotification()
    getevent()
    setloader(true);

    let timer = setTimeout(() => setloader(false), 1000);
    return () => {
      clearTimeout(timer);
    };

  }, [])


  const options = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 2,
      }
    },
  };

  // const options1 = {
  //   margin: 30,
  //   responsiveClass: true,
  //   // nav: true,
  //   autoplay: true,
  //   smartSpeed: 500,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     700: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 1,
  //     }
  //   },
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: notification.length > 4 ? 4 : notification.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const list = [
    {
       id:1,
       title:'one'
    },
    {
      id:2,
      title:'two'
    },
    {
      id:3,
      title:'three'
    },  
    {
      id:4,
      title:'four'
    },  
    {
      id:5,
      title:'five'
    },  
    // {
    //   id:6,
    //   title:'six'
    // },  
  ]

  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow:  blog.length > 4 ? 4 : blog.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings1: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const coursesetting = {
    dots: true,
    infinite: true,
    slidesToShow:  course.length > 4 ? 4 : course.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings1: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const teachersetting = {
    dots: true,
    infinite: true,
    slidesToShow:  teacher.length > 4 ? 4 : teacher.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings1: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const eventsetting = {
    dots: true,
    infinite: true,
    slidesToShow:  event.length > 4 ? 4 : event.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings1: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const demo = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  
  return (
    <>
      <div
        id="forhide"
      >

        {/* Preloader Start */}

        {loader === true && (

          <div className="tu-preloader">
            <div className="tu-preloader_holder" >
              <img src="images/KOTA TIMES LOGO.png" alt="laoder img" />
              <div className="tu-loader" />
            </div>
          </div>
        )}

        {/* Preloader End */}

        {/* HEADER START */}

        <Navbar />

        {/* HEADER END */}

        {/* BANNER START */}

        <div className="tu-bannervtwo" >

          <div className="tu-particles">
            <div id="tu-particle" />
          </div>

          <div className="container" style={{
            marginTop: '-6%'
          }}>
            <div className="row align-items-center">

              <div className="col-xl-6">

                <div className="tu-banner_title">
                  <h2 id="setfontsize" style={{
                    color: "white"
                  }}>
                    {/* A good <span>#education</span> is always a base of my */}
                    Best And Affordable Institute In India
                  </h2>
                  <span className="tu-bannerinfo type">
                    <Typed
                      strings={[
                        "New Batch Admission Open",
                      ]}
                      typeSpeed={150}
                      backSpeed={100}
                      loop
                      style={{
                        fontSize: '70%'
                      }}
                    />
                  </span>
                  <p id="settext">
                    {/* Consectur adipiscing elitsedo eiusmod tempor incididuntem
                    utaborate dolore magna aliqua ad minim veniamque. */}
                    Kota's Specialized Coaching for IIT - JEE(MAINS + ADVANCE) / NEET / BITS / AIIMS / BOARDS / NDA / OLYMPIAD/ KVPY / GUJCET / NTSE
                  </p>
                  <ul className="tu-banner_list">
                    <li>
                      <div className="tu-starthere">
                        <span>Start from here</span>
                        <img src="images/knob_line.svg" alt="img" />
                      </div>
                      <NavLink
                        to=""
                        className="tu-primbtn tu-primbtn-gradient"
                      >
                        <span>Contact us </span>
                        <i className="icon icon-chevron-right" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" className="tu-secbtn">
                        <span>Browse courses</span>
                      </NavLink>
                    </li>
                  </ul>
                  <div className="tu-banner_explore">
                    <i className="icon icon-shield" />
                    <p>
                      Book your Free Demo session{" "}
                      <a href="">Join today</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* 
              <div className="col-xl-6 d-none d-xl-block">
                <figure className="tu-bannervtwo_img">
                  <img
                    src="images/index/banner/img-07.png"
                    alt="img description"
                  />
                </figure>
              </div> 
              */}

              <div className="col-xl-6 col-md-6 col-sm-6 col-lg-8"
                style={{

                  justifyContent: 'space-evenly'
                }}>

                {/* <figure className="tu-bannervtwo_img">
                  <img
                    src="images/index/banner/img-07.png"
                    alt="img description"
                  />
                </figure> */}

                <div className="row mb-5 mt-2">
                  <div className="col-md-6 col-6 p-2">
                    <div className="">
                        <img src="/images/vijayviii.png" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-md-6 col-6 p-2">
                    <div className="">
                      <img src="/images/Lakhya.png" className="img-fluid" style={{
                        width: '100rem'
                      }} />
                    </div>
                  </div>

                  <div className="col-md-4 col-6 p-2">
                    <div className="">
                      <img src="/images/Drona X.png" className="img-fluid" style={{
                        width: '100rem'
                      }} />
                    </div>
                  </div>

                  <div className="col-md-4 col-6 p-2">
                    <div className="">
                      <img src="/images/Nutrurexi.png" className="img-fluid" style={{
                        width: '100rem'
                      }} />
                    </div>
                  </div>

                  <div className="col-md-4 col-6 p-2">
                    <div className="">
                      <img src="/images/Enthuxii.png" className="img-fluid" style={{
                        width: '100rem'
                      }} />
                    </div>
                  </div>

                 

                  {/* <div className="col-md-4 col-6 p-2">
                    <div className="card">
                      <img src="/images/starting-images.jpeg" className="img-fluid" style={{
                        width: '100rem'
                      }} />
                    </div>
                      </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BANNER END */}

        {/* MAIN START */}

        <main className="tu-main">
          {/* PLATFORM START */}

          <section className="tu-main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    {/* <h4>Better Learning. Better Results</h4> */}
                    <h2 style={{ fontSize: '27px' }}>Features and Benefits</h2>
                    {/* <h4 id="demoteacher">Your One-Stop Destination For Success</h4> */}
                    <div>Better Learning. Better Results</div>
                  </div>
                </div>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="/images/Highly Qualified & Experienced Faculty.png" alt="img"
                        style={{
                          display: "block",
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'auto',
                          width: '50rem',
                          height: '50px'
                        }} />
                      <h5 className="pt-2 justify-content-center text-center">Highly Qualified & Experienced Faculty</h5>
                      <p className="justify-content-center text-center">
                        Kota Times Faculty well-qualified and Experienced teachers have the
                        ability to connect with their students on a personal level. They know how each child learns best.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/computer-with.png" alt="img"
                        style={{
                          display: "block",
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'auto',
                          width: '50rem',
                          height: '50px'
                        }}
                      />
                      <h5 className="pt-2 justify-content-center text-center">Interactive Live Lecture</h5>
                      <p className="justify-content-center text-center">
                        Live class more dynamic, encourages debate and allows immediate answers to questions.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/class-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Small Batch Size</h5>
                      <p className="justify-content-center text-center">
                        there is an assumption that leads to better learning outcomes
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/conversion-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Personal Mentorship</h5>
                      <p className="justify-content-center text-center">

                        Personal Mentorship Increased productivity and better time management for Students.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/arrow-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Post Class Doubt Solving</h5>
                      <p className="justify-content-center text-center">
                        Faculty help in clearing concepts and laying strong foundation.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/youtube-with-boy-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Recorded Lectures</h5>
                      <p className="justify-content-center text-center">
                        Recordings provide flexibility to view or review content at their own pace
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row g-4 justify-content-center pt-5">
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/mocktest-image.png" alt="img"
                        style={{
                          display: "block",
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'auto',
                          width: '50rem',
                          height: '50px'
                        }} />
                      <h5 className="pt-2 justify-content-center text-center">Mock Test</h5>
                      <p className="justify-content-center text-center">
                        help students revise the entire syllabus in the simulated setting of the actual exam
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/assignment-image.png" alt="img"
                        style={{
                          display: "block",
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'auto',
                          width: '50rem',
                          height: '50px'
                        }}
                      />
                      <h5 className="pt-2 justify-content-center text-center"> Assignments and class notes</h5>
                      <p className="justify-content-center text-center">
                        Good note-taking will improve your active listening, comprehension of material, and retention.
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/Group Discussion in Class.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Group Discussion in Class</h5>
                      <p className="justify-content-center text-center">
                        It helps in learning more – It increases your understanding of a subject or lesson
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/book-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Books and PDF - </h5>
                      <p className="justify-content-center text-center">
                        we provide customised study material catering to CET, JEE Main, JEE Advanced or NEET
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/setting-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Goal Setting</h5>
                      <p className="justify-content-center text-center">
                        At the beginning of the program, we set a 'Stretch Goal' for each student, based on every student performance
                      </p>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="tu-eduplatform">
                    <a href="blog-detail-right.html">
                      <img src="images/conversion-image.png" alt="img" style={{
                        display: "block",
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '50rem',
                        height: '50px'
                      }} />
                      <h5 className="pt-2 justify-content-center text-center">Individual Attention</h5>
                      <p className="justify-content-center text-center">
                        Our success is determined by the performance of not just our top rankers, but of each and every student.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="tu-mainbtn">
                <NavLink to="/Signup" className="tu-primbtn-lg">
                  <span>Join our Community</span>
                  <i className="icon icon-lock" />
                </NavLink>
              </div> */}
            </div>
          </section>

          <section className="tu-main-section" style={{ marginTop: '-4%' }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    <h2 style={{ fontSize: '27px' }}>Welcome To Kota Times Career Institute</h2>
                  </div>
                </div>
              </div>
              <div className="row pt-3 pb-3 col-12">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="">
                    {/* <h5>Offering all types of courses</h5> */}
                    <div>
                      <b
                        style={{
                          fontSize: '100%'
                        }}>
                        KOTATIMES is a renowned name among educational service provider industry.
                        Our main services are in the field of Coaching School Empower program.
                        We offered courses for class 6th to 12th (Biology & Mathematics), NEET, AIIMS, IIT-JEE(Mains + Advance),
                        NEET,AIIMS , IIT-JEE ( MAINS+ADVANCE) , OLYMPIAD , KVPY ,NTSE ,NTSO IJSO
                        all Board exams
                      </b>
                    </div>

                    <div className="pt-3">
                      <p style={{
                        fontSize: '100%'
                      }}> <b>We also offer  courses, online and offline test series 24*7 Doubt Solving  etc.</b></p>
                    </div>

                    <div>
                      <p style={{
                        fontSize: '100%'
                      }}>
                        <b>
                          The founders of KOTATIMES believe that good results can be achieved only by keeping Students of this age close to parents and in a family environment, our team has worked tirelessly to develop
                          a system that gives students a competitive environment along with the best in class education.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  {/* <img src="images/welcome-to-kota-times.jpeg" alt="img"
                    className="img-fluid"
                  /> */}

                  <div className="embed-responsive embed-responsive-21by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sUnN7GBYzz8" style={{
                      width: '100%',
                      height: '22rem'
                    }}></iframe>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* PLATFORM END */}
          {/* COUNTER START */}

          <section>
            <div className="tu-statsholder">
              <div className="container">
                <ul id="tu-counter" className="tu-stats">
                  <li>
                    <img src="images/stats/img-01.png" alt="img" style={{
                      display: "block",
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 'auto'
                    }} />
                    <div className="tu-stats_info justify-content-center text-center pt-2">
                      <h4>
                        <span
                          data-from={0}
                          data-to={20}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          20
                        </span>
                        +
                      </h4>
                      <p>Courses available for verified and top tutors</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/stats/img-02.png" alt="img" style={{
                      display: "block",
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 'auto'
                    }} />
                    <div className="tu-stats_info justify-content-center text-center pt-2">
                      <h4>
                        <span
                          data-from={0}
                          data-to={35000}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          35,000
                        </span>
                        +
                      </h4>
                      <p>Total Lectures Classes have taken</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/stats/img-03.png" alt="img" style={{
                      display: "block",
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 'auto'
                    }} />
                    <div className="tu-stats_info justify-content-center text-center pt-2">
                      <h4>
                        <span
                          data-from={0}
                          data-to={10}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          10
                        </span>
                        +
                      </h4>
                      <p>User daily average time spent on the platform</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/stats/img-04.png" alt="img" style={{
                      display: "block",
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 'auto'
                    }} />
                    <div className="tu-stats_info justify-content-center text-center pt-2">
                      <h4>
                        <span
                          data-from={0}
                          data-to={100}
                          data-speed={8000}
                          data-refresh-interval={50}
                        >
                          100
                        </span>
                        +
                      </h4>
                      <p>
                        Active instructor and students available on the platform
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* COUNTER END */}
          {/* QUICK START */}

          {/* { our notification start} */}


          <section className="tu-main-section" style={{
            marginTop: '2%'
          }}>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    <h2 style={{ fontSize: '27px' }}>Latest Notification</h2>
                    <h4 id="demoteacher">Stay updated with upcoming notifications and news</h4>
                    {/* <p>
                        Accusamus et iusidio dignissimos ducimus blanditiis
                        praesentium voluptatum deleniti atque corrupti quos
                        dolores etmquasa molestias epturi sint occaecati
                        cupiditate non providente mikume molareshe.
                      </p> */}
                  </div>
                </div>
              </div>

              <div class="container">


                <div className="row g-4 pt-3 pb-3">

                  <>

                    <Slider {...settings}>

                      {
                        notification.map((noti, index) => {
                          return (
                            <>
                              <div className="card me-4" key={index} >
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
                                  padding: '7%',
                                  color: "black"
                                }}
                                id="text-course-event"
                                >
                                  <a href="" style={{
                                    color: "black"
                                  }}>
                                    <b>{noti.title}</b></a>
                                </div>
                              </div>

                            </>
                          )
                        })
                      }

                    </Slider>
                  </>
                </div>
              </div>


              <div className="tu-mainbtn">
                <Link to="/Notification" className="tu-primbtn-lg">
                  <span>Explore of Notification</span>
                  <i className="icon icon-chevron-right" />
                </Link>
              </div>
            </div>

          </section>


          {/* { our notification end} */}

          <section className="tu-main-section" style={{
            marginTop: '-5%'
          }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    <h2 style={{ fontSize: '27px' }}>Our Achivements</h2>
                    {/* <h2>Choose from the top visited categories you may like</h2> */}
                    {/* <p>
                      Accusamus et iusidio dignissimos ducimus blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores etmquasa molestias epturi sint occaecati
                      cupiditate non providente mikume molareshe.
                    </p> */}
                  </div>
                </div>
              </div>
              <div>
                <div class='container'>
                  <Slider {...demo}>
                    {
                      data.map((item) => (
                        <>
                          <div className="change-image">
                            <img
                              src={"https://kt.kotatimes.ac//uploads/form_sliders/" + item.banner_images}
                              alt
                              className="img-fluid"
                              id="dikha2"
                              style={{
                                width: '100%'
                              }}
                            />
                            <h6 className="mt-5" style={{
                              textAlign: 'center'
                            }}>{item.text}</h6>
                          </div>
                        </>
                      ))
                    }
                  </Slider>
                  {/* </OwlCarousel> */}
                </div>
              </div>

              {/* <div className="tu-mainbtn">
                <a href="" className="tu-primbtn-lg">
                  <span>Explore All categories</span>
                  <i className="icon icon-chevron-right" />
                </a>
              </div> */}

            </div>
          </section>


          <section className="tu-main-section" style={{
            marginTop: '-8%'
          }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    <h2 style={{ fontSize: '27px' }}>Our Courses </h2>
                    <h4 id="demoteacher">Your One-Stop Destination For Success</h4>
                    {/* <p>
                      Accusamus et iusidio dignissimos ducimus blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores etmquasa molestias epturi sint occaecati
                      cupiditate non providente mikume molareshe.
                    </p> */}
                  </div>
                </div>
              </div>

              <div class="container">

                <div className="row g-4 pt-3">
                  <Slider {...coursesetting}>
                    {
                      course.map((course, index) => (
                        <>
                          <div className="card me-4" key={index}>
                            <img
                              src={"https://kt.kotatimes.ac//uploads/form_course/" + course.image}
                              alt=""
                              className="img-fluid"
                              style={{
                                  width:'100%',
                                  height:'30vh',
                              }}
                            />
                            <div className="card-body">
                              <div style={{
                                float: 'left'
                              }} 
                              id="text-course-left"
                              >
                                <div className="pt-2"><b>Course:</b></div>
                                <div className="pt-2"><b>Duration:</b></div>
                                <div className="pt-2"><b>Fee:</b></div>
                              </div>
                              <div style={{
                                float: 'right'
                              }}
                              id="text-course-right"
                              >
                                <div className="pt-2">{course.name}</div>
                                <div className="pt-2">{course.duration}</div>
                                <div className="pt-2">{course.fee}</div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    }
                  </Slider>
                </div>
              </div>


              <div className="tu-mainbtn">
                <Link to="/Courses" className="tu-primbtn-lg">
                  <span>Explore of Courses</span>
                  <i className="icon icon-chevron-right" />
                </Link>
              </div>

            </div>
          </section>


          {/* { our faculty} */}

          <section className="tu-main-section" style={{
            marginTop: '-5%'
          }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    <h2 style={{ fontSize: '27px' }}>Our Faculty </h2>
                    <h4 id="demoteacher">Learn from our best faculty. Specially-trained teachers bring out the best in every student.</h4>
                    {/* <p>
                      Accusamus et iusidio dignissimos ducimus blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores etmquasa molestias epturi sint occaecati
                      cupiditate non providente mikume molareshe.
                    </p> */}
                  </div>
                </div>
              </div>
              <div class="container">
                <div className="row g-4 pt-3">
                  <Slider {...teachersetting}>
                    {
                      teacher.map((tech, index) => (
                        <>
                          <div className="card me-4" key={index}>
                            <img
                              src={"https://kt.kotatimes.ac//uploads/form_teacher/" + tech.image}
                              alt=""
                              className="img-fluid"
                              style={{
                                  width:'100%',
                                  height:'30vh',
                              }}
                            />
                            <div className="card-body">

                              <div style={{
                                float: "left"
                              }}
                                id="textleft"
                              >
                                <div className="pt-2"><b>Faculty Name:</b></div>
                                <div className="pt-2"><b> Qualification:</b></div>
                                <div className="pt-2"><b>Subject:</b></div>
                                <div className="pt-2"><b> Position:</b></div>
                              </div>

                              <div style={{
                                float: 'right'
                              }} 
                                id="textright"
                              >
                                <div className="pt-2">{tech.teacher_name}</div>
                                <div className="pt-2">{tech.qwalification_}</div>
                                <div className="pt-2">{tech.subject}</div>
                                <div className="pt-2">{tech.position}</div>
                              </div>

                            </div>
                          </div>
                        </>
                      ))
                    }
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          {/* {// our faculty end} */}

          {/* our event start */}

          <section className="tu-main-section" style={{
            marginTop: '2%'
          }}>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    <h2 style={{ fontSize: '27px' }}>Our Events</h2>
             
                  </div>
                </div>
              </div>

              <div class="container">


                <div className="row g-4 pt-3 pb-3">
                  <>
                    <Slider {...eventsetting}>
                      {
                        event.map((noti, index) => {
                          return (
                            <>
                              <div className="card me-4" key={index} >
                                <img
                                  src={"https://kt.kotatimes.ac//uploads/form_event/" + noti.banner}
                                  alt=""
                                  className="img-fluid"
                                  style={{
                                      objectFit:'cover',
                                      height:'40vh'
                                  }}
                                />
                                <div style={{
                                  padding: '7%',
                                  color: "black"
                                }}
                                id="text-course-event"
                                >
                                  <a href="" style={{
                                    color: "black"
                                  }}>
                                    <b >{noti.event_titl}</b></a>
                                </div>
                              </div>
                            </>
                          )
                        })
                      }
                    </Slider>
                  </>
                </div>
              </div>
            </div>
          </section>


          {/* our event end */}

          {/* QUICK END */}

          {/* SUCCESS START */}

          <section>
            <div className="tu-success-stories tu-success-storiesvtwo">
              <div className="container">
                <div className="tu-sucesstor_pattren">
                  <img
                    src="images/index/success_stories/pattren.svg"
                    alt="img"
                  />
                </div>
                <div className="row tu-sucesstorslider_title">
                  <div className="col-lg-8">
                    <div className="tu-maintitle">
                      <h2 style={{ fontSize: '27px' }}>
                        See how our visitors &amp; members made their{" "}
                        <span>#Success Stories</span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <OwlCarousel className="owl-theme" {...options} loop>
                      <div className="col-lg-12">

                        <li className="splide__slide mx-1">
                          <div className="tu-sucesstor_title tu-sucesstories">
                            {/* <img
                              src="images/index/success_stories/users/img-01.jpg"
                              style={{
                                height: '100px',
                                width: '100px'
                              }}
                              alt="img"
                            /> */}
                            <img
                              src="images/index/success_stories/users/img-03.jpg"
                              alt="img"
                              style={{
                                height: '100px',
                                width: '100px'
                              }} />
                            {/* <h5>
                              I highly recommend this platform, amazing experience
                              with fast delivery
                            </h5> */}
                            <blockquote>
                              Kotatime is really an effective institute.
                              The teachers are always eager to solve my doubts.
                              Smart Achievers helped me to gain confidence in physics.
                              I am very thankfull to Vinay Sir for his continuous support and motivation.
                            </blockquote>
                            <h4>
                              Shivam shukla
                              <span>Student, Class – XII</span>
                            </h4>
                            <div className="tu-sucesstories_comma">
                              <img
                                src="images/index/success_stories/commav2.svg"
                                alt="img"
                                style={{
                                  height: '100px',
                                  width: '100px'
                                }}
                              />
                            </div>
                          </div>
                        </li>

                      </div>

                      <div className="col-lg-12">

                        <li className="splide__slide mx-1">
                          <div className="tu-sucesstor_title tu-sucesstories">
                            <img
                              src="images/index/success_stories/users/img-03.jpg"
                              alt="img"
                              style={{
                                height: '100px',
                                width: '100px'
                              }}
                            />
                            {/* 
                            <h5>
                              On first project I feel its a mess then later it
                              turn into an great details for me
                            </h5> */}
                            <blockquote>
                              Smart Achievers is a great institute that helped me to gain the necessary confidence in
                              my studies for class 12th Boards.
                            </blockquote>
                            <h4>
                              Ravi
                              <span>Stdudent, XII</span>
                            </h4>
                            <div className="tu-sucesstories_comma">
                              <img
                                src="images/index/success_stories/commav2.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </li>
                      </div>

                      <div className="col-lg-12">

                        <li className="splide__slide mx-1">
                          <div className="tu-sucesstor_title tu-sucesstories">
                            <img
                              src="images/index/success_stories/users/img-03.jpg"
                              alt="img"
                              style={{
                                height: '100px',
                                width: '100px'
                              }}
                            />
                            {/* <h5>
                              On first project I feel its a mess then later it
                              turn into an great details for me
                            </h5> */}
                            <blockquote>
                              I had a great experience at Kotatimes. All my concepts were clear and
                              I felt confident while appearing for the board exams.
                            </blockquote>
                            <h4>
                              Jayesh
                              <span>Stdudent, NEET</span>
                            </h4>
                            <div className="tu-sucesstories_comma">
                              <img
                                src="images/index/success_stories/commav2.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </li>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SUCCESS END */}

          {/*  PROFESSIONOLL  START */}

          <section className="tu-main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tu-maintitle text-center">
                    {/* <img src="images/zigzag-line.svg" alt="img" /> */}
                    <h2
                      style={{ fontSize: '30px' }}
                    >Our Blog</h2>
                    {/* <h2>
                      Every instructor is professional and highly qualified
                    </h2> */}
                    {/* <p>
                      Accusamus et iusidio dignissimos ducimus blanditiis
                      praesentium voluptatum deleniti atque corrupti quos
                      dolores etmquasa molestias epturi sint occaecati
                      cupiditate non providente mikume molareshe.
                    </p> */}
                  </div>
                </div>
              </div>

              <div class="container">

                <div className="row g-4 pt-3">

                  {/* <Slider {...settings1}>
                    {
                      list.map((course, index) => (
                        <>
                          <div className="card me-4" key={index}>
                            <img
                              src={"https://kt.kotatimes.ac//uploads/form_blog/" + course.blog_image}
                              alt=""
                              className="img-fluid"
                              style={{
                                  width:'100%',
                                  height:'30vh',
                              }}
                            />
                            <div className="card-body">
                              <div className="blog-text">
                                <div className="pt-1">{course.title}</div>
                                <div className="pt-1">{parse(course.blog_description.substr(0, 77))}</div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    }
                  </Slider> */}

                  <Slider {...settings1}>
                    {
                      blog.map((course, index) => (
                        <>
                          <div className="card me-4" key={index}>
                            <img
                              src={"https://kt.kotatimes.ac//uploads/form_blog/" + course.blog_image}
                              alt=""
                              className="img-fluid"
                              style={{
                                  width:'100%',
                                  height:'30vh',
                              }}
                            />
                            <div className="card-body">
                              <div className="blog-text">
                                <div className="pt-1">{course.title}</div>
                                <div className="pt-1">{parse(course.blog_description.substr(0, 77))}</div>
                                <div className="pt-2"><Link to={`/Learnmore/${course.id}`}>Learn more</Link></div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    }
                  </Slider>

                </div>
              </div>

              {/* 
              <div className="tu-mainbtn">
                <a href="search-listing-two.html" className="tu-primbtn-lg">
                  <span>Explore all instructors</span>
                  <i className="icon icon-chevron-right" />
                </a>
              </div> */}

            </div>
          </section>

          {/* PROFESSIONOLL  END */}

        </main>

        {/* MAIN END */}

        {/* FOOTER START */}

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

        {/* FOOTER END */}

        {/* Custom Tooltip Render Here */}

        <div className="tu-tippysm">
          <span id="tu-verifed" className="d-none">
            <span className="tu-tippytooltip">
              <span>Verified</span>
            </span>
          </span>
        </div>

      </div>
    </>
  );
};
export default Indexv2;


{/* <div
                id="tu-categoriesslider"
                className="splide tu-categoriesslider tu-splidedots"
              >
                <div className="splide__track">

                  <ul className="splide__list">

                    {
                      data.map((item) => (
                        <>
                          <li className="splide__slide">
                            <a
                              className="tu-categories_content"
                              href=""
                            >
                              <img
                                src={ + item.banner_images}
                                alt="img"
                                style={{
                                  width: "100px",
                                  height: "100px"
                                }}
                              />
                              <div className="tu-categories_title">
                                <h6>{item.text}</h6>
                              </div>
                            </a>
                          </li>
                        </>
                      ))
                    }


                    {/* <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-10.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Computer &amp; hardware</h6>
                          <span>4,329 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-11.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Beauty learning</h6>
                          <span>6,406 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-12.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>IT &amp; development</h6>
                          <span>5,925 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-13.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Islamic education</h6>
                          <span>4,157 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-09.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Music learning</h6>
                          <span>6,301 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-10.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Computer &amp; hardware</h6>
                          <span>4,329 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-11.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Beauty learning</h6>
                          <span>6,406 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-12.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>IT &amp; development</h6>
                          <span>5,925 Listings</span>
                        </div>
                      </a>
                    </li>
                    <li className="splide__slide">
                      <a
                        className="tu-categories_content"
                        href="search-listing-two.html"
                      >
                        <img
                          src="images/index/categories/img-13.jpg"
                          alt="img"
                        />
                        <div className="tu-categories_title">
                          <h6>Islamic education</h6>
                          <span>4,157 Listings</span>
                        </div>
                      </a>
                    </li> */}
{/* </ul>
                </div>
              </div>  */}



{/* <div
                id="tu-featurelist"
                className="splide tu-featurelist  tu-splidedots "
              >
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-01.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-01.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$893.30/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-33</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(66,951)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-02.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-02.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html">Gwendolyn Parker</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Las Vegas, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,385.10/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-80</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(38,494)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-03.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-03.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                {" "}
                                <a href="tutor-detail.html"> Glen Burns</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Chicago, OH</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,336.83/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-46</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(47,044)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-04.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-04.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html">
                                  {" "}
                                  William Williams
                                </a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Nashville, IL</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,198.12/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-54</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-88</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(57,282)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-01.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-01.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$893.30/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-33</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(4,448)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-02.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-02.jpg"
                                alt="image-description"

                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,385.10/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-80</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(57,282)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}

{/* <div
                id="tu-featurelist"
                className="splide tu-featurelist  tu-splidedots "
              >
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-01.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-01.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$893.30/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-33</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(66,951)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-02.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-02.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html">Gwendolyn Parker</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Las Vegas, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,385.10/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-80</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(38,494)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-03.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-03.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                {" "}
                                <a href="tutor-detail.html"> Glen Burns</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Chicago, OH</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,336.83/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-46</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(47,044)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-04.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-04.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html">
                                  {" "}
                                  William Williams
                                </a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Nashville, IL</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,198.12/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-54</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-88</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(57,282)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-01.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-01.jpg"
                                alt="image-description"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$893.30/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-33</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(4,448)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-featureitem">
                        <figure>
                          <a href="tutor-detail.html">
                            <img
                              src="images/index/qualified/img-02.jpg"
                              alt="image-description"
                              className="img-fluid"
                            />
                          </a>
                          <span className="tu-featuretag">FEATURED</span>
                        </figure>
                        <div className="tu-authorinfo">
                          <div className="tu-authordetail">
                            <figure>
                              <img
                                src="images/index/professionol/img-02.jpg"
                                alt="image-description"

                              />
                            </figure>
                            <div className="tu-authorname">
                              <h5>
                                <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <span>Arlington, TN</span>
                            </div>
                            <ul className="tu-authorlist">
                              <li>
                                <span>
                                  Starting from:<em>$1,385.10/hr</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Mobile:<em>xxx-xxxxx-11</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Whatsapp:<em>xxx-xxxxx-80</em>
                                </span>
                              </li>
                              <li>
                                <span>
                                  Qualification:<em>B.Tech/B.E.</em>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="tu-instructors_footer">
                            <div className="tu-rating">
                              <i className="fas fa-star" />
                              <h6>5.0</h6>
                              <span>(57,282)</span>
                            </div>
                            <div className="tu-instructors_footer-right">
                              <a href="javascript:void(0);">
                                <i className="icon icon-heart" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
