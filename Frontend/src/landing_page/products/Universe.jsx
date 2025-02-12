function Universe() {
    return (
        <>
            <div className="container p-5">
                <div className="text-center mt-5">
                    <h1 className="">The Zerodha Universe</h1>
                    <p className="mt-3 fs-5">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="row p-5">
                    <div className="col text-center p-3 text-muted">
                        <img src="images/zerodhaFundhouse.png" alt="" style={{ width: "50%", paddingBottom: "2rem" }} />
                        <p>Our asset management venture<br />
                            that is creating simple and transparent index<br />
                            funds to help you save for your goals.
                        </p>
                        <img src="images/streakLogo.png" alt="" style={{ width: "50%", paddingTop: "4rem", paddingBottom: "2rem" }} />
                        <p>Systematic trading platform<br />
                            that allows you to create and backtest<br />
                            strategies without coding.
                        </p>
                    </div>
                    <div className="col text-center p-3 mt-3 text-muted">
                        <img src="images/sensibullLogo.svg" alt="" style={{ width: "50%", paddingBottom: "2rem" }} />
                        <p>Options trading platform that lets you<br />
                            create strategies, analyze positions, and examine<br />
                            data points like open interest, FII/DII, and more.
                        </p>
                        <img src="images/smallcaseLogo.png" alt="" style={{ width: "50%", paddingTop: "4.5rem", paddingBottom: "2rem" }} />
                        <p>Thematic investing platform<br />
                            that helps you invest in diversified<br />
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col text-center mt-1 text-muted">
                        <img src="images/tijori.svg" alt="" style={{ width: "40%", paddingTop:"0.5rem",paddingBottom: "2rem" }} />
                        <p>Investment research platform<br />
                            that offers detailed insights on stocks,<br />
                            sectors, supply chains, and more.
                        </p>
                        <img src="images/dittoLogo.png" alt="" style={{ width: "40%", paddingTop: "4rem", paddingBottom: "2rem" }} />
                        <p>Personalized advice on life<br />
                            and health insurance. No spam<br />
                            and no mis-selling.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn fs-5 mb-3" style={{fontWeight:"500",backgroundColor:"#387ed1",color:"white",padding:"0.5rem 3rem"}}>Sign up for free</button>
                </div>
            </div>
        </>
    );
}
export default Universe; 