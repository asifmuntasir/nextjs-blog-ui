import React from 'react'
import Link from 'next/link'

export default function BlogNav() {
    return (
        <div className='container py-3'>
            <ul className='d-flex list-style text-decoration-none'>
                <li className='mx-4'>
                    <Link href='/'><a className='td-none link-hover text-dark'>All</a></Link>
                </li>
                <li className='mx-4'>
                    <Link href='/'><a className='td-none link-hover text-dark'>Work Permit</a></Link>
                </li>
                <li className='mx-4'>
                    <Link href='/'><a className='td-none link-hover text-dark'>Education</a></Link>
                </li>
                <li className='mx-4'>
                    <Link href='/'><a className='td-none link-hover text-dark'>Migration</a></Link>
                </li>
            </ul>
        </div>
    )
}
