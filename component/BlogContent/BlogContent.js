import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogContent() {
    return (
        <div className='container-md'>
            <div className="row">
                <div className="col-md-12 d-flex flex-wrap">
                    <div className="card-div m-4">
                        <div className="img-div mb-3">
                            <Image src='/romania.jpeg' width="400" height="250" alt='romania' />
                        </div>
                        <div className="info-div mb-3 d-flex justify-content-between">
                            {/* <p>🇷🇴</p> */}
                            <h6 className='text-gray px-2 pt-1'><span>🇷🇴</span> Romania</h6>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-heart-2-line cursor-pointer"></i>
                                <span className='p-btm'>45</span>
                            </p>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-eye-line cursor-pointer"></i>
                                <span className='pb-1'>1,213</span>
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className='font-weight'>Work Permit In Romania</h4>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nisi sit vel nemo vitae inventore eos doloribus sed ullam sequi?
                            </p>
                            <Link href='/'><a className='button'>See More</a></Link>
                        </div>
                    </div>
                    <div className="card-div m-4">
                        <div className="img-div mb-3">
                            <Image src='/poland.jpg' width="400" height="250" alt='romania' />
                        </div>
                        <div className="info-div mb-3 d-flex justify-content-between">
                            {/* <p>🇵🇱</p> */}
                            <h6 className='text-gray px-2 pt-1'><span>🇵🇱</span> Poland</h6>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-heart-2-line cursor-pointer"></i>
                                <span className='p-btm'>45</span>
                            </p>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-eye-line cursor-pointer"></i>
                                <span className='pb-1'>1,213</span>
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className='font-weight'>Work Permit In Poland</h4>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nisi sit vel nemo vitae inventore eos doloribus sed ullam sequi?
                            </p>
                            <Link href='/'><a className='button'>See More</a></Link>
                        </div>
                    </div>
                    <div className="card-div m-4">
                        <div className="img-div mb-3">
                            <Image src='/hungary.jpg' width="400" height="250" alt='romania' />
                        </div>
                        <div className="info-div mb-3 d-flex justify-content-between">
                            {/* <p>🇭🇺</p> */}
                            <h6 className='text-gray px-2'><span>🇭🇺</span> Hungary</h6>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-heart-2-line cursor-pointer"></i>
                                <span className='p-btm'>45</span>
                            </p>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-eye-line cursor-pointer"></i>
                                <span className='pb-1'>1,213</span>
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className='font-weight'>Work Permit In Hungary</h4>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nisi sit vel nemo vitae inventore eos doloribus sed ullam sequi?
                            </p>
                            <Link href='/'><a className='button'>See More</a></Link>
                        </div>
                    </div>
                    <div className="card-div m-4">
                        <div className="img-div mb-3">
                            <Image src='/london.jpeg' width="400" height="250" alt='romania' />
                        </div>
                        <div className="info-div mb-3 d-flex justify-content-between">
                            {/* <p>🇬🇧</p> */}
                            <h6 className='text-gray px-2'><span>🇬🇧</span> UK</h6>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-heart-2-line cursor-pointer"></i>
                                <span className='p-btm'>45</span>
                            </p>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-eye-line cursor-pointer"></i>
                                <span className='pb-1'>1,213</span>
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className='font-weight'>Work Permit In Britain</h4>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nisi sit vel nemo vitae inventore eos doloribus sed ullam sequi?
                            </p>
                            <Link href='/'><a className='button'>See More</a></Link>
                        </div>
                    </div>
                    <div className="card-div m-4">
                        <div className="img-div mb-3">
                            <Image src='/anatolia.jpg' width="400" height="250" alt='romania' />
                        </div>
                        <div className="info-div mb-3 d-flex justify-content-between">
                            {/* <p>🇹🇷</p> */}
                            <h6 className='text-gray px-2'><span>🇹🇷</span> Turkey</h6>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-heart-2-line cursor-pointer"></i>
                                <span className='p-btm'>45</span>
                            </p>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-eye-line cursor-pointer"></i>
                                <span className='pb-1'>1,213</span>
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className='font-weight'>Work Permit In Turkey</h4>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nisi sit vel nemo vitae inventore eos doloribus sed ullam sequi?
                            </p>
                            <Link href='/'><a className='button'>See More</a></Link>
                        </div>
                    </div>
                    <div className="card-div m-4">
                        <div className="img-div mb-3">
                            <Image src='/belgium.jpg' width="400" height="250" alt='romania' />
                        </div>
                        <div className="info-div mb-3 d-flex justify-content-between">
                            {/* <p>🇧🇪</p> */}
                            <h6 className='text-gray px-2'><span>🇧🇪</span> Belgium</h6>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-heart-2-line cursor-pointer"></i>
                                <span className='p-btm'>45</span>
                            </p>
                            <p className='d-flex justify-content-center align-items-center icon-color'>
                                <i className="ri-eye-line cursor-pointer"></i>
                                <span className='pb-1'>1,213</span>
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className='font-weight'>Work Permit In Belgium</h4>
                            <p className='text-gray'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nisi sit vel nemo vitae inventore eos doloribus sed ullam sequi?
                            </p>
                            <Link href='/'><a className='button'>See More</a></Link>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4">
                    <div className="top-bar m-4">
                        <button className='left-btn mx-2'>Latest</button>
                        <button className='right-btn'>Popular</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
