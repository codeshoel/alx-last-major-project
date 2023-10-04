import ProductList from '../components/ProductList';
import ShopBanner from '../components/ShopBanner';
import ShopNav from '../components/ShopNav';
import Newsletter from '../components/Newsletter';
           

const Home = () => {
    return (
      <>
        <main className="main">
          <div className="page-content mb-10">
            <ShopBanner />
            <div className="container-fluid">
              {/* Start of Shop Content */}
              <div className="shop-content">
                {/* Start of Shop Main Content */}
                <div className="main-content">
                  <ShopNav />
                  <ProductList  />
                  <div className="toolbox toolbox-pagination justify-content-between">
                    <p className="showing-info mb-2 mb-sm-0">
                      Showing<span>1-16 of 60</span>Products
                    </p>
                    <ul className="pagination">
                      <li className="prev disabled">
                        <a
                          href="/"
                          aria-label="Previous"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          <i className="w-icon-long-arrow-left" />
                          Prev
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          2
                        </a>
                      </li>
                      <li className="next">
                        <a href="/" aria-label="Next">
                          Next
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End of Shop Content */}
            </div>
          </div>
          {/* End of Page Content */}
        </main>
        <Newsletter />
      </>
    );
}

export default Home;