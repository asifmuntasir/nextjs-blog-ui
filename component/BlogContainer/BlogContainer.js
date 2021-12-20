import React from 'react'
import BlogNav from '../BlogNav/BlogNav'
import BlogContent from '../BlogContent/BlogContent'

export default function BlogContainer() {
    return (
        <>
            <div className='container-fluid bg-gray'>
                <BlogNav />
            </div>
            <div className="container-fluid py-5 bg-light-gray">
                <BlogContent />
            </div>
        </>
    )
}
