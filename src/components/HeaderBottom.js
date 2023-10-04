const HeaderBottom = () => {
    return (
        <>
            <div className="header-bottom sticky-content fix-top sticky-header has-dropdown" style={{ backgroundColor:'#eee' }}>
                <div className="container">
                    <div className="inner-wrap">
                        <div className="header-left">
                        <a href="/categories" className="d-xl-show mr-3">
                                <i className="w-icon-category mr-1" />
                                Product Categories
                            </a>
                            <a href="/">
                                <i className="w-icon-sale mr-1" />
                                Go to Shop
                            </a>
                        </div>
                        <div className="header-right">
                            <a href="/" className="d-xl-show">
                                <i className="w-icon-map-marker mr-1" />
                                Track Order
                            </a>
                            <a href="/">
                                <i className="w-icon-sale" />
                                Daily Deals
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderBottom;