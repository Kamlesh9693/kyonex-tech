import React, { useState } from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';
import gmail from '../../assets/home/gmail.png';  
import twitter from '../../assets/home/twitter.png';
import locationIcon from '../../assets/home/location.png';
import emailIcon from '../../assets/home/mail.png';
import phoneIcon from '../../assets/home/phone.png';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle subscription logic here (e.g., send email to the server)
        console.log("Subscribed with email:", email);
        setEmail(''); // Clear input field after subscription
    };

    return (
        <>
            <div style={{background: 'linear-gradient(180deg, #1c1c1c, #000)', paddingTop: '70px', paddingBottom: '70px', color: '#fff'}}>
                <div className="container">
                    <div className="row">
                        {/* Company Info Section */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>KYonex Technologies</p>
                            <p className={styles.text}>
                            At KYonex Technologies, we craft custom digital solutions that drive business growth and success. From software development to tech consulting, we turn ideas into reality with a strong focus on quality, performance, and scalability.
                            </p>
                            <div className={styles.social_logo}>
                                <a href="https://www.facebook.com/kyonextechnologies/" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} alt="Facebook" className={styles.img} />
                                </a>
                                <a href="https://www.linkedin.com/company/kyonextechnologies/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkdin} alt="LinkedIn" className={styles.img} />
                                </a>
                                <a href="https://www.instagram.com/kyonextechnologies/" target="_blank" rel="noopener noreferrer">
                                    <img src={insta} alt="Instagram" className={styles.img} />
                                </a>
                                <a href="mailto:kyonex.technologies@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src={gmail} alt="Gmail" className={styles.img} />
                                </a>
                                <a href="https://x.com/kyonextech" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt="Twitter" className={styles.img} />
                                </a>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <ul className={styles.list}>
                            <li>Custom Software Development</li>
<li>Tech Consulting</li>
<li>Expert Training & Ongoing Support</li>
<li>Mobile App Development</li>
<li>AI & Machine Learning Solutions</li>
<li>Cloud Computing & DevOps Services</li>
<li>Cybersecurity & Data Protection</li>
<li>UI/UX Design & Prototyping</li>
<li>Automation & Workflow Optimization</li>
<li>E-commerce & Marketplace Solutions</li>


                            </ul>
                        </div>

                        {/* Contact Info Section */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <div className={styles.infoItem}>
                                <img src={locationIcon} alt="Location" className={styles.icon} />
                                <p className={styles.text}>Samastipur, Bihar, India</p>
                            </div>
                            <div className={styles.infoItem}>
                                <img src={emailIcon} alt="Email" className={styles.icon} />
                                <p className={styles.text}>kyonex.technologies@gmail.com</p>
                            </div>
                            <div className={styles.infoItem}>
                                <img src={phoneIcon} alt="Phone" className={styles.icon} />
                                <p className={styles.text}>(+91) 8873617587</p>
                            </div>
                        </div>

                        {/* Follow Us Section */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Follow Us</p>
                            <p className={styles.text}>Stay updated with our latest projects and innovations.</p>
                            <div className={styles.social_logo}>
                                {/* Additional icons or social media links if needed */}
                            </div>
                            {/* Subscription Form */}
                            <form onSubmit={handleSubscribe} className={styles.subscriptionForm}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.emailInput}
                                    required
                                />
                                <button type="submit" className={styles.subscribeButton}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: '#010d30', padding: '15px 0', borderTop: '1px solid #333'}}>
                <p className={styles.bottom}>© 2024 KYonex Technologies. All rights reserved.</p>
            </div>
        </>
    );
}
export default Footer;


