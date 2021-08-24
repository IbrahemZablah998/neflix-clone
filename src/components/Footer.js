import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="login_screen_three">
            <div className="login_screen_background_three">
                <div className="login_screen_three_body">
                    <h1>Frequently Asked Questions</h1>
                    <div className="login_screen_desc"><a href="/" className="login_screen_title">What is Netflix?</a><AddIcon fontSize="large" color="inherit" /></div>
                    <div className="login_screen_desc"><a href="/" className="login_screen_title">How much does Netflix cost?</a><AddIcon fontSize="large" color="inherit" /></div>
                    <div className="login_screen_desc"><a href="/" className="login_screen_title">Where can I watch?</a><AddIcon fontSize="large" color="inherit" /></div>
                    <div className="login_screen_desc"><a href="/" className="login_screen_title">How do I cancel?</a><AddIcon fontSize="large" color="inherit" /></div>
                    <div className="login_screen_desc"><a href="/" className="login_screen_title">What can I watch Netflix?</a><AddIcon fontSize="large" color="inherit" /></div>
                    <div className="login_screen_desc"><a href="/" className="login_screen_title">Is Netflix good for kids?</a><AddIcon fontSize="large" color="inherit" /></div>
                    <h3>Ready to watch? Enter your email to create or restart your membershi.</h3>
                    <div className="login_screen_input">
                        <form>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                autoComplete="email"
                                maxLength="50"
                                minLength="5"
                            />
                            <button className="login_screen_getStarted">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
