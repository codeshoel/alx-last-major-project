import PageTitle from "../components/PageTitle";

const Contact = () => {
    return (
        <>
            <PageTitle title={"Contac Us"}/>

            <div className="page-content contact-us mt-10">
                <div className="container">
                    <section className="contact-information-section mb-10">
                    <div
                        className="row owl-carousel owl-theme cols-xl-4 cols-md-3 cols-sm-2 cols-1"
                        data-owl-options="{
                                'items': 4,
                                'nav': false,
                                'dots': false,
                                'loop': false,
                                'margin': 20,
                                'responsive': {
                                    '0': {
                                        'items': 1
                                    },
                                    '480': {
                                        'items': 2
                                    },
                                    '768': {
                                        'items': 3
                                    },
                                    '992': {
                                        'items': 4
                                    }
                                }
                            }"
                    >
                        <div className="icon-box text-center icon-box-primary">
                        <span className="icon-box-icon icon-email">
                            <i className="w-icon-envelop-closed" />
                        </span>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">E-mail Address</h4>
                            <p>contact@gandjonlineshop.com</p>
                        </div>
                        </div>
                        <div className="icon-box text-center icon-box-primary">
                        <span className="icon-box-icon icon-headphone">
                            <i className="w-icon-headphone" />
                        </span>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Phone Number</h4>
                            <p>(237) 456-7890 / (234) 456-9870</p>
                        </div>
                        </div>
                        <div className="icon-box text-center icon-box-primary">
                        <span className="icon-box-icon icon-map-marker">
                            <i className="w-icon-map-marker" />
                        </span>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Address</h4>
                            <p>Simbock, CE-Yaounde, Cameroon</p>
                        </div>
                        </div>
                        <div className="icon-box text-center icon-box-primary">
                        <span className="icon-box-icon icon-fax">
                            <i className="w-icon-fax" />
                        </span>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Fax</h4>
                            <p>1-800-570-7777</p>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* End of Contact Information section */}
                    <hr className="divider mb-10 pb-1" />
                    <section className="contact-section">
                    <div className="row gutter-lg pb-3">
                        <div className="col-lg-10 mb-8">
                        <h4 className="title mb-3">Send Us a Message</h4>
                        <form className="form contact-us-form" action="#" method="post">
                            <div className="form-group">
                            <label htmlFor="username">Your Name</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email_1">Your Email</label>
                            <input
                                type="email"
                                id="email_1"
                                name="email_1"
                                className="form-control"
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                cols={30}
                                rows={5}
                                className="form-control"
                                defaultValue={""}
                            />
                            </div>
                            <button type="submit" className="btn btn-dark btn-rounded">
                            Send Now
                            </button>
                        </form>
                        </div>
                    </div>
                    </section>
                    {/* End of Contact Section */}
                </div>
            </div>

        </>
    );
}

export default Contact;