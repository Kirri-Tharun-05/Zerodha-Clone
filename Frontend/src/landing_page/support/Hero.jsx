import './Hero.css'
function Hero() {
    return (
        <>
            {/* <div style={{ backgroundColor: "#387ed1" }}>
                <div className="container p-5">
                    <div className="row">
                        <div className="col p-3">
                            <h3>Support Portal</h3>
                            <p>Search for an answer or browse help topics to create a ticket</p>
                            <input id="search-text" type="text" class="col-6" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." ></input><br />
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday margins</a> <br />
                            <a href="">Kite user manual</a>
                        </div>
                        <div className="col">
                            <a href="">Track tickets</a>
                            <div>
                                <h3>Featured</h3>
                                <p>1. <a href="" >Surveillance measure on scrips - February 2025</a></p>
                                <p>2. <a href="">Latest Intraday leverages and Square-off timings</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}
            <div style={{ backgroundColor: "#387ed1",paddingBottom:"2rem"}}>
                <div className="container p-5" style={{ color: "white" }}>
                    <div className="mt-3 mb-3 portal" style={{ display: "flex", justifyContent: "space-between" }}>
                        <p className='fs-4'>Support Portal</p>
                        <a href="" style={{ color: "white" }}>Track tickets</a>
                    </div>

                    <div className="row portal">
                        <div className="col-7"><p className="fs-4">
                            Search for an answer or browse help topics to create a ticket</p>
                            <input id="search-text" type="text" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." style={{width:"95%" ,padding:" 0.8rem 1rem" ,borderRadius:"5px",border:"none"}}></input><br />
                            <br />
                            <a className="" href="" style={{ color: "white" ,textDecoration:"none", borderBottom:"2px solid white", paddingBottom:"2px" , marginRight:"2rem" }}>Track account opening</a>
                            <a href="" style={{ color: "white" ,textDecoration:"none", borderBottom:"2px solid white", paddingBottom:"2px" , marginRight:"2rem" }}>Track segment activation</a>
                            <a href="" style={{ color: "white" ,textDecoration:"none", borderBottom:"2px solid white", paddingBottom:"2px" , marginRight:"2rem"}}>Intraday margins</a>
                            <br />
                            <br />
                            <a href="" style={{ color: "white" ,textDecoration:"none", borderBottom:"2px solid white", paddingBottom:"2px" , marginRight:"1rem"}}>Kite user manual</a><br />
                        </div>
                    
                        <div className="col-5 mt-5" style={{ color: "white",paddingLeft:"4rem"}}>
                            <h3>Featured</h3>
                            <p style={{paddingLeft:"1rem"}}>1. <a href="" style={{ color: "white"}}>Surveillance measure on scrips - February 2025</a></p>
                            <p style={{paddingLeft:"1rem"}}>2. <a href="" style={{ color: "white"}}>Latest Intraday leverages and Square-off timings</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero; 