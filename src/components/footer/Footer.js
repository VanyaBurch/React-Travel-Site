import React from 'react';
import './Footer.css';
import {Button} from '../button/Button';
import {Link} from "react-router-dom";

function Footer() {
    return(
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <form>
                    <input
                        type="email"
                        name="email"
                        className="footer-input"
                        placeholder="Your Email"
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sing-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sing-up">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/sing-up">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/sing-up">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2020</small>
                    <div className="social-icons">
                        <Link
                            to="https://www.facebook.com/vanyaburch"
                            className="social-icon-link facebook"
                            target="_blank"
                            arial-lable="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link
                            to="https://www.instagram.com/vaniaburch"
                            className="social-icon-link instagram"
                            target="_blank"
                            arial-lable="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                            to="/"
                            className="social-icon-link youtube"
                            target="_blank"
                            arial-lable="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link
                            to="https://twitter.com/BurchVanya"
                            className="social-icon-link twitter"
                            target="_blank"
                            arial-lable="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                        <Link
                            to="https://www.linkedin.com/mwlite/in/ivanburch"
                            className="social-icon-link twitter"
                            target="_blank"
                            arial-lable="LinkedIn"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;