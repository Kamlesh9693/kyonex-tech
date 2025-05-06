import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () =>{
    return(
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
    <div className={`container ${styles.contain}`}>
        <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>Transforming Ideas into Reality</p>
        <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
        At KYonex Technologies, we specialize in delivering cutting-edge software and technology solutions that empower businesses and individuals. Our expertise spans multiple domains, enabling us to provide tailored services that drive innovation, efficiency, and growth. Whether it's consultancy, software development, or impactful tech solutions, we are committed to shaping the future with technology.
        </p>

        <div className="row">
            <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                <div className={styles.box}>
                    <img src={logo1} alt="Web Development" />
                    <p className={styles.head}>Web Development</p>
                    <p className={styles.content}>
                    At KYonex Technologies, we design dynamic and responsive websites that deliver an exceptional user experience while effectively showcasing your brand. Our solutions ensure seamless functionality, aesthetic appeal, and performance to help you stand out in the digital space.
                    </p>
                </div>
            </div>

            <div data-aos='fade-up' className="col-md-4">
                <div className={styles.box}>
                    <img src={logo2} alt="Mobile App Development" />
                    <p className={styles.head}>Mobile App Development</p>
                    <p className={styles.content}>
                    At KYonex Technologies, we develop intuitive and high-performance mobile app solutions that engage users and enhance business functionality across all platforms. Our apps are designed for seamless user experiences, ensuring efficiency, scalability, and innovation.
                    </p>
                </div>
            </div>

            <div data-aos='fade-left' className="col-md-4">
                <div className={styles.box}>
                    <img src={logo3} alt="UI/UX Design" />
                    <p className={styles.head}>UI/UX Design</p>
                    <p className={styles.content}>
                    At KYonex Technologies, we prioritize user-centered design to create intuitive and engaging interfaces for your software applications. Our focus is on delivering seamless experiences that enhance usability, efficiency, and user satisfaction.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default Middle;