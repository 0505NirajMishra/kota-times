import React from "react";

const Searchlisting = () => {
  return (
    <>
      <div>

        {/* Preloader Start */}
        
        {/* <div className="tu-preloader">
          <div className="tu-preloader_holder">
            <img src="images/favicon.png" alt="laoder img" />
            <div className="tu-loader" />
          </div>
        </div> */}
        
        {/* Preloader End */}
        {/* HEADER START */}

        <header className="tu-header">
          <nav className="navbar navbar-expand-xl tu-navbar">
            <div className="container-fluid">
              <strong>
                <a className="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="Logo" />
                </a>
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
                    <a className="nav-link active" href="search-listing.html">
                      Online classes
                      <span className="tu-tag">NEW</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="search-listing.html">
                      Learning material
                      <span className="tu-tag tu-bggreen">FREE</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Success stories
                    </a>
                  </li>
                  <li className="menu-item-has-children nav-item">
                    <a href="javascript:void(0);">Pages</a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0)">Home Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="index-without-login.html">
                              Home v2{" "}
                              <em className="tu-menutag">without login</em>
                            </a>
                          </li>
                          <li>
                            <a href="indexv2.html">Home v3</a>
                          </li>
                          <li>
                            <a href="indexv3.html">Home v4</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0)">Provider listings</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="search-listing.html">
                              Provider listings v1
                            </a>
                          </li>
                          <li>
                            <a href="search-listing-two.html">
                              Provider listings v2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="tutor-detail.html">Tutor Detail</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0);">Blogs</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-grid-left.html">Blog list</a>
                          </li>
                          <li>
                            <a href="blog-grid-right.html">
                              Blog list{" "}
                              <em className="tu-menutag">Right sidebar</em>
                            </a>
                          </li>
                          <li>
                            <a href="blog-detail-left.html">Blog detail</a>
                          </li>
                          <li>
                            <a href="blog-detail-right.html">
                              Blog detail{" "}
                              <em className="tu-menutag">Right sidebar</em>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0);">Other pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="how-it-work.html">How it work</a>
                          </li>
                          <li>
                            <a href="package.html">Packges</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="signup.html">Sign up</a>
                          </li>
                          <li>
                            <a href="lost-password.html">Lost password</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <ul className="nav-item tu-afterlogin">
                <li>
                  <a className="nav-link" href="index.html">
                    <span className="icon icon-message-square">
                      <i className="tu-messagenoti">4</i>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="index.html">
                    <span className="icon icon-bell">
                      <i className="tu-messagenoti">3</i>
                    </span>
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <strong>
                    <a className="nav-link" href="javascript:void(0);">
                      <img src="images/login.png" alt="image-description" />
                    </a>
                  </strong>
                  <ul className="sub-menu">
                    <li>
                      <a href="profile-setting-a.html">
                        <i className="icon icon-user" />
                        Personal details
                      </a>
                    </li>
                    <li>
                      <a href="profile-setting-b.html">
                        <i className="icon icon-phone" />
                        Contact details
                      </a>
                    </li>
                    <li>
                      <a href="profile-setting-c.html">
                        <i className="icon icon-book" />
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="profile-setting-d.html">
                        <i className="icon icon-book-open" />
                        Subjects I can teach
                      </a>
                    </li>
                    <li>
                      <a href="profile-setting-e.html">
                        <i className="icon icon-image" />
                        Media gallery
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        
        {/* HEADER END */}
        {/* Main start */}
        <main className="tu-bgmain tu-main">
          <section className="tu-main-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="tu-listing-wrapper">
                    <div className="tu-sort">
                      <h3>
                        132,576 Search result in<span>“Mathematic”</span>tutors
                      </h3>
                      <div className="tu-sort-right-area">
                        <div className="tu-sortby">
                          <span>Sort by: </span>
                          <div className="tu-select">
                            <select className="form-control tu-selectv">
                              <option>Price low to high </option>
                              <option>Price high to low</option>
                            </select>
                          </div>
                        </div>
                        <div className="tu-filter-btn">
                          <a
                            className="tu-listbtn active"
                            href="search-listing.html"
                          >
                            <i className="icon icon-list" />
                          </a>
                          <a
                            className="tu-listbtn"
                            href="search-listing-two.html"
                          >
                            <i className="icon icon-grid" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tu-searchbar-wrapper">
                      <div className="tu-appendinput">
                        <div className="tu-searcbar">
                          <div className="tu-inputicon">
                            <a href="javascript:void(0);">
                              <i className="icon icon-search" />
                            </a>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What do you want to explore?"
                            />
                          </div>
                          <div className="tu-select">
                            <i className="icon icon-layers" />
                            <select
                              id="selectv8"
                              data-placeholderinput="Select list"
                              data-placeholder="Select category"
                              className="form-control"
                            >
                              <option label="Select category" />
                              <option>Automotive</option>
                              <option>Beauty &amp; Care</option>
                              <option>Marketing</option>
                              <option>Child Care</option>
                              <option>House Cleaning</option>
                            </select>
                          </div>
                          <a
                            href="search-listing.html"
                            className="tu-primbtn-lg tu-primbtn-orange"
                          >
                            Search now
                          </a>
                        </div>
                      </div>
                      <div className="tu-listing-search">
                        <figure>
                          <img src="images/listing/shape.png" alt="image" />
                        </figure>
                        <span>Start from here</span>
                      </div>
                    </div>
                    <ul className="tu-searchtags">
                      <li>
                        <span>
                          Pre-School{" "}
                          <a href="javascript:void(0)">
                            <i className="icon icon-x" />
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Middle (Class 6-8){" "}
                          <a href="javascript:void(0)">
                            <i className="icon icon-x" />
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          Intermediate{" "}
                          <a href="javascript:void(0)">
                            <i className="icon icon-x" />
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          5.0 Stars{" "}
                          <a href="javascript:void(0)">
                            <i className="icon icon-x" />
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          Online bookings{" "}
                          <a href="javascript:void(0)">
                            <i className="icon icon-x" />
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          Male only{" "}
                          <a href="javascript:void(0)">
                            <i className="icon icon-x" />
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-xxl-3">
                  <aside className="tu-asidewrapper">
                    <a href="javascript:void(0)" className="tu-dbmenu">
                      <i className="icon icon-chevron-left" />
                    </a>
                    <div className="tu-aside-menu">
                      <div className="tu-aside-holder">
                        <div
                          className="tu-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side2"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Education level</h5>
                        </div>
                        <div id="side2" className="collapse show">
                          <div className="tu-aside-content">
                            <div className="tu-filterselect">
                              <div className="tu-select">
                                <select
                                  id="selectv7"
                                  data-placeholder="Select education level"
                                  data-placeholderinput="Select education level"
                                  className="form-control tu-input-field"
                                >
                                  <option label="Select category" />
                                  <option value="selectparcat">
                                    Primary (Class 1-5)
                                  </option>
                                  <option value="selectparcat">
                                    Primary (Class 6-8)
                                  </option>
                                  <option value="selectparcat">
                                    Primary (Class 9-10)
                                  </option>
                                  <option value="selectparcat">
                                    Language courses
                                  </option>
                                  <option value="selectparcat">
                                    Short courses
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="tu-filterselect">
                              <h6>Choose subjects</h6>
                              <ul className="tu-categoriesfilter">
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2"
                                      name="expcheck"
                                      defaultChecked
                                    />
                                    <label htmlFor="expcheck2">
                                      Social studies
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2a"
                                      name="expcheck"
                                    />
                                    <label htmlFor="expcheck2a">Urdu</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2a1"
                                      name="expcheck"
                                      defaultChecked
                                    />
                                    <label htmlFor="expcheck2a1">
                                      Mathematic
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2a2"
                                      name="expcheck"
                                    />
                                    <label htmlFor="expcheck2a2">English</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2a3"
                                      name="expcheck"
                                    />
                                    <label htmlFor="expcheck2a3">Drawing</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2a4"
                                      name="expcheck"
                                      defaultChecked
                                    />
                                    <label htmlFor="expcheck2a4">
                                      Computer science
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="tu-check tu-checksm">
                                    <input
                                      type="checkbox"
                                      id="expcheck2a21"
                                      name="expcheck"
                                    />
                                    <label htmlFor="expcheck2a21">
                                      physics
                                    </label>
                                  </div>
                                </li>
                              </ul>
                              <div className="show-more">
                                <a
                                  href="javascript:void(0);"
                                  className="tu-readmorebtn tu-show_more"
                                >
                                  Show all
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tu-aside-holder">
                        <div
                          className="tu-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side3"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Price range</h5>
                        </div>
                        <div id="side3" className="collapse show">
                          <div className="tu-aside-content">
                            <div
                              className="tu-rangevalue"
                              data-bs-target="#tu-rangecollapse"
                              role="list"
                              aria-expanded="false"
                            >
                              <div className="tu-areasizebox">
                                <input
                                  type="number"
                                  className="form-control tu-input-field"
                                  step={1}
                                  placeholder="Min price"
                                  id="tu-min-value"
                                />
                                <input
                                  type="number"
                                  className="form-control tu-input-field"
                                  step={1}
                                  placeholder="Max price"
                                  id="tu-max-value"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tu-distanceholder">
                            <div id="tu-rangecollapse" className="collapse">
                              <div className="tu-distance">
                                <div
                                  id="tu-rangeslider"
                                  className="tu-tooltiparrow tu-rangeslider"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tu-aside-holder">
                        <div
                          className="tu-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side1a"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Rating</h5>
                        </div>
                        <div id="side1a" className="collapse show">
                          <div className="tu-aside-content">
                            <ul className="tu-categoriesfilter">
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="rate"
                                    name="rate"
                                    defaultChecked
                                  />
                                  <label htmlFor="rate">
                                    <span className="tu-stars">
                                      <span />
                                    </span>
                                    <em className="tu-totalreview">
                                      <span>
                                        5.0/<em>5.0</em>
                                      </span>
                                    </em>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="rate4"
                                    name="rate4"
                                  />
                                  <label htmlFor="rate4">
                                    <span className="tu-stars tu-fourstar">
                                      <span />
                                    </span>
                                    <em className="tu-totalreview">
                                      <span>
                                        4.0/<em>5.0</em>
                                      </span>
                                    </em>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="rate3"
                                    name="rate2"
                                    defaultChecked
                                  />
                                  <label htmlFor="rate3">
                                    <span className="tu-stars tu-threestar">
                                      <span />
                                    </span>
                                    <em className="tu-totalreview">
                                      <span>
                                        3.0/<em>5.0</em>
                                      </span>
                                    </em>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="rate2a"
                                    name="rate2a"
                                  />
                                  <label htmlFor="rate2a">
                                    <span className="tu-stars tu-twostar">
                                      <span />
                                    </span>
                                    <em className="tu-totalreview">
                                      <span>
                                        2.0/<em>5.0</em>
                                      </span>
                                    </em>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="rate1a"
                                    name="rate1a"
                                  />
                                  <label htmlFor="rate1a">
                                    <span className="tu-stars tu-onestar">
                                      <span />
                                    </span>
                                    <em className="tu-totalreview">
                                      <span>
                                        1.0/<em>5.0</em>
                                      </span>
                                    </em>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tu-aside-holder">
                        <div
                          className="tu-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#Location"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Location</h5>
                        </div>
                        <div id="Location" className="collapse show">
                          <div className="tu-aside-content">
                            <div className="tu-filterselect">
                              <div className="tu-placeholderholder">
                                <input
                                  type="email"
                                  className="form-control"
                                  required
                                  placeholder="Full Name"
                                />
                                <div className="tu-placeholder">
                                  <span>Enter Location</span>
                                  <em>*</em>
                                </div>
                              </div>
                            </div>
                            <div className="tu-distanceholder">
                              <div className="tu-rangeslider tu-tooltiparrow">
                                <span>
                                  Radius in miles <em>m</em>
                                  <span
                                    className="example-val"
                                    id="slider1-span"
                                  >
                                    65
                                  </span>
                                </span>
                                <div id="tu-rangeslidertwo" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tu-aside-holder">
                        <div
                          className="tu-asidetitle"
                          data-bs-toggle="collapse"
                          data-bs-target="#side1ab"
                          role="button"
                          aria-expanded="true"
                        >
                          <h5>Miscellaneous</h5>
                        </div>
                        <div id="side1ab" className="collapse show">
                          <div className="tu-aside-content">
                            <ul className="tu-categoriesfilter">
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="nameaa"
                                    name="expcheck"
                                    defaultChecked
                                  />
                                  <label htmlFor="nameaa">
                                    Online bookings
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="namea"
                                    name="expcheck"
                                  />
                                  <label htmlFor="namea">Profile photos</label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="namea1"
                                    name="expcheck"
                                    defaultChecked
                                  />
                                  <label htmlFor="namea1">Male only</label>
                                </div>
                              </li>
                              <li>
                                <div className="tu-check tu-checksm">
                                  <input
                                    type="checkbox"
                                    id="namea2"
                                    name="expcheck"
                                  />
                                  <label htmlFor="namea2">Female only</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tu-filterbtns">
                        <a href="search-listing.html" className="tu-primbtn">
                          Apply filters
                        </a>
                        <a href="search-listing.html" className="tu-sb-sliver">
                          Clear all filters
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-xl-8 col-xxl-9">
                  <div className="tu-listinginfo-holder">
                    <div className="tu-listinginfo">
                      <span className="tu-cardtag" />
                      <div className="tu-listinginfo_wrapper">
                        <div className="tu-listinginfo_title">
                          <div className="tu-listinginfo-img">
                            <figure>
                              <img src="images/listing/img-01.png" alt="imge" />
                            </figure>
                            <div className="tu-listing-heading">
                              <h5>
                                <a href="tutor-detail.html">Mistie Monge</a>{" "}
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <div className="tu-listing-location">
                                <span>
                                  5.0 <i className="fa-solid fa-star" />
                                  <em>(4,448)</em>
                                </span>
                                <address>
                                  <i className="icon icon-map-pin" /> Phoenix,
                                  MN
                                </address>
                              </div>
                            </div>
                          </div>
                          <div className="tu-listinginfo_price">
                            <span>Starting from:</span>
                            <h4>$712.93/hr</h4>
                          </div>
                        </div>
                        <div className="tu-listinginfo_description">
                          <p>
                            Hello there! My name is frederick and I'm currently
                            a pre-medical student. I have a deep passion for
                            teaching and I am looking for students, mainly
                            primary, to help them get ahead of school and ace
                            their grades!
                          </p>
                        </div>
                        <div className="tu-listinginfo_service">
                          <h6>You can get teaching service direct at</h6>
                          <ul className="tu-service-list">
                            <li>
                              <span>
                                <i className="icon icon-home tu-greenclr" />
                                My home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-map-pin tu-blueclr" />
                                Student's home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-video tu-orangeclr" />
                                Online
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tu-listinginfo_btn">
                        <div className="tu-iconheart">
                          <i className="icon icon-heart" />
                          <span>Add to save</span>
                        </div>
                        <div className="tu-btnarea">
                          <a href="login.html" className="tu-secbtn">
                            Let’s chat
                          </a>
                          <a href="tutor-detail.html" className="tu-primbtn">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tu-listinginfo">
                      <span className="tu-cardtag" />
                      <div className="tu-listinginfo_wrapper">
                        <div className="tu-listinginfo_title">
                          <div className="tu-listinginfo-img">
                            <figure>
                              <img src="images/listing/img-02.png" alt="imge" />
                            </figure>
                            <div className="tu-listing-heading">
                              <h5>
                                <a href="tutor-detail.html">Jamie Armstrong</a>
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <div className="tu-listing-location">
                                <span>
                                  5.0 <i className="fa-solid fa-star" />
                                  <em>(4,448)</em>
                                </span>
                                <address>
                                  <i className="icon icon-map-pin" /> New
                                  Orleans, OR
                                </address>
                              </div>
                            </div>
                          </div>
                          <div className="tu-listinginfo_price">
                            <span>Starting from:</span>
                            <h4>$610.29/hr</h4>
                          </div>
                        </div>
                        <div className="tu-listinginfo_description">
                          <p>
                            Hello there! My name is frederick and I'm currently
                            a pre-medical student. I have a deep passion for
                            teaching and I am looking for students, mainly
                            primary, to help them get ahead of school and ace
                            their grades!
                          </p>
                        </div>
                        <div className="tu-listinginfo_service">
                          <h6>You can get teaching service direct at</h6>
                          <ul className="tu-service-list">
                            <li>
                              <span>
                                <i className="icon icon-home tu-greenclr" />
                                My home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-map-pin tu-blueclr" />
                                Student's home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-video tu-orangeclr" />
                                Online
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tu-listinginfo_btn">
                        <div className="tu-iconheart">
                          <i className="icon icon-heart" />
                          <span>Add to save</span>
                        </div>
                        <div className="tu-btnarea">
                          <a href="login.html" className="tu-secbtn">
                            Let’s chat
                          </a>
                          <a href="tutor-detail.html" className="tu-primbtn">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tu-listinginfo">
                      <span className="tu-cardtag" />
                      <div className="tu-listinginfo_wrapper">
                        <div className="tu-listinginfo_title">
                          <div className="tu-listinginfo-img">
                            <figure>
                              <img src="images/listing/img-03.png" alt="imge" />
                            </figure>
                            <div className="tu-listing-heading">
                              <h5>
                                <a href="tutor-detail.html">
                                  Nathaniel Fischer
                                </a>
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <div className="tu-listing-location">
                                <span>
                                  5.0 <i className="fa-solid fa-star" />
                                  <em>(4,448)</em>
                                </span>
                                <address>
                                  <i className="icon icon-map-pin" /> San
                                  Francisco, ID
                                </address>
                              </div>
                            </div>
                          </div>
                          <div className="tu-listinginfo_price">
                            <span>Starting from:</span>
                            <h4>$481.84/hr</h4>
                          </div>
                        </div>
                        <div className="tu-listinginfo_description">
                          <p>
                            Hello there! My name is frederick and I'm currently
                            a pre-medical student. I have a deep passion for
                            teaching and I am looking for students, mainly
                            primary, to help them get ahead of school and ace
                            their grades!
                          </p>
                        </div>
                        <div className="tu-listinginfo_service">
                          <h6>You can get teaching service direct at</h6>
                          <ul className="tu-service-list">
                            <li>
                              <span>
                                <i className="icon icon-home tu-greenclr" />
                                My home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-map-pin tu-blueclr" />
                                Student's home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-video tu-orangeclr" />
                                Online
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tu-listinginfo_btn">
                        <div className="tu-iconheart">
                          <i className="icon icon-heart" />
                          <span>Add to save</span>
                        </div>
                        <div className="tu-btnarea">
                          <a href="login.html" className="tu-secbtn">
                            Let’s chat
                          </a>
                          <a href="tutor-detail.html" className="tu-primbtn">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tu-listinginfo">
                      <span className="tu-cardtag" />
                      <div className="tu-listinginfo_wrapper">
                        <div className="tu-listinginfo_title">
                          <div className="tu-listinginfo-img">
                            <figure>
                              <img src="images/listing/img-04.png" alt="imge" />
                            </figure>
                            <div className="tu-listing-heading">
                              <h5>
                                <a href="tutor-detail.html">Bernard Keller</a>
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <div className="tu-listing-location">
                                <span>
                                  5.0 <i className="fa-solid fa-star" />
                                  <em>(4,448)</em>
                                </span>
                                <address>
                                  <i className="icon icon-map-pin" /> Austin, AZ
                                </address>
                              </div>
                            </div>
                          </div>
                          <div className="tu-listinginfo_price">
                            <span>Starting from:</span>
                            <h4>$505.81/hr</h4>
                          </div>
                        </div>
                        <div className="tu-listinginfo_description">
                          <p>
                            Hello there! My name is frederick and I'm currently
                            a pre-medical student. I have a deep passion for
                            teaching and I am looking for students, mainly
                            primary, to help them get ahead of school and ace
                            their grades!
                          </p>
                        </div>
                        <div className="tu-listinginfo_service">
                          <h6>You can get teaching service direct at</h6>
                          <ul className="tu-service-list">
                            <li>
                              <span>
                                <i className="icon icon-home tu-greenclr" />
                                My home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-map-pin tu-blueclr" />
                                Student's home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-video tu-orangeclr" />
                                Online
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tu-listinginfo_btn">
                        <div className="tu-iconheart">
                          <i className="icon icon-heart" />
                          <span>Add to save</span>
                        </div>
                        <div className="tu-btnarea">
                          <a href="login.html" className="tu-secbtn">
                            Let’s chat
                          </a>
                          <a href="tutor-detail.html" className="tu-primbtn">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tu-listinginfo">
                      <span className="tu-cardtag" />
                      <div className="tu-listinginfo_wrapper">
                        <div className="tu-listinginfo_title">
                          <div className="tu-listinginfo-img">
                            <figure>
                              <img src="images/listing/img-02.png" alt="imge" />
                            </figure>
                            <div className="tu-listing-heading">
                              <h5>
                                <a href="tutor-detail.html">
                                  Elizabeth Leonard
                                </a>
                                <i
                                  className="icon icon-check-circle tu-greenclr"
                                  data-tippy-trigger="mouseenter"
                                  data-tippy-html="#tu-verifed"
                                  data-tippy-interactive="true"
                                  data-tippy-placement="top"
                                />
                              </h5>
                              <div className="tu-listing-location">
                                <span>
                                  5.0 <i className="fa-solid fa-star" />
                                  <em>(4,448)</em>
                                </span>
                                <address>
                                  <i className="icon icon-map-pin" /> Tampa, LA
                                </address>
                              </div>
                            </div>
                          </div>
                          <div className="tu-listinginfo_price">
                            <span>Starting from:</span>
                            <h4>$475.66/hr</h4>
                          </div>
                        </div>
                        <div className="tu-listinginfo_description">
                          <p>
                            Hello there! My name is frederick and I'm currently
                            a pre-medical student. I have a deep passion for
                            teaching and I am looking for students, mainly
                            primary, to help them get ahead of school and ace
                            their grades!
                          </p>
                        </div>
                        <div className="tu-listinginfo_service">
                          <h6>You can get teaching service direct at</h6>
                          <ul className="tu-service-list">
                            <li>
                              <span>
                                <i className="icon icon-home tu-greenclr" />
                                My home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-map-pin tu-blueclr" />
                                Student's home
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="icon icon-video tu-orangeclr" />
                                Online
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tu-listinginfo_btn">
                        <div className="tu-iconheart">
                          <i className="icon icon-heart" />
                          <span>Add to save</span>
                        </div>
                        <div className="tu-btnarea">
                          <a href="login.html" className="tu-secbtn">
                            Let’s chat
                          </a>
                          <a href="tutor-detail.html" className="tu-primbtn">
                            View full profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav className="tu-pagination">
                    <ul>
                      <li className="tu-pagination-prev">
                        <a href="#">
                          <i className="icon icon-chevron-left" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">1</a>{" "}
                      </li>
                      <li>
                        <a href="#">2</a>{" "}
                      </li>
                      <li>
                        <a href="#">3</a>{" "}
                      </li>
                      <li className="active">
                        <a href="#">4</a>{" "}
                      </li>
                      <li>
                        <a href="#">...</a>{" "}
                      </li>
                      <li>
                        <a href="#">60</a>{" "}
                      </li>
                      <li className="tu-pagination-next">
                        <a href="#">
                          <i className="icon icon-chevron-right" />
                        </a>{" "}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Main end */}
        {/* FOOTER START */}
        <footer>
          <div className="tu-footerdark">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <strong className="tu-footerlogo">
                    <a href="index.html">
                      <img src="images/logo_white.png" alt="Logo" />
                    </a>
                  </strong>
                  <p className="tu-footerdescription">
                    Accusamus etidio dignissimos ducimus blanditiis praesentium
                    volupta eleniti atquete corrupti quolores etmquasa molestias
                    epturi sinteam occaecati cupiditate non providente mikume
                    molareshe.
                  </p>
                  <ul className="tu-socialmedia">
                    <li className="tu-facebookv3">
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="tu-twitterv3">
                      <a href="https://twitter.com/?lang=en" target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="tu-linkedinv3">
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="tu-dribbblev3">
                      <a href="https://dribbble.com/" target="_blank">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li className="tu-twitchv3">
                      <a href="https://www.twitch.tv/" target="_blank">
                        <i className="fab fa-twitch" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h5 className="tu-footertitle">
                    Feel free to share your question
                  </h5>
                  <ul className="tu-footerlist tu-footericonlist">
                    <li>
                      <a href="tel:+6287777263549">
                        <i className="icon icon-phone-call" />
                        <em>+62 877 77263549</em>
                        <span>( Mon to Sun 9am - 11pm GMT )</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@youremailid.co.uk">
                        <i className="icon icon-mail" />
                        <em>hello@youremailid.co.uk</em>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+681109998263">
                        <i className="icon icon-printer" />
                        <em>+62 811 09998263</em>
                      </a>
                    </li>
                    <li>
                      <a href="tel:(+33)775559375">
                        <i className="fab fa-whatsapp" />
                        <em>(+33)7 75 55 9375</em>
                        <span>( Mon to Sun 9am - 11pm GMT )</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <div className="tu-footerlistholder  tu-seperator">
                    <div className="tu-footercontent">
                      <h5 className="tu-footertitle">Tutor by subjects</h5>
                      <ul className="tu-footerlist">
                        <li>
                          <a href="search-listing.html">General mathematics</a>
                        </li>
                        <li>
                          <a href="search-listing.html">World languages</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Advanced placement</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Advance science play</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Social sciences</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            International baccalaureate®
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">Grooming technology</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Maketing business</a>
                        </li>
                        <li>
                          <a href="search-listing.html">ACT® test prep</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            English communications
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">Career support</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            PSAT/NMSQT® &amp; SAT® prep
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">Content writing</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Student success skills
                          </a>
                        </li>
                        <li className="tu-footerlist-explore">
                          <a href="search-listing.html">Explore all</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tu-footercontent-two">
                      <h5 className="tu-footertitle">
                        Online classes
                        <span className="tu-tag tu-bggreen">NEW</span>
                      </h5>
                      <ul className="tu-footerlist">
                        <li>
                          <a href="javascript:void(0);">
                            Online science classes
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Online islamiat classes
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Online mathemetic classes
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">Online java classes</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Online computer classes
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">IBM python Analyst</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Online geographic classes
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Online C programming classes
                          </a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Online statistic classes
                          </a>
                        </li>
                        <li className="tu-footerlist-explore">
                          <a href="search-listing.html">Explore all</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="tu-footerlistholder  tu-seperator m-0">
                    <div className="tu-footercontent-two">
                      <h5 className="tu-footertitle">Useful links</h5>
                      <ul className="tu-footerlist">
                        <li>
                          <a href="how-it-work.html">About</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Success stories</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Online classes</a>
                        </li>
                        <li>
                          <a href="login.html">Join our community</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Courses</a>
                        </li>
                        <li>
                          <a href="login.html">Sign in now</a>
                        </li>
                        <li>
                          <a href="search-listing.html">
                            Programs &amp; degrees
                          </a>
                        </li>
                        <li>
                          <a href="how-it-work.html">How it works</a>
                        </li>
                        <li>
                          <a href="search-listing.html">Learning materials</a>
                        </li>
                        <li>
                          <a href="index.html">F.A.Q</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tu-footercontent d-xl-flex">
                      <div className="tu-footercontent_title">
                        <h5 className="tu-footertitle">Get mobile app</h5>
                        <p>
                          Take education on the go. Get our mobile app for FREE!
                          on your Apple and android devices
                        </p>
                        <ul className="tu-footerdevice">
                          <li>
                            <a href="javascript:void(0);">
                              <img src="images/ios.png" alt="devices" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <img src="images/android.png" alt="devices" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tu-footernewsletter">
                        <h5 className="tu-footertitle">
                          Signup for newsletter
                        </h5>
                        <p>
                          Corrupti quolores etmquasa molestias epturite sinteam
                          occaecati amet cupiditate mikume molareshe.
                        </p>
                        <div className="tu-inputbtn">
                          <input
                            type="email"
                            placeholder="Enter email address"
                            className="form-control"
                          />
                          <a
                            href="index.html"
                            className="tu-primbtn-icon tu-primbtn-orange"
                          >
                            <i className="icon icon-send" />
                          </a>
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
                  <p>© 1994 - 2022 All Rights Reserved.</p>
                  <ul className="tu-footercopyright_list">
                    <li>
                      <a href="how-it-work.html">Careers</a>
                    </li>
                    <li>
                      <a href="how-it-work.html">Terms of use</a>
                    </li>
                    <li>
                      <a href="how-it-work.html">Privacy policy</a>
                    </li>
                    <li>
                      <a href="how-it-work.html">Cookie notice</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
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
export default Searchlisting;