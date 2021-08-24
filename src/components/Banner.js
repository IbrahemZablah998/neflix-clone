import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="login_screen">
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
                    alt=""
                    className="login_screen_logo" />
                <button className="login_screen_signin">Sign In</button>
                <div className="login_screen_gradient"></div>
            </div>
            <div className="login_screen_body">
                <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
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
                </>
            </div>
        </div>
    )
}

export default Banner
