import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='container d-flex justify-content-between align-items-center text-white'>
            {/* <Link href='/'><a className='title'>Bdesh</a></Link> */}
            <div>
                <ul className='d-flex list-style text-decoration-none'>
                    <li className='mx-4'>
                        <Link href='/'><a className='td-none text-white'>Home</a></Link>
                    </li>
                    <li className='mx-4'>
                        <Link href='/'><a className='td-none text-white'>Support</a></Link>
                    </li>
                    <li className='mx-4'>
                        <Link href='/'><a className='td-none text-white'>Login</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
