import { useState } from 'react';
import NotifySuccess from '../utils/notifications/NotifySuccess';


const UserAccountDetails = () => {

    const [statusMessage, setStatusMessage] = useState('Save Changes');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusMessage('Saving...')
        setTimeout(() => {
            NotifySuccess('Account Updated Successfully');
            setStatusMessage('Save Changes')
        }, 5000);
    }

    return (
        <>
            <div className="page-content pt-2">
            <div className="container">
                    <div className="tab-pane">
                            <div className="icon-box icon-box-side icon-box-light mb-4">
                            <span className="icon-box-icon icon-account mr-2">
                                <i className="w-icon-user" />
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title mb-0 ls-normal">
                                    User Account <br />Details
                                </h4>
                            </div>
                            </div>
                            <form
                            className="form account-details-form"
                            onSubmit={handleSubmit}
                            method="post"
                            >
                            <div className="row">
                                <h4 className="title title-password ls-25 font-weight-bold">
                                    Personal Info
                                </h4>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                    type="text"
                                    name="name"
                                    value="Kum Jude"
                                    placeholder="Username"
                                    className="form-control form-control-md"
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="kumjude@gmail.com"
                                        className="form-control form-control-md"
                                    />
                                </div>
                                </div>
                            </div>
                            <h4 className="title title-password ls-25 font-weight-bold">
                                Password change
                            </h4>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="cur-password">
                                Current Password leave blank to leave unchanged
                                </label>
                                <input
                                type="password"
                                className="form-control form-control-md"
                                id="cur-password"
                                name="cur_password"
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="new-password">
                                New Password leave blank to leave unchanged
                                </label>
                                <input
                                type="password"
                                className="form-control form-control-md"
                                id="new-password"
                                name="new_password"
                                />
                            </div>
                            <div className="form-group mb-10">
                                <label className="text-dark" htmlFor="conf-password">
                                Confirm Password
                                </label>
                                <input
                                type="password"
                                className="form-control form-control-md"
                                id="conf-password"
                                name="conf_password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark btn-rounded btn-sm mb-4"
                            >
                                {statusMessage}
                            </button>
                            </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserAccountDetails;