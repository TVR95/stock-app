import React, { useEffect, useState } from "react";
import axios from "axios";
import TableStocks from "./TableStocks";

function WalletRender() {

    const [data, setData] = useState({
        items: [],
        isLoaded: false
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('stocks/data');

            setData({ items: result.data, isLoaded: true });
        };

        fetchData();

        const interval = setInterval(fetchData, 30000);
        return () => {
            clearInterval(interval); 
            data.isLoaded = false;
        };
    }, []);

    // Now with data we got from our backend server we can render simple table using bootstrap grid system
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>Wallet</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Company</p>
                </div> 
                <div className="col">
                    <p>Units</p>
                </div>
                <div className="col">
                    <p>Price</p>
                </div>
                <div className="col">

                </div>
            </div>
            {data.isLoaded ? 
                data.items.items.map((item) => {
                return (
                    <TableStocks namee={item.name} unit={item.unit} price={item.price} code={item.code} buttonName="Sell" postAction="sell" />
                );      
            }) : <p>No Data</p>}
        </div>
    );
}

export default WalletRender;