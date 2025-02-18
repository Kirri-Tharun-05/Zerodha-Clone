import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg border-bottom sticky-top bg-white" style={{ padding: "1rem 0" }}>
                <div class="container">
                    <Link class="navbar-brand" to={"/"} ><img src="images/logo.svg" alt="" style={{ width: "25%" }} /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/products'}>Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'http://localhost:5174/'} target="_blank" rel="noopener noreferrer">Kite</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/pricing'}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/support'}>Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;