import React from 'react'
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';
import phone from '../imgs/phone.svg';
import email from '../imgs/emailme.svg';
import location from '../imgs/location.svg';
function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.261715215776!2d-118.0088577844945!3d33.753902280688116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd261cd3be9e45%3A0x35a321f7389d5a6e!2s7031%20Maple%20St%2C%20Westminster%2C%20CA%2092683!5e0!3m2!1sen!2sus!4v1616030429011!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'714-325-3388'}title={'Phone'}/>
                    <ContactItem icon={email} text1={'lyscott123@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'7031 Maple St Westminster, CA'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
