import './index.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__content">
				<div className="footer__content__logo">
					<div className="footer__content__logo__icon"></div>
					<div className="footer__content__logo__store"></div>
					<p>
						Company # 490039-445, Registered with
						<br /> House of companies
					</p>
				</div>

				<div className="footer__content__last">
					<div className="footer__content__form">
						<h4>Get Exclusive Deals in your Inbox</h4>
						<form className="footer__content__form__input">
							<input type="text" placeholder="yourmail@mail.com" />
							<button>subscribe</button>
						</form>

						<p>we wont spam, read our email policy</p>
						<div className="footer__content__form__input__icon">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div className="footer__content__links">
						<div>
							<h4>Legal Pages</h4>
							<a>Terms and conditions</a>
							<a>Privacy</a>
							<a>Cookies</a>
							<a>Modern Slavery Statement</a>
						</div>
						<div>
							<h4>Important Links</h4>
							<a>Get help</a>
							<a>Add your resturant</a>
							<a>Sign up to delivery</a>
							<a>Create a business account</a>
						</div>
					</div>
				</div>
			</div>

			<div className="footer__disclaimer">
				<div>
					<p>Order.uk Copyright 2024, All Rights Reserve</p>
				</div>
				<div>
					<p>Privacy Policy </p>
					<p>Terms</p>
					<p>pricing</p>
					<p> Do not sell or share my personal information</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

// <div className="footer-container-top">
// <div className="footer-container-top-part1"><h4>Orders</h4><div>Company # 490039-445, Registered with House of companies</div></div>
// <div className="footer-container-top-part2">
//   <h4> Get Exclusive Deals in your Inbox</h4>
//   <form className="input">
// 	<input type="text" className="input1" />
// 	<input type="submit" value="Subscribe" className="input2" />
//   </form>
//   <div>We wont spam,read our policy terms</div>
//   <div></div>
//   <div></div>
// </div>
// <div className="footer-container-top-part3">
//   <h4>Legal Pages</h4>
//   <div>Terms and conditions</div>
//   <div>Privacy</div>
//   <div>Cookies</div>
//   <div>Modern Slavery Statement</div>
// </div>
// <div className="footer-container-top-part4">
//   <h4>Important Links</h4>
//   <div>Get help</div>
//   <div>Add your resturant</div>
//   <div>Sign up to deliver</div>
//   <div>Create a bussiness account</div>
// </div>
// </div>

// <div className="footer-container-bottom">
// <div className="footer-container-bottom-left-part">
//   Order.uk Copyright 2024, All Rights Reserved.
// </div>
// <div className="footer-container-bottom-right-part">
//   <div className="footer-container-bottom-right-part1">
// 	Privacy Policy
//   </div>
//   <div className="footer-container-bottom-right-part2">Terms</div>
//   <div className="footer-container-bottom-right-part3">Pricing</div>
//   <div className="footer-container-bottom-right-part4">
// 	Do not sell or share my personal information
//   </div>
// </div>
// </div>
