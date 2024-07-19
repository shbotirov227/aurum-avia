import React, { useState } from 'react';
import { Link } from "react-router-dom";
import i18next from '../../i18n';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, TelegramIcon } from "../../assets/icons";
import Logo from "../../assets/images/logo2.png";
import { IoMenu, IoClose } from "react-icons/io5";

import "./Header.scss";
import "./HeaderMedia.scss";


const Header = () => {

	const [active, setActive] = useState(false);

	const { t } = useTranslation()
	function changeLang(lang) {
		i18next.changeLanguage(lang)
	}

	return (
		<div className="Header" id="header">

			{
				<div className={`overlay ${active ? "active" : ""}`}>
					<button onClick={() => setActive(false)} className="btn-burger">
						<IoClose />
					</button>

					<ul className="overlay-menu">
						<li><a className="overlay-link" href="/">{t("header.home")}</a></li>
						<li><a className="overlay-link" href="#about">{t("header.about")}</a></li>
						<li><a className="overlay-link" href="#tours">{t("header.tours")}</a></li>
						<li><a className="overlay-link" href="#contact">{t("header.contact")}</a></li>
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
				</ul>

				<div className="Header-langs">
					<button onClick={e => { changeLang("uz") }} className="Header-lang" to="/">UZ</button>
					<button onClick={e => { changeLang("en") }} className="Header-lang" to="/">ENG</button>
					<button onClick={e => { changeLang("ru") }} className="Header-lang" to="/">RU</button>

					<Link className="Header-lang" to="/"><TelegramIcon /></Link>
					<Link className="Header-lang" to="/"><InstagramIcon /></Link>
				</div>
				<button onClick={() => setActive(true)} className="btn-burger">
					<IoMenu />
				</button>
			</div>

		</div>
	);
}

export default Header;