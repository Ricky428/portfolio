import React, { useContext, useRef, useState } from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context';


function Contact() {
    const formRef = useRef();
    const[done,setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm(
            'service_74rj8qr', 
            'template_rqy8a8o',
             formRef.current, 
             'xRfIRITzmV4I8dPYe'
            )
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    

  return (
    <div className='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's Discuss the Projects </h1>
            <div className="c-info">
                <div className="c-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg"  
                        fill="currentColor" 
                        className="c-icon" 
                        viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    +91-86306-31264
                </div>
                <div className="c-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" 
                        className="c-icon" 
                        viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                        rickygill6760@gmail.com
                </div>
                <div className="c-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        className="c-icon" 
                        viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                       Pakka kot,Kashipur,U.S.Nagar,Uttarakhand,Pin No. 244713.
                </div>
            </div>
        </div>

        <div className="c-right">
             <div className="c-desc">
                <p> <b>Always Ready</b> for the Challenge and opportunity. Looking for the Compony where i can implement the Skills,Learn and Grow too.</p>
             </div>
             <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email'/>
                <textarea style={{backgroundColor: darkMode && "#333"}} name="message" id="c-text" rows="5" placeholder='Message'></textarea>
                <button>Submit</button>
                <p className='c-form-p'>{done && "your mail has been sent"}</p>
             </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
