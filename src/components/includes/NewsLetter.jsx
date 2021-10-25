import React, { Component } from "react";
import { emailNewsLetterSubscription } from "../../redux/actions/Homepage";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class NewsLetter extends Component {
    state = {
        email: "",
    };
    render() {
        const onChangeEmail = (e) => {
            this.setState({
                email: e.target.value,
            });
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            this.props.emailNewsLetterSubscription(this.state.email);
        };
        return (
            <section id="subscribe_section" className="subscribe_section">
                <div className="row">
                    <ToastContainer />
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        className="form-horizontal"
                    >
                        <div className="form-group form-group-lg">
                            <label
                                className="col-sm-6 control-label"
                                for="formGroupInputLarge"
                            >
                                <h1>
                                    <span className="red-color">Sign up</span>
                                    for the latest news
                                </h1>
                            </label>

                            <div className="col-sm-3">
                                <input
                                    onChange={onChangeEmail}
                                    type="email"
                                    id="subscribe"
                                    name="subscribe"
                                    className="form-control input-lg"
                                    required
                                />
                            </div>
                            <div className="col-sm-1">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-large pink"
                                />
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default connect(null, {
    emailNewsLetterSubscription,
})(NewsLetter);
