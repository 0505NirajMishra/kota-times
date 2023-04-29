import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";

const Privacyandpolicy = () => {

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
          backgroundColor: 'lightgray',
        }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <h3 style={{
              padding: '1%',
              marginTop: '1%',
              color: "black"
            }}>Privacy and Policy</h3>
          </div>
        </div>
      </div>


      <div
        style={{
          backgroundColor: "#f8f9fa"
        }}
      >
        <div className="pt-5">
          <div className="container">
            <div className="row">

              {/* <div
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
                  Please read the following Privacy policy of the services made
                  available on{" "}
                  <a href="http://www.kotatimes.live/" target="_blank">
                    www.kotatimes.live
                  </a>{" "}
                  or the equivalent kotatimes Mobile Application available on
                  Google Play, (
                  <strong>
                    &quot;kotatimes App&rdquo;/ &ldquo;Website&rdquo;
                  </strong>
                  ). The kotatimes App or Website on which the Services are
                  availed may together be referred to for convenience as the{" "}
                  <strong>&ldquo;Platform&rdquo;</strong>.
                </p>
                <p>
                  Please ensure that this Privacy Policy is perused by You
                  before availing any services from Us. This Privacy Policy
                  shall be updated from time to time and to stay abreast with
                  our methods of using Your information and protecting Your
                  privacy, please keep reviewing this Policy.
                </p>
                <p>
                  By viewing the kotatimes Platform, you agree to be bound by
                  the terms of this Privacy Policy.
                </p>
                <p>
                  By using the kotatimes Platform and/or by providing Your
                  information, You consent to the collection and use of the
                  information You disclose on our Website in accordance with
                  this Privacy Policy, including but not limited to your consent
                  for sharing your information as per this Privacy Policy. If we
                  decide to change our Privacy Policy, We will post those
                  changes on this page so that You are always aware of what
                  information We collect, how We use it, and under what
                  circumstances We disclose it. If You do not agree for the
                  forgoing, please do not continue to use or access our Website.
                </p>
              </div> */}

              <p>
                Thanks for visiting <a href="https://kotatimes.ac/" target="_blank" rel="noreferrer" >www.kotatimes.ac</a>
                <br />
                <br />
                <b>
                KOTA TIMES</b> Career Institute Pvt. Ltd. recognizes the importance of maintaining
                your privacy. This privacy policy is a legally binding document between you
                and <b>KOTA TIMES CAREER INSTITUTE PVT. LTD.</b>
                <br/>
                <br/>
                This privacy policy applies to your use of KOTA TIMES website, application,
                products and services. <b>KOTA TIMES</b> recognizes the importance of maintaining
                your privacy. We extremely value your privacy and appreciate your trust in us.
                <br />
                This privacy policy is subject to the Terms &amp; Conditions of Use of <b>KOTA
                TIMES</b>. This policy is effective from the date and time a user registers with
                or visits <b>KOTA TIMES </b>website and/or by filling up the Registration form.
                <br />
                By accessing or using the service, you consent to the information collection,
                disclosure and use practices described in this Privacy Policy. Please also
                review our Terms &amp; Conditions of Use, which governs your use of the
                service.
                <br /> <br />
                <b><u>1. INFORMATION THAT WE COLLECT</u></b>
                <br />
                <br/>
                <b>KOTA TIMES</b> collects data to operate effectively and provide you the best
                experience with our services. You will provide some of this data directly,
                such as when you sign up for our email communication or register for our
                program through our website or Landing pages. We also collect the information
                in other various ways such as on social media channels, in-person
                communication, or during the pre-counselling process when we may contact you
                for additional clarification regarding your profile or to organize one-to-one
                meetings for you.
                <br />
                We also obtain data from third parties. We protect data obtained from third
                parties according to the practices described in this policy, plus any
                additional restrictions imposed by the source of the data. These third-party
                sources vary over time, but have included:
                <br/>
                <br />• Database providers from trusted sources
                <br />• Social networks when you grant permission to to access your data
                <br />• Partners with which we offer co-branded services or engage in joint
                marketing activities
                <br />• Publicly-available sources such as open government databases or other
                data in the public domain
                <br />
                You have choices about the data we collect. When you are asked to provide
                personal data, you may decline. But if you choose not to provide data that is
                necessary to provide a service, you may not be able to use that service.
                <br />
                The data we collect depends on the context of your interactions with KOTA
                TIMES. The data we collect can include the following:
                <br />• Name and contact data. We collect your first and last name, email
                address, postal address, phone number, and other similar contact data.
                <br />• Credentials. We collect your username and password when you create
                your personal account on our websites.
                <br />• Demographic data. We collect data about you such as your date of
                birth, Parents/Guardian Name, Photograph, Address, age, gender, country, blood
                group, citizenship and preferred language.
                <br />• Educational and professional background. We collect data about your
                employment history, education history and possibly your standardized test
                scores.
                <br />• Videos and pictures. Photographs or video recordings may be taken
                during our physical events, we may use the visual or video captures of your
                person on our websites or promotional material.
                <br />• Other information you may provide to us, such as in feedback forms or
                through the “Contact Us” feature on our Sites.
                <br />• Information Collected by Automated Means When you visit our websites,
                we may collect certain information by automated means, such as cookies, web
                beacons and web server logs. The information we may collect in this manner
                includes:
                <br/>
                <br />o IP address
                <br />o Unique device identifier
                <br />o Browser characteristics
                <br />o Device characteristics
                <br />o Operating system
                <br />o Language preferences
                <br />o Referring URLs
                <br />o Information on actions taken on our websites
                <br />o Dates and times of visits to our sites and other usage statistics
                <br />o Location data
                <br/>
                <br />A “cookie” is a file that websites send to a visitor’s computer or other
                Internet-connected device to uniquely identify the visitor’s browser or to
                store information or settings in the browser. A “web beacon,” also known as an
                Internet tag, pixel tag or clear GIF, links webpages to web servers and their
                cookies and is used to transmit information collected through cookies back to
                a web server. Through these automated collection methods, we may obtain
                “clickstream data,” which is a log of the links and other content on which a
                visitor clicks while browsing a website.
                <br/>
                <br />
                As the visitor clicks through the website, a record of the action may be
                collected and stored. We link certain data elements we have collected through
                automated means, such as your browser information, with other information we
                have obtained about you to let us know, for example, whether you have opened
                an email we sent to you. Your browser may tell you how to be notified when you
                receive certain types of cookies or how to restrict or disable certain types
                of cookies. Please note, however, that without cookies you may not be able to
                use all of the features of our websites. To the extent required by applicable
                law, we will obtain your consent before collecting personal information using
                cookies or similar automated means.
                <br/>
                <br />
                The providers of third-party apps, tools, widgets and plug-ins on our
                websites, such as social media sharing tools, also may use automated means to
                collect information regarding your interactions with these features. This
                information is collected directly by the providers of the features and is
                subject to the privacy policies or notices of these providers.
                <br />
                <br/>
                <b>1.1 USER OR LOGIN INFORMATION</b>
                <br/>
                <br />
                For a better experience while using our Service, we may require you to provide
                us with certain personally identifiable information, including but not limited
                to your name, phone number, and postal address. We may collect demographic
                information about you, including events you like, events you intend to
                participate in, or any other information provided by you during the use of our
                website. We might collect this as a part of a survey also. The information
                that we collect will be used to contact or identify you. We may collect usage
                information such as IP address, the web browser type, Operating system,
                Address of the reference website or the website to which you exit to, date and
                time you access our website or services, Items you click on, pages you visit
                and time spent on each page.
                <br/>
                <br />
                <b>1.2 COOKIES, AND OTHER TRACKING WEBSITES</b>
                <br />
                <br/>
                We also collect certain information through the use of cookies, web beacons,
                analytics/ webmaster tools and/ or similar tracking technologies. You have the
                option to either accept or refuse these cookies and know when a cookie is
                being sent to your computer. If you choose to refuse our cookies, you may not
                be able to use some portions of our Service. We may also use third parties to
                display and target ads, provide certain functionality (such as maps) or to
                place their own cookies and other tracking technologies to collect, track and
                analyze usage and statistical information from users. We are not responsible
                for the information collection practices of any third parties.
                <br/>
                <br />
                <b>1.3 PAYMENT INFORMATION</b>
                <br/>
                <br />
                We might collect your billing name, billing address and payment method when
                you subscribe to KOTA TIMES. We do not collect and store details like Credit /
                Debit Card numbers, PIN, CVV/CVC, Expiry Date, OTP, or any other information
                related to payment method/mode, we redirect the payee to the respective
                payment gateway page.
                <br />
                2. HOW DO WE USE YOUR INFORMATION
                <br />
                <br />
                <b>2.1 GENERAL</b>
                <br />
                <br/>
                We may use information to protect KOTA TIMES, our students or our websites. We
                may share information with any successor to all or part of our business. For
                example, if part of our business is sold, we may give our students list as
                part of that transaction. We may disclose Personal Information when we are
                required to or we believe it is appropriate to comply with the law (e.g., a
                lawful subpoena, warrant or court order); to enforce or apply this Policy or
                our other policies or agreements; to initiate, render, bill, and collect for
                amounts owed to us; to protect our or our users’ rights, property or safety;
                to protect our users from fraudulent, abusive, or unlawful use of the
                Services; or if we believe that an emergency involving the danger of death or
                serious physical injury to any person requires or justifies disclosure of
                Personal Information or We may also share it if a Government Agency or
                Investigatory body wants us to do so, or anytime when we are investigating
                potential fraud.
                <br />
                We use information as otherwise permitted by law. We may share your
                information for reasons not described in this policy.
                <br/>
                <br />
                <b>2.1 PERSONAL INFORMATION</b>
                <br/>
                <br />
                We use Personal Information to facilitate our services, to process your
                requests or transactions, to provide you with information, products and
                services you request, to administer and assist us with the operation of our
                business, and for the purpose for which the information was provided. We may
                use the information we collect to send you news relevant to you or in
                accordance with your preferences. These might be our own offers or products,
                or third-party offers or products we think you might find interesting. We may
                also send you advertisements from third parties. We will not disclose, rent,
                sell or otherwise make available your Personal Information to third parties
                for direct marketing purposes
                <br/>
                <br />
                <b>2.2 LEGAL USE</b>
                <br/>
                <br />
                The information shall be used as otherwise permitted by law.
                <br/>
                <br />
                <b>2.3 THIRD PARTY SERVICE PROVIDERS</b>
                <br />
                <br />
                In the event that we engage with third party service providers in connection
                with our Services, we may share Personal Information with such service
                providers who need access to such information to carry out their work for us.
                For example, we may use credit card processing or verification companies to
                verify credit card information or to verify your identity. Other than such
                service providers, we do not share Personal Information with third parties
                unless <br/>
                (1) you have indicated to us that you wish to receive information from
                such parties; <br/>(2) you otherwise give us your consent to do so; or (3) in
                response to a request for information.
                <br />
                <br />
                <b>2.4 TRANSACTIONAL COMMUNICATIONS</b>
                <br />
                <br />
                The information provided by you will be used to contact you for confirmation
                of our educational services. We might send emails or SMS, WhatsApp messages,
                or Calls or Invite in Events offline/online in case you are a Registered User
                <br />
                <br />
                <b>DISCLAIMER</b>
                <br/>
                <br />
                Registered users are solely responsible for maintaining the confidentiality of
                the passcode and user identification and all activities and transmission
                performed by the Registered users through his user identification and shall be
                solely responsible for carrying out any online or off-line transaction. KOTA
                TIMES assumes no responsibility or liability for their improper use of
                information relating to such usage of credit cards / debit cards used by the
                mapper online/off-line. All the disclaimer mentioned in Terms &amp; Conditions
                of Use of KOTA TIMES website shall be applicable.
                <br />
                <br />
                <b>SECURITY</b>
                <br />
                <br />
                We are concerned about safeguarding the confidentiality of your Information.
                We provide physical, electronic, and procedural safeguards to protect
                Information we process and maintain. For example, we limit access to this
                Information to authorized employees only who need to know that information in
                order to operate, develop or improve our
                Application/Services/products/Website. Please be aware that, although we
                endeavour to provide reasonable security for information we process and
                maintain, no security system can prevent all potential security breaches.
                <br />
                <br />
                <b>JURISDICTION</b>
                <br />
                <br />
                If you choose to visit KOTA TIMES website and/or application, your visit and
                any dispute over privacy is subject to this Policy and the Terms &amp;
                Conditions of Use. In addition to the foregoing, any disputes arising under
                this Policy shall be governed by the laws of India.
                <br />
                <br />
                <b>APPLICABLE LAW</b>
                <br />
                <br />
                This Privacy Policy is an electronic contract formed under The Information
                Technology Act, 2000 and the rules made thereunder and the amended provisions
                pertaining to electronic documents / records in various statutes as amended by
                The Information Technology Act, 2000. This Privacy Policy does not require any
                physical, electronic or digital signature.
                <br />
                We may update our Privacy Policy from time to time. Thus, we advise you to
                review this page periodically for any changes. We will try to notify you of
                any changes by posting the new Privacy Policy on this page. These changes
                would be effective immediately, after they are posted on this page.
              </p>


            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacyandpolicy;
