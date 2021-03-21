import React from 'react';
import ContactImage from './img/contact.png'
import './Contact.css'
import { Table } from 'react-bootstrap';
const Contact = () => {
    return (
        <div className="container">
            <div className="main-content-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-image">
                                <img src={ContactImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-content">
                                <div class="about_box">
                                    <h4>Personal Infomations</h4>
                                    <div class="info_table">
                                        <div class="info_meta"> Full Name </div>
                                        <div class="info_p_details"> Mustafizur Rahman </div>
                                        <div class="info_meta"> D.O.B. </div>
                                        <div class="info_p_details"> 05 JULY 2002 </div>
                                        <div class="info_meta"> Address </div>
                                        <div class="info_p_details"> Meherpur, Khulna, Bangladesh </div>
                                        <div class="info_meta"> Profession </div>
                                        <div class="info_p_details"> Web Developer </div>
                                        <div class="info_meta"> Blood G. </div>
                                        <div class="info_p_details"> B+ </div>
                                        <div class="info_meta"> Nationality </div>
                                        <div class="info_p_details"> Bangladeshi </div>
                                        <div class="info_meta"> Hobby </div>
                                        <div class="info_p_details"> Coding &amp; Traveling </div>
                                        <div class="info_meta"> Language </div> <div class="info_p_details"> Bengali, English, Hindi </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Contact;