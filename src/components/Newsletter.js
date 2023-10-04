const Newsletter = () => {
    return (
        <>
            <div className="footer-newsletter bg-primary pt-6 pb-6">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="icon-box icon-box-side text-white">
                        <div className="icon-box-icon d-inline-flex">
                            <i className="w-icon-envelop3" />
                        </div>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-white text-uppercase mb-0">
                            Subscribe To Our Newsletter
                            </h4>
                            <p className="text-white">
                            Get all the latest information on Events, Sales and Offers.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                        <form
                        action="#"
                        method="get"
                        className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                        >
                        <input
                            type="email"
                            className="form-control mr-2 bg-white"
                            name="email"
                            id="email"
                            placeholder="Your E-mail Address"
                        />
                        <button className="btn btn-dark btn-rounded" type="submit">
                            Subscribe
                            <i className="w-icon-long-arrow-right" />
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsletter;