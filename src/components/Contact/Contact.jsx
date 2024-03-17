/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import address_icon from '../../assets/location-icon.png'
import white_arrow from'../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "11db86f1-bd34-4af6-8bbc-bf9a902cd21f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        setResult("We will contact you shortly")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <>
    <div className="contact">
       <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>

        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact @EduQuora.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={address_icon} alt="" />77 Massachusetts Ave, Cambridge
                 MA 02139, United States</li>
        </ul>
       </div>
      
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type='text' placeholder='Enter your name' required/>

            <label>Phone Number </label>
            <input type="tel" placeholder='Enter your mobile number' required />
            <label>Your Email </label>
            <input type="email" placeholder='Enter your email id' required />
             <label>Write your messages</label>
            <textarea type="message" placeholder='Enter your message' rows="6" required />
            <button type="submit" className='btn btn-dark'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
       </div>
     

    </div>
    
    
    
    </>
  )
}

export default Contact