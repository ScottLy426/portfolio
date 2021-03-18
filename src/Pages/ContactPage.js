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
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11157.306914013963!2d-117.99087720440744!3d33.758412678980505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1616035689814!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'714-325-3388'}title={'Phone'}/>
                    <ContactItem icon={email} text1={'lyscott123@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'United States'} title={'Location'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
