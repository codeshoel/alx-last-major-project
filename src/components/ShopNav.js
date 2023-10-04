import Categories from "./Categories";

const ShopNav = () => {
    return (
        <>
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
            <div className="toolbox-left mb-5">
                <div className="toolbox-item toolbox-sort select-box text-dark">
                <label>Sort By :</label>
                <select name="orderby" className="form-control">
                    <option value="default" selected="selected">
                        Default sorting
                    </option>
                    <Categories />
                </select>
                </div>
            </div>
            <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                <select name="count" className="form-control">
                    <option value={9}>Show 9</option>
                    <option value={12} selected="selected">
                    Show 12
                    </option>
                    <option value={24}>Show 24</option>
                    <option value={36}>Show 36</option>
                </select>
                </div>
                <div className="toolbox-item toolbox-layout">
                <a
                    href="shop-fullwidth-banner.html"
                    className="icon-mode-grid btn-layout active"
                >
                    <i className="w-icon-grid" />
                </a>
                <a href="shop-list.html" className="icon-mode-list btn-layout">
                    <i className="w-icon-list" />
                </a>
                </div>
            </div>
            </nav>
        </>
    );
}

export default ShopNav;