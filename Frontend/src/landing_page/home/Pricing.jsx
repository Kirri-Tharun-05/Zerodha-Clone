import React from "react";
import './Pricing.css';
function Pricing() {
    return (
        <><div className="container">
            <div className="row main">
                <div className="col-4 link">
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p className="text-muted mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">Try Kite demo <img src="images\right-arrow.png" alt="" /></a>
                </div>
                <div className="col-8 right-block ">
                    <div className="pic-block blo-1">
                        <img src="images/pricingEquity.svg" alt="" />
                        <p className="text-muted">Free account<br />opening</p>
                    </div>
                    <div className="pic-block">
                        <img src="images/pricingEquity.svg" alt="" />
                        <p className="text-muted"> Free equity delivery<br />and direct mutual funds</p>
                    </div>
                    <div className="pic-block">
                        <img src="images/other-trades.svg" alt="" />
                        <p className="text-muted">  Intraday and
                            <br />F&O</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Pricing;