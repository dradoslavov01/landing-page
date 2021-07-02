import style from './ActionPage.module.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import logoBlue from '../../assets/logo-blue1.png';

const ActionPage = () => {

    const [image, setImage] = useState();
    const [value, setValue] = useState();

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                console.log(res.data);
                setValue(res.data.value);
                setImage(res.data.icon_url);
            })
    }, [])

    return (
        <div className={style.actionContainer}>
            <Link to="/">
                <img src={logoBlue} />
                <p>TrialHub</p>
            </Link>
            <div className={style.value}>
                <img src={image} alt="icon" />
                <p>{value}</p>
            </div>
        </div>
    );
}

export default ActionPage;