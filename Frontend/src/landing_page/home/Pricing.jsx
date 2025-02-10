import React from "react";
function Pricing() {
    let styles={
        width:"2rem"
    }
    return (
        <><div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className="col-8 ">
                    <img src="images/pricingEquity.svg" alt="" />
                    <img src="images/pricingEquity.svg" alt="" />
                </div>
            </div>
        </div>
        </>
    );
}
export default Pricing;