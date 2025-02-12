function LeftImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col p-5">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="col p-5 mt-5">
                        <h2>{productName}</h2>
                        <p className="text-muted fs-5" >{productDescription}</p>
                        <div className="mt-3">
                            <a href={tryDemo}>Try more <img src="images/right-arrow.png" alt="" style={{ width: "1.1rem" }} /></a>
                            <a href={learnMore} style={{marginLeft:"6.5rem"}}>Learn more <img src="images/right-arrow.png" alt="" style={{ width: "1.1rem"}} /></a>
                        </div>
                        <div className="mt-3">
                            <a href={googlePlay}><img src="images/googlePlayBadge.svg" alt="" /></a>
                            <a href={appStore} style={{marginLeft:"3rem"}}><img src="images/appstoreBadge.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LeftImage; 