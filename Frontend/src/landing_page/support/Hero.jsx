import './Hero.css'
function Hero() {
    return (
        <>
            <div style={{ backgroundColor: "#387ed1", paddingBottom: "2rem" }}>
                <div className="container p-5" style={{ color: "white" }}>
                    <div className="mt-3 mb-3 portal" style={{ display: "flex", justifyContent: "space-between" }}>
                        <p className='fs-4'>Support Portal</p>
                        <a href="" style={{ color: "white" }}>Track tickets</a>
                    </div>

                    <div className="row portal">
                        <div className="col-7"><p className="fs-4">
                            Search for an answer or browse help topics to create a ticket</p>
                            <input id="search-text" type="text" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." style={{ width: "95%", padding: " 0.8rem 1rem", borderRadius: "5px", border: "none" }}></input><br />
                            <br />
                            <a href="" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "2px", marginRight: "2rem" }}>Track account opening</a>
                            <a href="" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "2px", marginRight: "2rem" }}>Track segment activation</a>
                            <a href="" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "2px", marginRight: "2rem" }}>Intraday margins</a>
                            <br />
                            <br />
                            <a href="" style={{ color: "white", textDecoration: "none", borderBottom: "1px solid white", paddingBottom: "2px", marginRight: "1rem" }}>Kite user manual</a><br />
                        </div>

                        <div className="col-5 mt-3" style={{ color: "white", paddingLeft: "3.5rem" }}>
                            <h3 className='mb-4 fs-5'>Featured</h3>
                            <ol>
                                <li style={{paddingBottom:"1rem"}}><a href="" style={{ color: "white", fontSize: "1.05rem"}}>Adjustment of F&O contracts of NATIONALUM due to dividend</a></li>
                                <li><a href="" style={{ color: "white", fontSize: "1.05rem" }}> Surveillance measure on scrips - February 2025</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero; 