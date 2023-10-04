import { useState } from 'react';


const CreateCategory = () => {

    const [categoryTitle, setCategoryTitle] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(categoryTitle);
    };

    return (
        <>
            <main className="main login-page">
                <div className="page-content">
                    <div className="container">
                        <div className="login-popup">
                            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                <h3>Add a Product Category</h3>
                                <div className="tab-pane active">
                                    <form 
                                        onSubmit={handleSubmit}
                                        method="POST"
                                    >
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Category Title"
                                            name="title"
                                            required="required"
                                            value={categoryTitle}
                                            onChange={e => setCategoryTitle(e.target.value)}
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

export default CreateCategory;