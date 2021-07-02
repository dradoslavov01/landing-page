import style from './LandingPage.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import banner from '../../assets/banner.png';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';


const LandingPage = () => {


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const input = e.target.email.value;

        if (input === '') {
            alert('Enter a valid Business Email to continue.');
        }
    }

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
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="email" placeholder="Your work email" />
                        <button>See TrialHub in Action</button>
                    </form>
                    <div className={style.message}>
                        <FormatQuoteIcon className={style.quoteIcon} />
                        <p>Previously only the big CROs and pharma could afford such a sophisticated platform.
                            TrialHub is a game changer!</p>
                    </div>
                </div>
                <div className={style.banner}>
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;