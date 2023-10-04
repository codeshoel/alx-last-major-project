import bgImg from '../assets/images/shop/banner2.jpg';

const ShopBanner = () => {
    return (
        <>
            <div
                  className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6"
                  style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundColor: "#FFC74E"
                  }}
                >
                  <div className="container banner-content">
                    <h4 className="banner-subtitle font-weight-bold">
                      Welcome to Shoprite 
                    </h4>
                    <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">
                      Online Shop
                    </h3>
                    <a
                      href="shop-banner-sidebar.html"
                      className="btn btn-dark btn-rounded btn-icon-right"
                    >
                      Discover Now
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
        </>
    );
}

export default ShopBanner;