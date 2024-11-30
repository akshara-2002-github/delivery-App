import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';

import './index.css';

const Login = () => {
	// return (
	// 	<div className="box">
	// 		<div className="box__1"></div>
	// 		<div className="box__2"></div>
	// 		<div className="box__3"></div>
	// 	</div>
	// );
	return (
		<div className="login__container">
			<div className="login page">
				<LoginForm />
				<div className="login__image"></div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
