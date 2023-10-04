import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';

const Header = ({isLoggedIn, Logout}) => {
    return (
        <>
            <div className="page-wrapper">
                <header className='header'>
                    <HeaderTop isLoggedIn={isLoggedIn} Logout={Logout} />
                    <HeaderMiddle />
                    <HeaderBottom />
                </header>
            </div>
        </>
    );
}

export default Header;
