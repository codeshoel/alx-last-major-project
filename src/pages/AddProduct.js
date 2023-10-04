import { useState } from 'react';


const AddProduct = () => {

    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${productName}, ${productImage}`);
    };

    return (
        <>
            <main className="main login-page">
                <div className="page-content">
                    <div className="container">
                        <div className="login-popup">
                            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                <h3>Add a Product</h3>
                                <div className="tab-pane active">
                                    <form 
                                        onSubmit={handleSubmit}
                                        method="POST"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Product Name"
                                                name="title"
                                                required="required"
                                                value={productName}
                                                onChange={e => setProductName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                className="form-control"
                                                placeholder="Enter Product Name"
                                                name="title"
                                                accept="image/"
                                                value={productImage}
                                                onChange={e => setProductImage(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-5 row">
                                            <input type="submit" value="Create"  className="btn btn-primary" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AddProduct;