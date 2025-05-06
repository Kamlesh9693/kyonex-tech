import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () =>{ 
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}><b>ABOUT US</b></p>
                        <p data-aos="slide-left" className={styles.heading}>We have a great team in terms of technology</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>At KYonex Technologies, we are committed to solving real-world challenges through pioneering technological solutions. Our team specializes in custom software development, industry-specific applications, and driving digital transformation. With a strong focus on personalized solutions and cutting-edge technology, we empower businesses to reach their full potential and stay ahead in the digital era.
</p>
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            {/* <button className={`btn custom_btn ${styles.btn}`}> MEET OUR TEAM</button> */}
                        </div>
                        
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt=""/>
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{width:'110%'}} alt=""/>
                                <img data-aos="zoom-in-left" src={img3} alt=""/>
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;