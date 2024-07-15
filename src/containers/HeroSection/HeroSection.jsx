import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HeroInfoCard from "../../components/HeroInfoCard/HeroInfoCard";
import BgImage1 from "../../assets/images/bgImg1.jpg";
import BgImage2 from "../../assets/images/bgImg2.jpg";
import BgImage3 from "../../assets/images/bgImg3.jpg";
import BgImage4 from "../../assets/images/bgImg4.jpg";

import "./HeroSection.scss";



const HeroSection = () => {
	return (
		<div className="HeroSection">
			<div className="HeroSection-inner">
				<CCarousel controls indicators pause={false} interval={1000} transition="crossfade">
					<CCarouselItem>
						<CImage className="d-block w-100" src={BgImage1} alt="slide 1" />
						<CCarouselCaption className="d-none d-md-block">
							<h4 className="HeroSection-title">Take a Glimpse Into The Beautiful City Of:</h4>
							<h3 className="HeroSection-cityName">Istanbul</h3>
							<a className="btn-default" href="#contact">Go There</a>
						</CCarouselCaption>
						<HeroInfoCard population="44.48 M"	area="275.400 KM2" price="$946.000" />
					</CCarouselItem>
					

					<CCarouselItem>
						<CImage className="d-block w-100" src={BgImage2} alt="slide 2" />
						<CCarouselCaption className="d-none d-md-block">
							<h4 className="HeroSection-title">Take a Glimpse Into The Beautiful City Of:</h4>
							<h3 className="HeroSection-cityName">Antalya</h3>
							<a className="btn-default" href="#contact">Go There</a>
						</CCarouselCaption>
						<HeroInfoCard population="8.66 M" area="41.290 KM2" price="$1.100.200" />
					</CCarouselItem>

					<CCarouselItem>
						<CImage className="d-block w-100" src={BgImage3} alt="slide 3" />
						<CCarouselCaption className="d-none d-md-block">
							<h4 className="HeroSection-title">Take a Glimpse Into The Beautiful City Of:</h4>
							<h3 className="HeroSection-cityName">Dubai</h3>
							<a className="btn-default" href="#contact">Go There</a>
						</CCarouselCaption>
						<HeroInfoCard population="67.41 M" area="551.500 KM2" price="$425.600" />
					</CCarouselItem>

					<CCarouselItem>
						<CImage className="d-block w-100" src={BgImage4} alt="slide 3" />
						<CCarouselCaption className="d-none d-md-block">
							<h4 className="HeroSection-title">Take a Glimpse Into The Beautiful City Of:</h4>
							<h3 className="HeroSection-cityName">Sharm El-Sheikh</h3>
							<a className="btn-default" href="#contact">Go There</a>
						</CCarouselCaption>
						<HeroInfoCard population="69.86 M" area="513.120 KM2" price="$165.450" />
					</CCarouselItem>
					
				</CCarousel>
				{/* <HeroInfoCard /> */}
			</div>
		</div>
	);
}

export default HeroSection;