import React from 'react'
import './Footer.css'

function Footer({ title, content }) {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    {title}
                </p>
                <p className='footer-subscription-text'>
                    {content}
                </p>
            </section>
        </div>
    )
}

export default Footer
