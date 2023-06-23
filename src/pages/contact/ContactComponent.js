import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import emailjs from '@emailjs/browser';
import $ from 'jquery'
// const $ = window.$;
// $(document).ready(function(){
$("#contact-form").submit(function (event) {
  //event.preventdefault();
  
  event.preventDefault();
  emailjs.init("nRGPQvLW9PpnPS7ca");
  console.log("form submitted");
  emailjs.sendForm('service_sa9iamh', 'template_3483ezl', '#contact-form')
      .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
      }, function (error) {
          console.log('FAILED...', error);
          alert("Form Submission Failed! Try Again");
      });
  
});




const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              {/* <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My Medium Profile
                </a>
              </div> */}
            </div>
            {/* <div className="blog-heading-img-div">
              {/* <BlogsImg theme={theme} /> */}
            {/* </div>  */}
          </div>
        </Fade>
      </div>
      <section className="contact" id="contact">
  
  <h2 className="heading"><i className="fas fa-headset" style={{"margin-left":"500px", "fontSize":"50px"}}></i> Get in <span>Touch</span></h2>
  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={require('../contact/getintouch.jpeg')} alt=""/>
      </div>
    <form id="contact-form">
      
      <div className="form-group">
        <div className="field">
          <input type="text" name="name" placeholder="Name" required/>
          <i className='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="user_email" placeholder="Email" required/>
          <i className='fas fa-envelope'></i>
        </div>
        <div className="field">
          <input type="text" name="phone" placeholder="Phone"/>
          <i className='fas fa-phone-alt'></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i className="fas fa-comment-dots"></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i className="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
</section>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
