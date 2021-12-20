import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='container-fluid footer-bg'>
                <div className="container-md py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className='text-white fw-550 mb-4'><span className='footer-title'>B</span>desh</h3>
                            <p className='text-gray'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Corrupti dignissimos explicabo assumenda aliquid perferendis maxime.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h3 className='text-white fw-550 mb-4'>Services</h3>
                            <div className='text-gray service-hover'>
                                <li>Work Permit</li>
                                <li>Education</li>
                                <li>Visit Visa</li>
                                <li>Immigration</li>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3 className='text-white fw-550 mb-4'>Others Page</h3>
                            <div className='text-gray service-hover'>
                                <li>Bdesh Site</li>
                                <li>Visa Search</li>
                                <li>Resume</li>
                                <li>Appointment</li>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex flex-column">
                            <div className="social-icon my-3">
                                <i className="ri-facebook-line facebook"></i>
                                <i className="ri-youtube-line youtube"></i>
                                <i className="ri-linkedin-line linkedin"></i>
                            </div>
                            <input className='input-field' type="text" placeholder='Enter Your Email' />
                            <Link href='/'><a className='button text-center'>Send Email</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer-bottom-bg">
                <div className="container-md py-2 d-flex justify-content-between align-items-center">
                    <p className='mt-2'>Copyright &copy; 2022 Bdesh | All Rights Reserved</p>
                    <p className='d-flex list-style'>
                        <li className='mx-2'>Policy</li>
                        <li className='mx-2'>Terms & Conditions</li>
                    </p>
                </div>
            </div>
        </>
    )
}
