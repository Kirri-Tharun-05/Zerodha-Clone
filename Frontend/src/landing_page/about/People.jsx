function People() {
    return (
        <>
            <div className="container founder">
                <div className="text-center">
                    <h2 className="" style={{ color: "#424242", margin: "5rem 0" }}>People</h2>
                </div>
                <div className="row found">
                    <div className="col founder-img text-center">
                        <img src="images/nithinKamath.jpg" alt="" />
                        <h4>Nithin Kamath</h4>
                        <p>Founder, CEO</p>
                    </div>
                    <div className="col founder-text">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p><a href="">Connect on Homepage</a> / <a href="">TradingQnA </a>/ <a href=""> Twitter</a></p>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className="col"><img src="" alt="" /></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div> */}
            </div>
        </>
    );
}
export default People; 