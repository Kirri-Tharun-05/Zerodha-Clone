import React from "react";
function Education() {
    return (
        <><div className="container">
            <div className="row main">
                <div className="col-6 varsity-img">
                    <img src="images/education.svg" alt="" />
                </div>
                <div className="col-6 link varsity-text">
                    <div className="mb-4">
                        <h1 className="fs-2">Free and open market education</h1>
                        <p className="text-muted mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="">Varsity <img src="images\right-arrow.png" alt="" /></a>
                    </div>
                    <div>
                        <p className="text-muted mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="">TradingQ&A<img src="images\right-arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default Education;