import { useEffect } from 'react';

function RightImage({ imageURL, productName, productDescription, learnMore }) {
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
                    <div className="col reveal-text" style={{ paddingTop: "10rem" }}>
                        <h2>{productName}</h2>
                        <p className="text-muted fs-5">{productDescription}</p>
                        <div className="mt-3">
                            <a href={learnMore}>Learn more <img src="images/right-arrow.png" alt="" style={{ width: "1.1rem" }} /></a>
                        </div>
                    </div>
                    <div className="col p-5" style={{ paddingBottom: "5rem" }}>
                        <img src={imageURL} alt="" className="reveal-img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightImage;
