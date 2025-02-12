function RightImage({ imageURL, productName, productDescription, learnMore}) {
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col" style={{paddingTop:"10rem"}}>
                        <h2>{productName}</h2>
                        <p className="text-muted fs-5" >{productDescription}</p>
                        <div className="mt-3">
                            <a href={learnMore}>Learn more <img src="images/right-arrow.png" alt="" style={{ width: "1.1rem" }} /></a>
                        </div>
                    </div>
                    <div className="col p-5" style={{paddingBottom:"5rem"}}>
                        <img src={imageURL} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default RightImage; 