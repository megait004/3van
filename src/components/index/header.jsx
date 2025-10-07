import Image from '../../assets/img/icon-fb.png';
import { useRef, useEffect } from 'react';
const Header = ({ setHeaderHeight }) => {
    const headerRef = useRef(null);
    useEffect(() => {
        setHeaderHeight(headerRef?.current.offsetHeight);
    }, []);
    return (
        <header ref={headerRef} className='header'>
            <div className='header__content--icon'>
                <img src={Image} />
                <span className='header--center--help'>Help Center</span>
            </div>
            <div className='header__content--language'>
                <div className='header__content--language--icon'>
                    <i className='fa-solid fa-language'></i>
                </div>
                <span>English</span>
            </div>
        </header>
    );
};

export default Header;
