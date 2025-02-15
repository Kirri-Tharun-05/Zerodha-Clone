function Changes() {

    return (
        <>
            <div className="container mb-5" style={{ padding: '0 8rem' }}>
                <h3 className="fs-2 text-muted mb-5 px-4" style={{ borderBottom: "1px solid rgba(66, 66, 66, 0.2)", display: "inline-block", paddingBottom: '0.5rem' }}>Equity</h3>
                <table>
                    <thead className="p-5" style={{ border: '1px solid rgba(66, 66, 66, 0.2)' }}>
                        <tr>
                            <th style={{ padding: '1rem' }}>&nbsp;</th>
                            <th style={{ padding: '1em' }}>Equity delivery</th>
                            <th style={{ padding: '1rem' }}>Equity intraday</th>
                            <th style={{ padding: '1rem' }}>F&O - Futures</th>
                            <th style={{ padding: '1rem' }}>F&O - Options</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: '1px solid rgba(66, 66, 66, 0.2)', borderTop: '0px' }}>
                        <tr>
                            <td style={{ padding: '1rem' }}>Brokerage</td>
                            <td style={{ padding: '1rem' }}>Zero Brokerage</td>
                            <td style={{ padding: '1rem' }}>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td style={{ padding: '1rem' }}>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td style={{ padding: '1rem' }}>Flat Rs. 20 per executed order</td>

                        </tr>
                        <tr style={{ backgroundColor: "rgba(66, 66, 66, 0.04)" }}>
                            <td style={{ padding: '1rem' }}>STT/CTT</td>
                            <td style={{ padding: '1rem' }}>0.1% on buy & sell</td>
                            <td style={{ padding: '1rem' }}>0.025% on the sell side</td>
                            <td style={{ padding: '1rem' }}>0.02% on the sell side</td>
                            <td style={{ padding: '1rem' }}>
                                <ul>
                                    <li> 0.125% of the intrinsic value on options that are bought and exercised</li>
                                    <li> 0.1% on sell side (on premium)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem' }}>Transaction charges</td>
                            <td style={{ padding: '1rem' }}>NSE: 0.00297%
                                BSE: 0.00375%</td>
                            <td style={{ padding: '1rem' }}>NSE: 0.00297%
                                BSE: 0.00375%</td>
                            <td style={{ padding: '1rem' }}>NSE: 0.00173%
                                BSE: 0</td>
                            <td style={{ padding: '1rem' }}>NSE: 0.03503% (on premium)
                                BSE: 0.0325% (on premium)</td>
                        </tr>
                        <tr style={{ backgroundColor: "rgba(66, 66, 66, 0.04)" }}>
                            <td style={{ padding: '1rem' }}>GST</td>
                            <td style={{ padding: '1rem' }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td style={{ padding: '1rem' }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td style={{ padding: '1rem' }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td style={{ padding: '1rem' }}>18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem' }}>SEBI charges</td>
                            <td style={{ padding: '1rem' }}>₹10 / crore</td>
                            <td style={{ padding: '1rem' }}>₹10 / crore</td>
                            <td style={{ padding: '1rem' }}>₹10 / crore</td>
                            <td style={{ padding: '1rem' }}>₹10 / crore</td>
                        </tr>
                        <tr style={{ backgroundColor: "rgba(66, 66, 66, 0.04)" }}>
                            <td style={{ padding: '1rem' }}>Stamp charges</td>
                            <td style={{ padding: '1rem' }}>0.015% or ₹1500 / crore on buy side</td>
                            <td style={{ padding: '1rem' }}>0.003% or ₹300 / crore on buy side</td>
                            <td style={{ padding: '1rem' }}>0.002% or ₹200 / crore on buy side</td>
                            <td style={{ padding: '1rem' }}>0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-center mt-4 fs-5"><a href="" style={{ textDecoration: "none", color: "#387ed1" }}>Calculate your costs upfront</a> using our brokerage calculator</p>
                <div>
                    <p className="fs-4 mt-4 mb-4">Charges explained</p>
                    <div className="row">
                        <div className="col">
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>Securities/Commodities transaction tax</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                            <p style={{ fontSize: "0.8rem" }}> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>Transaction/Turnover Charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>Call & trade</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> Stamp charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> NRI brokerage charges </p>
                            <ul>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>₹100 per order for futures and options.</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}> For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}> ₹500 + GST as yearly account maintenance charges (AMC) charges.</p>
                                </li>
                            </ul>
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> Account with debit balance</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                            <ul>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>Equity and Futures - ₹10 per crore + GST of the traded value.</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>Options - ₹50 per crore + GST traded value (premium value).</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p>
                                </li>
                            </ul>
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>Margin Trading Facility (MTF)</p>
                            <ul>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}> MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}> MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>GST</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>SEBI Charges
                            </p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>DP (Depository participant) charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>Pledging charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>₹30 + GST per pledge request per ISIN.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> AMC (Account maintenance charges)</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="" style={{ textDecoration: "none" }}>Click here</a></p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>  For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="" style={{ textDecoration: "none" }}>Click here</a></p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>  Corporate action order charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}>  ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> Off-market transfer charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> ₹25 per transaction.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>  Physical CMR request</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}>  Payment gateway charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> ₹9 + GST (Not levied on transfers done via UPI)</p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> Delayed Payment Charges</p>
                            <p className="mb-3" style={{ fontSize: "0.8rem" }}> Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more. </p>

                            <p className="mb-3" style={{ fontSize: '1.3rem' }}> Trading using 3-in-1 account with block functionality</p>
                            <ul>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}>Delivery & MTF Brokerage: 0.5% per executed order.</p>
                                </li>
                                <li>
                                    <p className="mb-3" style={{ fontSize: "0.8rem" }}> Intraday Brokerage: 0.05% per executed order.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row text-muted mt-3 mb-5">
                        <p style={{ fontSize: '1.3rem' }}>Disclaimer</p>
                        <p style={{ fontSize: "0.8rem" }}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                    </div>
                    <div className="row">
                        <p className="mt-5 fs-3" style={{ fontWeight: '400' }}>Charges for account opening</p>
                        <table>
                            <thead className="p-5" style={{ border: '1px solid rgba(66, 66, 66, 0.2)' }}>
                                <tr>
                                    <th style={{ padding: '1rem', fontWeight: "500" }} className="col-10">Type of account</th>
                                    <th style={{ padding: '1em', fontWeight: "500" }} className="col-2">Charges</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid rgba(66, 66, 66, 0.2)', borderTop: '0px' }}>
                                <tr>
                                    <td style={{ padding: '1rem' }} className="col-10">Online account</td>
                                    <td style={{ padding: '1rem' }} className="col-2"> <span style={{ backgroundColor: "green", textTransform: "uppercase", fontSize: '11px', fontWeight: '500', color: '#fff', background: '#4caf50', padding: '4px 10px' }}>Free</span></td>
                                </tr>
                                <tr style={{ backgroundColor: "rgba(66, 66, 66, 0.04)" }}>
                                    <td style={{ padding: '1rem' }} className="col-10">Offline account</td>
                                    <td style={{ padding: '1rem' }} className="col-2"> <span style={{ backgroundColor: "green", textTransform: "uppercase", fontSize: '11px', fontWeight: '500', color: '#fff', background: '#4caf50', padding: '4px 10px' }}>Free</span></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1rem' }} className="col-10">NRI account (offline only)</td>
                                    <td style={{ padding: '1rem' }} className="col-2">₹ 500</td>
                                </tr>
                                <tr style={{ backgroundColor: "rgba(66, 66, 66, 0.04)" }}>
                                    <td style={{ padding: '1rem' }} className="col-10">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                    <td style={{ padding: '1rem' }} className="col-2">₹ 500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row mt-3 mb-5">
                        <p className="mt-5 fs-3" style={{ fontWeight: '400' }}>Charges for optional value added services</p>
                        <table>
                            <thead className="p-5" style={{ border: '1px solid rgba(66, 66, 66, 0.2)' }}>
                                <tr>
                                    <th style={{ padding: '1rem', fontWeight: "500" }}>Service</th>
                                    <th style={{ padding: '1em', fontWeight: "500" }}>Billing Frquency</th>
                                    <th style={{ padding: '1em', fontWeight: "500" }} >Charges</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid rgba(66, 66, 66, 0.2)', borderTop: '0px' }}>
                                <tr>
                                    <td style={{ padding: '1rem' }} >Tickertape</td>
                                    <td style={{ padding: '1rem' }} >Monthly / Annual</td>
                                    <td style={{ padding: '1rem' }} >Free: 0 | Pro: 249/2399</td>
                                </tr>
                                <tr style={{ backgroundColor: "rgba(66, 66, 66, 0.04)" }}>
                                    <td style={{ padding: '1rem' }} >Smallcase</td>
                                    <td style={{ padding: '1rem' }} >Per transaction</td>
                                    <td style={{ padding: '1rem' }} >Buy & Invest More: 100 | SIP: 10</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1rem' }} >Kite Connect</td>
                                    <td style={{ padding: '1rem' }} >Monthly</td>
                                    <td style={{ padding: '1rem' }} >Connect: 2000 | Historical: 2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Changes; 