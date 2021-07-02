import style from './LandingPage.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'


const LandingPage = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>

                <Link to="/">
                    <img src={logo} alt="logo" />
                    TrialHub
                </Link>

                <ul>
                    <li><Link to="/contacts">Contact Us</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default LandingPage;