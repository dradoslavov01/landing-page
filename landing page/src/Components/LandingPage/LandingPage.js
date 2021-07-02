import style from './LandingPage.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'
import banner from '../../assets/banner.png'


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
                    <li><Link to="/signIn">Sign In</Link></li>
                </ul>
            </div>

            <div className={style.content}>
                <div className={style.description}>
                    <h1>Go Beyond Traditional Clinical Trial Feasibility</h1>
                    <p>Why losing studies you can win with TrialHub</p>
                    <input type="text" name="email" placeholder="Your work email" />
                    <button>See TrialHub in Action</button>
                </div>
                <div className={style.banner}>
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;