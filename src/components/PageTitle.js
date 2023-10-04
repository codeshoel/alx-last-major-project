const PageTitle = (props) => {
    return (
        <>
            <div className="footer-newsletter bg-primary pt-6 pb-6">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-2 col-lg-2">
                            <h4 className="icon-box-title text-white text-capitalize mb-0">
                                {props.title} 
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PageTitle;