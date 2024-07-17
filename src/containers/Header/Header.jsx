import React from 'react';
import { Link } from "react-router-dom";
import i18next from '../../i18n';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, TelegramIcon } from "../../assets/icons";
import Logo from "../../assets/images/logo.png";

import "./Header.scss";
import "./HeaderMedia.scss";


const Header = () => {
	const { t } = useTranslation()
	function changeLang(lang) {
		i18next.changeLanguage(lang)
	}

	return (
		<div className="Header" id="header">
			<div className="Header-inner container">
				<a href="/"><img src={Logo} alt="logo" /></a>
				<ul className="Header-links">
					<li><a className="Header-link" href="/">{t("header.home")}</a></li>
					<li><a className="Header-link" href="#about">{t("header.about")}</a></li>
					<li><a className="Header-link" href="#tours">{t("header.tours")}</a></li>
					<li><a className="Header-link" href="#contact">{t("header.contact")}</a></li>
				</ul>

				<div className="Header-langs">
					<button onClick={e => { changeLang("uz") }} className="Header-lang" to="/">UZ</button>
					<button onClick={e => { changeLang("en") }} className="Header-lang" to="/">ENG</button>
					<button onClick={e => { changeLang("ru") }} className="Header-lang" to="/">RU</button>

					<Link className="Header-lang" to="/"><TelegramIcon /></Link>
					<Link className="Header-lang" to="/"><InstagramIcon /></Link>
				</div>
			</div>

		</div>
	);
}

export default Header;