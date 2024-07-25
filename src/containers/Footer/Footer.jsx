import React from 'react';
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import Logo from "../../assets/images/logo2.png"

import "./Footer.scss";
import { InstagramIcon, TelegramIcon } from "../../assets/icons";

const Footer = () => {

	const handleSubmit = (e) => e.preventDefault();
	
	return (
		<div class="footer-section">
			<div class="container">
				<footer class="footer-section">
					<div class="container">
						<div class="footer-cta pt-5 pb-5">
							<div class="row">
								<div class="col-xl-4 col-md-4 mb-30">
									<div class="single-cta">
										<i class="fas fa-map-marker-alt"></i>
										<div class="cta-text">
											<h4>Find us</h4>
											<span>Toshkent shahar, Uchtepa tumani, 14-mavze,1-uy</span>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-md-4 mb-30">
									<div class="single-cta">
										<i class="fas fa-phone"></i>
										<div class="cta-text">
											<h4>Call us</h4>
											<span>+99890 987-09-87</span>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-md-4 mb-30">
									<div class="single-cta">
										<i class="far fa-envelope-open"></i>
										<div class="cta-text">
											<h4>Email us</h4>
											<span>aurum_avia@gmail.com</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="footer-content pt-5 pb-5">
							<div class="row">
								<div class="col-xl-4 col-lg-4 mb-50">
									<div class="footer-widget">
										<div class="footer-logo">
											<img src={Logo} alt="" />
										</div>
										<div class="footer-text">
											<p>Biz uchun mijozlarning qulayligi juda muhim. Bizning shior “Sifat foydadan ustun “</p>
										</div>
										<div class="footer-social-icon">
											<span>Follow us</span>
											<Link className="Header-lang" target="_blank" rel="noreferrer" to="https://t.me/adkhamov_987"><TelegramIcon /></Link>
											<Link className="Header-lang" target="_blank" rel="noreferrer" to="https://www.instagram.com/aurum_avia/"><InstagramIcon /></Link>
										</div>
									</div>
								</div>
								<div class="col-xl-4 col-lg-4 col-md-6 mb-30">
									<div class="footer-widget">
										<div class="footer-widget-heading">
											<h3>Useful Links</h3>
										</div>
										<ul>
											<li><a href="/">Home</a></li>
											<li><a href="/">about</a></li>
											<li><a href="/">services</a></li>
											<li><a href="/">portfolio</a></li>
											<li><a href="/">Contact</a></li>
											<li><a href="/">About us</a></li>
											<li><a href="/">Our Services</a></li>
											<li><a href="/">Expert Team</a></li>
											<li><a href="/">Contact us</a></li>
											<li><a href="/">Latest News</a></li>
										</ul>
									</div>
								</div>
								<div class="col-xl-4 col-lg-4 col-md-6 mb-50">
									<div class="footer-widget">
										<div class="footer-widget-heading">
											<h3>Subscribe</h3>
										</div>
										<div class="footer-text mb-25">
											<p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
										</div>
										<div class="subscribe-form">
											<form onSubmit={handleSubmit}>
												<input type="text" placeholder="Email Address" />
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
			<div class="copyright-area">
				<div class="container">
					<div class="row d-flex justify-content-between">
						<div class="col-xl-3 col-lg-6 text-center text-lg-left mb-sm-4 mb-xs-4">
							<div class="copyright-text">
								<p>Copyright &copy; 2023, All Right Reserved <Link target="_blank" rel="noreferrer" to="https://t.me/adkhamov_987">Aurum Avia</Link></p>
							</div>
						</div>
						<div class="col-xl-3 col-lg-6 d-none d-lg-block text-center">
							<div class="footer-menu">
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/">Terms</a></li>
									<li><a href="/">Privacy</a></li>
									<li><a href="/">Policy</a></li>
									<li><a href="/">Contact</a></li>
								</ul>
							</div>
						</div>
						<div class="col-xl-3 col-lg-6 text-center text-lg-right">
							<div class="copyright-text">
								<p>Developed by <Link target="_blank" rel="noreferrer" to="https://t.me/shbotirov227">shbotirov</Link> & <Link target="_blank" rel="noreferrer" to="https://t.me/abik1bragim">abik1bragim</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;