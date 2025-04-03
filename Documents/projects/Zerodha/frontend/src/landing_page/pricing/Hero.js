import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row p-5 mt-5 text-center border-bottom">
        <h1 style={{ fontSize: "50px" }}>Charges</h1>
        <p className="text-muted" style={{ fontSize: "25px" }}>
          List of all charges and taxe
        </p>
      </div>
      <div className="row text-center border-bottom">
        <div className="col-4 p-5 mb-5">
          <img
            src="media/images/pricingEquity.svg"
            style={{ width: "75%" }}
          />
          <h2>Free equity delivery
          </h2>
          <p className="text-small text-muted text-center" style={{ fontSize: "18px" }}>
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "75%" }}
          />
          <h2>Intraday and F&O trades
          </h2>
          <p className="text-small text-muted text-center" style={{ fontSize: "18px" }}>
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "75%" }}
          />
          <h2>Free direct MF

          </h2>
          <p className="text-small text-muted text-center" style={{ fontSize: "18px" }}>
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
