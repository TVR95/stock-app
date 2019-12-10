import React from 'react';
import StockRender from "./home/StockRender"
import WalletRender from "./home/WalletRender"
import "bootstrap/dist/css/bootstrap.min.css";



function Home() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <StockRender />
                    <WalletRender />
                </div>
            </div>
        </div>
    );
}

export default Home;