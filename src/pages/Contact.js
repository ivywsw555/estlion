import React from 'react';
import banner from '../assets/images/contact us.jpg'; // Rename 'contact us.jpg' to 'contact-banner.jpg'

const Contact = () => {
    return (
        <div>
            <img src={banner} alt="Contact Us Banner" className="page-banner" />
            <h1 className="page-title">Contact Us</h1>
            <p>For more information and inquiries, you can contact us. You will get a response within 24 hours.</p>

            <table className="contact-details-table">
                <tbody>
                    <tr>
                        <td>Company:</td>
                        <td>Estlion (Shanghai) Machinery Co. Ltd</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>NO.416. Zhoushi Road, Pudong, Shanghai, PRC</td>
                    </tr>
                    <tr>
                        <td>Tel:</td>
                        <td>0086-21-31134003</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><a href="mailto:estlion@qq.com">estlion@qq.com</a></td>
                    </tr>
                    <tr>
                        <td>Web site:</td>
                        <td><a href="http://www.estlion.com" target="_blank" rel="noopener noreferrer">www.estlion.com</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Contact;