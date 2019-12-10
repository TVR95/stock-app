import React, { useEffect, useState } from "react";
import axios from "axios";

function Stocks() {

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
        <div className="container">
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
            </div>
            {data.isLoaded ? 
                data.items.items.map((item) => {
                return (
                    <div className="row">
                        <div className="col">
                            <p>{item.name}</p>
                        </div> 
                        <div className="col">
                            <p>{item.unit}</p>
                        </div>
                        <div className="col">
                            <p>{item.price} zł</p>
                        </div>
                    </div> 
                );     
            }) : <p>No Data</p>}
        </div>
    );
}

export default Stocks;