import React, { Component } from 'react';
import devTo from '../assets/devTo.png';
import linkedIn from '../assets/LinkedIn.png';
import fb from '../assets/fb.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import twitter from '../assets/twitter.png';
import './Style.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { arr } = this.state;
        return (
            <div className='skill'>
                <p className='skillHeading'>CONTACT</p>
                <em className='skillEM'>Have a question or want to work together?</em>
                <div style={{ marginTop: '60px' }}>
                    <p className='contact'>{'WhatsApp: '}<span style={{ color: '#266cde' }}>+92 314 2269626</span></p>
                    <p className='contact'>{'Contact: '}<span style={{ color: '#266cde' }}>+92 349 2562818</span> </p>
                    <p className='contact'>{'Email: '}<span style={{ color: '#266cde' }}>mohammadsaud296@gmail.com</span> </p>
                </div>
                
                <div className="social-media-div">
                <a href='https://www.linkedin.com/in/muhammad-saud-9636a4171/' target="_blank" rel="noopener noreferrer">
                        <img src={linkedIn} alt="linkedIn" className='socialIcon' />
                    </a>
                    <a href="https://www.facebook.com/people/MUhammad-SaUd/100008157821981" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="fb" className='socialIcon' />
                    </a>
                    <a href="mailto:mohammadsaud296@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={gmail} alt="npm" className='socialIcon' />
                    </a>
            </div>
            <em className='made'>Made with ❤️ by Talha Javed</em>
            </div>
        );
    }
}

export default Contact;