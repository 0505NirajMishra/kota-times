import React from "react";
// import Index from './component/pages/Index';
import Indexv2 from "./component/pages/Indexv2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './component/pages/Gallery';
import Events from "./component/pages/Events";
import Aboutus from './component/pages/Aboutus'
import Privacyandpolicy from './component/pages/Privacyandpolicy'
import Contact from './component/pages/Contact'
import Termsandconditions from './component/pages/Termsandconditions'
import Courses from "./component/pages/Courses";
import Notification from "./component/pages/Notification";
import Learn from "./component/pages/Learnmore";

function App() {
  return (

    <div className="App">
      {/* <Index/> */}
      {/* <Indexv2/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Indexv2 />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Courses" element={<Courses />} />\
          <Route exact path="/Notification" element={<Notification />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Learnmore/:id" element={<Learn/>} />
          <Route exact path="/Aboutus" element={<Aboutus/>} />
          <Route exact path="/Privacyandpolicy" element={<Privacyandpolicy/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Termsandconditions" element={<Termsandconditions/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;