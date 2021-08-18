import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="login_screen">
                <div className="login_screen_background">
                    <img
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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

            <div className="login_screen_two">
                <div className="login_screen_background_two">
                    <div className="login_screen_two_body">
                        <h1>Enjoy on your TV.</h1>
                        <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                    </div>
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        alt=""
                        className="login_screen_two_image" />
                </div>
            </div>

            <div className="login_screen_two">
                <div className="login_screen_background_two">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        alt=""
                        className="login_screen_two_image" />
                    <div className="login_screen_two_body">
                        <h1>Download your shows to watch offline.</h1>
                        <h2>Save your favorites easily and always have something to watch.</h2>
                    </div>
                </div>
            </div>

            <div className="login_screen_two">
                <div className="login_screen_background_two">
                    <div className="login_screen_two_body">
                        <h1>Watch everywhere.
                        </h1>
                        <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                    </div>
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                        alt=""
                        className="login_screen_two_image" />
                </div>
            </div>

            <div className="login_screen_two">
                <div className="login_screen_background_two">
                    <img
                        src="https://occ-0-4490-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                        alt=""
                        className="login_screen_two_image" />
                    <div className="login_screen_two_body">
                        <h1>Create profiles for kids.</h1>
                        <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                    </div>
                </div>
            </div>

            <div className="login_screen_three">
                <div className="login_screen_background_three">
                    <div className="login_screen_three_body">
                        <h1>Frequently Asked Questions</h1>
                        <div className="login_screen_three_desc"><a href="/" className="login_screen_three_title">What is Netflix?</a><AddIcon fontSize="large" color="inherit" /></div>
                        <div className="login_screen_three_desc"><a href="/" className="login_screen_three_title">How much does Netflix cost?</a><AddIcon fontSize="large" color="inherit" /></div>
                        <div className="login_screen_three_desc"><a href="/" className="login_screen_three_title">Where can I watch?</a><AddIcon fontSize="large" color="inherit" /></div>
                        <div className="login_screen_three_desc"><a href="/" className="login_screen_three_title">How do I cancel?</a><AddIcon fontSize="large" color="inherit" /></div>
                        <div className="login_screen_three_desc"><a href="/" className="login_screen_three_title">What can I watch Netflix?</a><AddIcon fontSize="large" color="inherit" /></div>
                        <div className="login_screen_three_desc"><a href="/" className="login_screen_three_title">Is Netflix good for kids?</a><AddIcon fontSize="large" color="inherit" /></div>
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
        </div>
    )
}

export default Login;
