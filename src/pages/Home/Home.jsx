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

import "./Home";

const Home = () => {
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
        </div>
    )
}

export default Home;
