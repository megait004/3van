const Navbar = ({ height }) => {
    return (
        <>
            <div
                className='container--navbar'
                style={{
                    height: `calc(100dvh - ${height}px)`
                }}
            >
                <div className='container--navbar--child'>
                    <div className='container--general container--navbar--home'>
                        <span>
                            <i className='fa-solid fa-house'></i>
                        </span>
                        <span>Home</span>
                    </div>
                    <div className='cc container--general container--navbar--search'>
                        <span>
                            <i className='cc fa-solid fa-magnifying-glass'></i>
                        </span>
                        <span>Search</span>
                    </div>
                    <div className='cc container--general container--navbar--lock'>
                        <span>
                            <i className='fa-solid fa-lock'></i>
                        </span>
                        <span>Privacy Policy</span>
                    </div>
                    <div className='cc container--general container--navbar--alert'>
                        <span>
                            <i className='fa-solid fa-circle-exclamation'></i>
                        </span>
                        <span>Other Terms and Conditions</span>
                    </div>
                    <div className='cc container--general container--navbar--setting'>
                        <span>
                            <i className='fa-solid fa-gear'></i>
                        </span>
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
