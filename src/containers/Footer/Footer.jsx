import React from 'react';

import "./Footer.scss";

const Footer = () => {
	return (
		<div className="Footer">

			<div className="Footer-inner container">
				<div>
					<h2 className="Footer-title">Are You Looking To Travel ?</h2>
					<h4 className="Footer-text">Make A Reservation By Clicking The Button</h4>
				</div>

				<a href="#formSection" className="btn-default">Book Yours Now</a>
			</div>

			<div className="Footer-bottom">
				<h5 className="Footer-copyright">Copyright © 2024 Zamon Business Tour.  All rights reserved.</h5>
			</div>
		</div>
	);
}

export default Footer;