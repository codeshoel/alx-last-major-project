import engImg from '../assets/images/flags/eng.png';
import frImg from '../assets/images/flags/fra.png';

const HeaderTop = ({isLoggedIn, Logout}) => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                    <p className="welcome-msg">
                        Welcome to Shoprite Online Store!
                    </p>
                    </div>
                    <div className="header-right">
                    {/* End of DropDown Menu */}
                    <div className="dropdown">
                        <a href="#language">
                        <img
                            src={engImg}
                            alt="ENG Flag"
                            width={14}
                            height={8}
                            className="dropdown-image"
                        />{" "}
                        ENG
                        </a>
                        <div className="dropdown-box">
                        <a href="#ENG">
                            <img
                            src={engImg}
                            alt="ENG Flag"
                            width={14}
                            height={8}
                            className="dropdown-image"
                            />
                            ENG
                        </a>
                        <a href="#FRA">
                            <img
                            src={frImg}
                            alt="FRA Flag"
                            width={14}
                            height={8}
                            className="dropdown-image"
                            />
                            FRA
                        </a>
                        </div>
                    </div>
                    <span className="divider d-lg-show" />
                    <a href="/" className="d-lg-show">
                        User guides
                    </a>
                    <a href="/contact" className="d-lg-show">
                        Contact Us
                    </a>
                    
                    {!isLoggedIn ? (
                        <>
                            <a href="/auth/login" className="d-lg-show login sign-in">
                                <i className="w-icon-account" />
                                Sign In
                            </a>
                            <span className="delimiter d-lg-show">/</span>
                            <a
                                href="/auth/register"
                                className="ml-0 d-lg-show login register"
                            >
                                Register
                            </a>
                        </>
                    ):
                    (
                        <>
                            <a href="/my-account" className="d-lg-show">
                                My Account
                            </a>
                            <a onClick={Logout} className="d-lg-show" style={{ cursor: 'pointer' }}>
                                Logout
                            </a>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderTop;