import React from "react";
function Hero() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <img src="images/homeHero.png" alt="" className="mb-5"/>
                    <div className="mt-5 text-center">
                        <h1>Invest in everything</h1>
                        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                        <button type="button" className="btn btn-primary col-2">Sign up for free</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;