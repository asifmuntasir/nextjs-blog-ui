import React from 'react'
import Link from 'next/link'

export default function TopContent() {
    return (
        <div className='container text-white p-5 my-3'>
            <div className="row">
                <div className="col-md-4 title-div text-center border-right shadow">
                    <h1 className='title'>Bdesh</h1>
                    <h2 className='sub-title'>BLOG</h2>
                </div>
                <div className="col-md-8 pl-2">
                    <h1>Welcome To Our Blog</h1>
                    <p>
                        Most of us share a desire to improve. We want to be more productive and more successful. We all would love to accomplish more in less time. And, we all want to be good at what we do. It's those desires that make the, "If I were you..." headlines so powerful.
                    </p>
                    <div className='arrow-div'>
                        <Link href='/'>
                            <a className='button arrow-sign btn-hover'>Learn More <i className="ri-arrow-right-line mt-1 sign-mg"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
