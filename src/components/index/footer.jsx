import metaLogo from '../../assets/img/metalogo.svg';
const Footer = () => {
    return (
        <>
            <div className='container__footer'>
                <div className='container__footer--child'>
                    <div>
                        <ul className='container__footer--title'>
                            <li>About</li>
                            <li>Ad Choices</li>
                            <li>Create Ad</li>
                            <li>Terms and Cookies Policy</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='container__footer--title'>
                            <li>Privacy</li>
                            <li>Careers</li>
                            <li>Create Page</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='footer--logo-meta'>
                    <div>
                        from <img src={metaLogo} className='meta-logo' />
                    </div>
                    <div>© 2025 Meta</div>
                </div>
            </div>
        </>
    );
};

export default Footer;
