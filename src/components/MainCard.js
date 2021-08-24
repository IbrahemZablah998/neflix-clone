import React from 'react';
import "./MainCard.css";

const MainCard = ({ title, body, img, isRight }) => {
    return (
        <div className="login_screen_two">
            <div className={`login_screen_background_two ${isRight && "right"}`}>
                <img
                    src={img}
                    alt=""
                    className="login_screen_two_image" />
                <div className="login_screen_two_body">
                    <h1>{title}</h1>
                    <h2>{body}</h2>
                </div>
            </div>
        </div >
    )
}

export default MainCard;
