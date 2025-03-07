import React from "react";
function Trust() {
    return (
        <>
            <div className="container">
                <div className="row main ">
                    <div className="col-6 ">
                        <h1 className="fs-2 mb-5">Trust with confidence</h1>
                        <div className="subpart">
                            <div>
                                <h3 className="fs-4">Customer-first always</h3>
                                <p className="text-muted">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                            </div>
                            <div>
                                <h3 className="fs-4">No spam or gimmicks</h3>
                                <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                            </div>
                            <div>
                                <h3 className="fs-4">The Zerodha universe</h3>
                                <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                            </div>
                            <div>
                                <h3 className="fs-4">Do better with money</h3>
                                <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-center" >
                        <div className="main-img">
                            <img src="images/ecosystem.png" alt="" />
                        </div>
                        <div className="img-links">
                            <a href="">Explore our products  <img src="images\right-arrow.png" alt="" /></a>
                            <a href="">Try Kite demo <img src="images\right-arrow.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <img src="images/pressLogos.png" alt="" />
                </div>
            </div>

        </>
    );
}
export default Trust;