import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from "../../assets/images/logo2.png"

import "./Footer.scss";
import { InstagramIcon, TelegramIcon } from "../../assets/icons";

const Footer = () => {

	const handleSubmit = (e) => e.preventDefault();
	const { t, i18n } = useTranslation();
	const [text, setText] = useState("");

	useEffect(() => {
		if (i18n.language === 'uz') {
		  setText(
			<>
			  <Link target="_blank" rel="noreferrer" to="https://t.me/shbotirov227">shbotirov </Link> & 
			  <Link target="_blank" rel="noreferrer" to="https://t.me/abik1bragim"> abik1bragim </Link> 
			  {t("footer.copyright.dev")}
			</>
		  );
		} else {
		  setText(
			<>
			  {t("footer.copyright.dev")} 
			  <Link target="_blank" rel="noreferrer" to="https://t.me/shbotirov227"> shbotirov </Link> & 
			  <Link target="_blank" rel="noreferrer" to="https://t.me/abik1bragim"> abik1bragim </Link>
			</>
		  );
		}
	  }, [i18n.language, t]);

	return (
		<div className="footer-section">
			<div className="container">
				<footer className="footer-section">
					<div className="container">
						<div className="footer-cta pt-5 pb-5">
							<div className="d-flex justify-content-between text-center row">
								<div className="col-xl-3 col-md-3 mb-xs-4">
									<div className="single-cta">
										<i className="fas fa-map-marker-alt"></i>
										<div className="cta-text">
											<h4 className="mb-3">{t("footer.top.findus")}</h4>
											<span>Toshkent shahar, Uchtepa tumani, 14-mavze,1-uy</span>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-3 mb-xs-4">
									<div className="single-cta">
										<i className="fas fa-phone"></i>
										<div className="cta-text">
											<h4 className="mb-3">{t("footer.top.callus")}</h4>
											<span className="mb-0">+99890 987-09-87</span>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-3 mb-xs-4">
									<div className="single-cta">
										<i className="far fa-envelope-open"></i>
										<div className="cta-text">
											<h4 className="mb-3">{t("footer.top.emailus")}</h4>
											<span>aurum_avia@gmail.com</span>
										</div>
									</div>
								</div>

								<div className="col-xl-3 col-md-3 footer-social-icon">
									<span>{t("footer.top.followus")}</span>
									<Link className="Header-lang" target="_blank" rel="noreferrer" to="https://t.me/adkhamov_987"><TelegramIcon /></Link>
									<Link className="Header-lang" target="_blank" rel="noreferrer" to="https://www.instagram.com/aurum_avia/"><InstagramIcon /></Link>
								</div>
							</div>
						</div>
						<div className="footer-content pt-5 pb-5">
							<div className="row">
								<div className="col-xl-4 col-lg-4 mb-50">
									<div className="footer-widget">
										<div className="footer-logo">
											<img src={Logo} alt="" />
										</div>
										<div className="footer-text">
											<p>{t("footer.bottom.text.1")}</p>
										</div>

									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 mb-30">
									<div className="footer-widget">
										<div className="footer-widget-heading">
											<h3>{t("footer.bottom.title.1")}</h3>
										</div>
										<ul>
											<li><a href="/">{t("footer.bottom.link.1")}</a></li>
											<li><a href="/">{t("footer.bottom.link.2")}</a></li>
											<li><a href="/">{t("footer.bottom.link.3")}</a></li>
											<li><a href="/">{t("footer.bottom.link.4")}</a></li>
											<li><a href="/">{t("footer.bottom.link.5")}</a></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 mb-50">
									<div className="footer-widget">
										<div className="footer-widget-heading">
											<h3>{t("footer.bottom.title.2")}</h3>
										</div>
										<div className="footer-text mb-25">
											<p>{t("footer.bottom.text.2")}</p>
										</div>
										<div className="subscribe-form">
											<form onSubmit={handleSubmit}>
												<input type="text" placeholder={t("footer.bottom.footerEmail")} />
												<button><FaTelegramPlane /></button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>


				</footer>
			</div>
			<div className="copyright-area">
				<div className="container">
					<div className="row d-flex justify-content-between">
						<div className="col-xl-3 col-lg-6 text-center text-lg-left mb-sm-4 mb-xs-4">
							<div className="copyright-text">
								<p>{t("footer.copyright.title")} <Link target="_blank" rel="noreferrer" to="https://t.me/adkhamov_987">Aurum Avia</Link></p>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 d-none d-lg-block text-center">
							<div className="footer-menu">
								<ul>
									<li><a href="/">{t("footer.copyright.copyLink.1")}</a></li>
									<li><a href="/">{t("footer.copyright.copyLink.2")}</a></li>
									<li><a href="/">{t("footer.copyright.copyLink.3")}</a></li>
									<li><a href="/">{t("footer.copyright.copyLink.4")}</a></li>
									<li><a href="/">{t("footer.copyright.copyLink.5")}</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-6 text-center text-lg-right">
							<div className="copyright-text">
								<p>{text}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;