import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <div className="flex-container__footer">

            <div className="left-container">
                <p> phone: (+61) 401 65 80 19 </p>
                <p> <a href='mailto:charhagelin@gmail.com' > email us </a> </p>
            </div>
            <div className="mid-line"></div>
            <div className="right-container">
                <p>133 Avoca Street</p>
                <p>2031 Randwick NSW</p>
            </div>
        </div>
    )
}

export default Footer;