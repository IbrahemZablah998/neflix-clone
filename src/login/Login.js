import React from 'react';
import MainCard from '../components/MainCard';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div>
            <Banner />

            <MainCard
                title="Enjoy on your TV."
                body="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                isRight={false}
            />

            <MainCard
                title="Download your shows to watch offline."
                body="Save your favorites easily and always have something to watch."
                img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                isRight={true}
            />

            <MainCard
                title="Watch everywhere."
                body="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                isRight={false}
            />

            <MainCard
                title="Create profiles for kids."
                body="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                img="https://occ-0-4490-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                isRight={true}
            />

            <Footer />
        </div>
    )
}

export default Login;
