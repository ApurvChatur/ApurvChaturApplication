import React from 'react'
import './index.css';

const ContactComponent = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container' >
                <div className='contact__options'>
                    <article className='contact__option'>
                        <p className='contact__option-icon' >O</p>
                        <h4>Email</h4>
                        <h5>dummy@gmail.com</h5>
                        <a href='mailto:asdas@sadas.sadas' >Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <p className='contact__option-icon' >O</p>
                        <h4>Messenger</h4>
                        <h5>sometutorials</h5>
                        <a href='mailto:asdas@sadas.sadas' >Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <p className='contact__option-icon' >O</p>
                        <h4>WhatsApp</h4>
                        <h5>+91-9146504334</h5>
                        <a href='mailto:asdas@sadas.sadas' >Send a message</a>
                    </article>
                </div>

                <form action='' >
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactComponent