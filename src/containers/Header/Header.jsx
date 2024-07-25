import React, { useState } from 'react';
import { Link } from "react-router-dom";
import i18next from '../../i18n';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, TelegramIcon } from "../../assets/icons";
import Logo from "../../assets/images/logo2.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaTelegram, FaSquareInstagram } from "react-icons/fa6";

import "./Header.scss";
import "./HeaderMedia.scss";


const Header = () => {

	const [active, setActive] = useState(false);

	const { t } = useTranslation();
	function changeLang(lang) {
		i18next.changeLanguage(lang)
	}

	return (
		<div className="Header" id="header">

			{
				<div className={`overlay ${active ? "active" : "deactive"}`}>

					<ul className="overlay-menu">
						<li><a className="overlay-link" href="/">{t("header.home")}</a></li>
						<li><a className="overlay-link" href="#about">{t("header.about")}</a></li>
						<li><a className="overlay-link" href="#tours">{t("header.tours")}</a></li>
						<li><a className="overlay-link" href="#contact">{t("header.contact")}</a></li>

						<div className="overlay-langs">
							<button onClick={e => { changeLang("uz") }} className="overlay-lang" to="/">UZ</button>
							<button onClick={e => { changeLang("en") }} className="overlay-lang" to="/">ENG</button>
							<button onClick={e => { changeLang("ru") }} className="overlay-lang" to="/">RU</button>

						</div>
						<div className="icons">
							<Link className="overlay-lang" to="/"><FaTelegram /></Link>
							<Link className="overlay-lang" to="/"><FaSquareInstagram /></Link>
						</div>
					</ul>
				</div>
			}

			<div className="Header-inner container">
				<a href="/"><img className="logo" src={Logo} alt="logo" /></a>
				<ul className="Header-links">
					<li><a className="Header-link" href="/">{t("header.home")}</a></li>
					<li><a className="Header-link" href="#about">{t("header.about")}</a></li>
					<li><a className="Header-link" href="#tours">{t("header.tours")}</a></li>
					<li><a className="Header-link" href="#contact">{t("header.contact")}</a></li>
					{/* <li><a className="Header-link" href="/table">{t("header.table")}</a></li> */}
				</ul>

				<div className="Header-langs">
					<button onClick={e => { changeLang("uz") }} className="Header-lang" to="/">UZ</button>
					<button onClick={e => { changeLang("en") }} className="Header-lang" to="/">ENG</button>
					<button onClick={e => { changeLang("ru") }} className="Header-lang" to="/">RU</button>

					<Link className="Header-lang" to="https://t.me/@adkhamov_987"><TelegramIcon /></Link>
					<Link className="Header-lang" to="https://www.instagram.com/aurum_avia/?utm_source=ig_web_button_share_sheet"><InstagramIcon /></Link>
				</div>
				<button onClick={() => setActive(!active)} className="btn-burger">
					{active ? <IoClose color="#fff" /> : <IoMenu color="#fff" />}
				</button>
			</div>

		</div>
	);
}

export default Header;