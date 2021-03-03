import React from 'react';

const Contect = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contect US </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Mobile Number" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3">
                                </textarea>
                            </div>
                            <div className="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contect;