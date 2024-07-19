import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import HeroSection from "../../containers/HeroSection/HeroSection";
import Prices from "../../containers/Prices/Prices";
import Reservation from "../../containers/Reservation/Reservation";
import VisaSupport from "../../containers/VisaSupport/VisaSupport";
import Explore from "../../containers/Explore/Explore";
import Visit from "../../containers/Visit/Visit";
import Locations from "../../containers/Locations/Locations";
import FormSection from "../../containers/FormSection/FormSection.jsx";
// import { GoMoveToTop } from "react-icons/go";
import { BiSolidToTop  } from "react-icons/bi";

import "./Home";
import { useEffect, useState } from "react";

const Home = () => {

	const [ showButton, setShowButton ] = useState(false);

	function handle () {
		return window.scrollTo({ top: 0, behavior: "smooth" })
	}

	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
		};

		window.addEventListener('scroll', handleScrollButtonVisibility);

		return () => {
			window.removeEventListener('scroll', handleScrollButtonVisibility);
		};
	},[]);

	return (
		<div className="Home">
			<Header />
			<HeroSection />
			<Prices />
			<VisaSupport />
			<Explore />
			<Visit />
			<Locations />
			<Reservation />
			<FormSection />
			<Footer />

			{
				showButton && (
					<div className={`scrollToTop`}>
						<button className="btn-top" onClick={handle}><BiSolidToTop  /></button>
					</div>
				)
			}
		</div>
	)
}

export default Home;
