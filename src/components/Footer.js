import React from 'react'
import './Footer.css'

export default function Footer({ title, content }) {
    return (
        <div className='footer-container'>
            <p className='footer-subscription-heading'>
                {title}
            </p>
            <p className='footer-subscription-text'>
                {content}
            </p>
        </div>
    )
}
