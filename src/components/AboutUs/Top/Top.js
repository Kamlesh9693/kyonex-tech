import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* Heading Section */}
            <p data-aos='slide-right' className={styles.heading}>Who We Are</p>
            <p data-aos='slide-left' className={styles.subHeading}>Innovative Technology & Software Solutions</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
            KYonex Technologies is dedicated to providing cutting-edge software solutions that tackle real-world challenges. Our commitment to quality and innovation drives us to deliver exceptional digital experiences, empowering businesses and individuals to thrive in a technology-driven world.
            </p>

            {/* Image Right, Text Left */}
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row align-items-center`} style={{ marginBottom: '40px' }}>
                <div data-aos='slide-right' className={`col-md-6`} style={{ padding: '20px' }}>
                    <p className={styles.creativity}>Driven by Creativity and Innovation</p>
                    <p className={styles.contn}>
                    At KYonex Technologies, our team is passionate about leveraging technology to craft unique solutions tailored to your needs. From concept to execution, we apply our expertise to develop software that enhances operational efficiency and accelerates growth. Partner with us to transform your ideas into reality and unlock new opportunities for success in the digital world.
                    </p>
                </div>
                <div data-aos='slide-left' className={`col-md-6 ${styles.imgContain}`} style={{ padding: '20px', textAlign: 'center' }}>
                    <img src={img1} alt="Innovative Solutions" className={styles.img1} style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }} />
                </div>
            </div>


            <div data-aos='fade-up' className='row align-items-center' style={{ textAlign: 'left', padding: '20px 0', backgroundColor: '#f9f9f9' }}>
                <div className={`col-md-6`} style={{ padding: '20px', textAlign: 'center' }}>
                    <img src={img2} alt="Our Team" className={styles.img2} style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div className={`col-md-6`} style={{ padding: '20px' }}>
                <p className={styles.creativity1}>Empowering Your Vision through Technology</p>
                    <p className={styles.imgPara} style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    At KYonex Technologies, our innovative solutions empower businesses to overcome complex challenges in today’s fast-evolving digital landscape. By combining cutting-edge technology with creative problem-solving, we deliver software tailored to your unique needs. Whether you seek to streamline operations, enhance customer experiences, or drive sustainable growth, our team is committed to transforming your vision into tangible results. Partner with us to unlock new opportunities and achieve lasting success in the digital age.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top;
