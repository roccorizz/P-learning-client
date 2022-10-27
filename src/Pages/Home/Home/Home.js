import React from 'react';
import Bannerimages from "../../../Carousel/BannerCarousel/Bannerimages";
import BannerImageSlider from "../../../Carousel/BannerCarousel/BannerImageSlider";

const Home = () => {

    return (


        <div>
            <BannerImageSlider images={Bannerimages} />
        </div>
    )

}

export default Home;