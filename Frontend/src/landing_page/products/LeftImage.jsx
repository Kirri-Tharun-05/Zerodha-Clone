import { useEffect } from 'react';

function LeftImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal-container');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add the "visible" class when the element is in view
                    observer.unobserve(entry.target); // Stop observing the element after it's revealed
                }
            });
        }, {
            threshold: 0.5 // Trigger the animation when 50% of the element is in view
        });

        // Observe each element
        revealElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup the observer when the component unmounts
        return () => {
            revealElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="row p-5 reveal-container">
                    <div className="col p-5">
                        <img src={imageURL} alt="" className="reveal-img" />
                    </div>
                    <div className="col p-5 mt-5 reveal-text">
                        <h2>{productName}</h2>
                        <p className="text-muted fs-5">{productDescription}</p>
                        <div className="mt-3">
                            <a href={tryDemo}>Try more <img src="images/right-arrow.png" alt="" style={{ width: "1.1rem" }} /></a>
                            <a href={learnMore} style={{ marginLeft: "6.5rem" }}>Learn more <img src="images/right-arrow.png" alt="" style={{ width: "1.1rem" }} /></a>
                        </div>
                        <div className="mt-3">
                            <a href={googlePlay}><img src="images/googlePlayBadge.svg" alt="" /></a>
                            <a href={appStore} style={{ marginLeft: "3rem" }}><img src="images/appstoreBadge.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftImage;
