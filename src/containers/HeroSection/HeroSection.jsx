import React from 'react';
import { useTranslation } from 'react-i18next';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroInfoCard from "../../components/HeroInfoCard/HeroInfoCard";

import BgImage1 from "../../assets/images/bgImg1.jpg";
import BgImage2 from "../../assets/images/bgImg2.jpg";
import BgImage3 from "../../assets/images/bgImg3.jpg";
import BgImage4 from "../../assets/images/bgImg4.jpg";

import "./HeroSection.scss";
import "./HeroSectionMedia.scss";



const HeroSection = () => {

	const { t } = useTranslation();

	return (
		<div className="HeroSection">
			<div className="HeroSection-inner">
				<CCarousel controls indicators pause={false} interval={2000} transition="crossfade">
					<CCarouselItem className='Carousel'>
						<CImage style={{
							background: "rgba(5, 27, 41, 0.18)",
							boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
							backdropFilter: "blur(2px)",
							filter: "brightness(50%)"
						}} className="d-block w-100" src={BgImage1} alt="slide 1" />
						<CCarouselCaption className="carouselCaption d-md-block">
							<h4 className="HeroSection-title">{t("banner1.h2")}</h4>
							<h3 className="HeroSection-cityName">{t('banner1.h1')}</h3>
							<a className="btn-default" href="#contact">{t('button.go')}</a>
						</CCarouselCaption>
						<HeroInfoCard population="44.48 M" area="275.400 KM2" price="$481,77" />
					</CCarouselItem>


					<CCarouselItem>
						<CImage style={{
							background: "rgba(5, 27, 41, 0.18)",
							boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
							backdropFilter: "blur(2px)",
							filter: "brightness(50%)"
						}} className="d-block w-100" src={BgImage2} alt="slide 2" />
						<CCarouselCaption className="carouselCaption d-md-block">
							<h4 className="HeroSection-title">{t('banner2.h2')}</h4>
							<h3 className="HeroSection-cityName">{t('banner2.h1')}</h3>
							<a className="btn-default" href="#contact">{t('button.go')}</a>
						</CCarouselCaption>
						<HeroInfoCard population="8.66 M" area="41.290 KM2" price="$492,96" />
					</CCarouselItem>

					<CCarouselItem>
						<CImage style={{
							background: "rgba(5, 27, 41, 0.18)",
							boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
							backdropFilter: "blur(2px)",
							filter: "brightness(50%)"
						}} className="d-block w-100" src={BgImage3} alt="slide 3" />
						<CCarouselCaption className="carouselCaption d-md-block">
							<h4 className="HeroSection-title">{t('banner3.h2')}</h4>
							<h3 className="HeroSection-cityName">{t('banner3.h1')}</h3>
							<a className="btn-default" href="#contact">{t('button.go')}</a>
						</CCarouselCaption>
						<HeroInfoCard population="67.41 M" area="551.500 KM2" price="$439.43" />
					</CCarouselItem>

					<CCarouselItem>
						<CImage style={{
							background: "rgba(5, 27, 41, 0.18)",
							boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
							backdropFilter: "blur(2px)",
							filter: "brightness(50%)",
						}} className="d-block w-100" src={BgImage4} alt="slide 3" />
						<CCarouselCaption className="carouselCaption d-md-block">
							<h4 className="HeroSection-title">{t('banner4.h2')}</h4>
							<h3 className="HeroSection-cityName">{t('banner4.h1')}</h3>
							<a className="btn-default" href="#contact">{t('button.go')}</a>
						</CCarouselCaption>
						<HeroInfoCard population="69.86 M" area="513.120 KM2" price="$870.87" />
					</CCarouselItem>

				</CCarousel>
				{/* <HeroInfoCard /> */}
			</div>
		</div>
	);
}

export default HeroSection;