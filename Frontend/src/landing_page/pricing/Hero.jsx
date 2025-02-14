function Hero() {
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col text-center mt-5 mb-5">
                        <p style={{ color: "#424242", fontWeight: "500", fontSize: "3rem" }}>Charges</p>
                        <p className="fs-5 text-muted">List of all charges and taxes</p>
                    </div>
                </div>
                <div className="row text-center gap-5 p-5">
                    <div className="col p-2">
                        <img src="images/pricingMF.svg" alt="" className="p-3" />
                        <h3 className="mb-4">Free equity delivery</h3>
                        <p style={{ fontSize: '1.1rem', color: "#424242" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col p-2">
                        <img src="images/other-trades.svg" alt="" className="p-3" />
                        <h3 className="mb-4">Intraday and F&O trades</h3>
                        <p style={{ fontSize: "1.1rem", color: "#424242" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col p-2">
                        <img src="images/pricingMF.svg" alt="" className="p-3" />
                        <h3 className="mb-4">Free direct MF</h3>
                        <p style={{ fontSize: "1.1rem", color: "#424242" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero; 