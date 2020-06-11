import React, { Component } from 'react';
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
                <em className='made'>Made with ❤️ by Talha Javed</em>

            </div>
        );
    }
}

export default Contact;