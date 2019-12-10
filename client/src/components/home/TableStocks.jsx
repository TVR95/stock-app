import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function TableStocks(params) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="row">
                <div className="col">
                    <p>{params.namee}</p>
                </div> 
                <div className="col">
                    <p>{params.unit}</p>
                </div>
                <div className="col">
                    <p>{params.price} zł</p>
                </div>
                <div className="col">
                    <button className="btn btn-primary" type="button" onClick={() => setOpen(!open)}  aria-expanded={open} aria-controls={params.code}>{params.buttonName}</button>
                </div>
            </div>
            <Collapse in={open}>
                <div className="row" id={params.code}>
                    <div className="form-row col">
                        <form action={params.postAction}>
                            <input className="form-control" type="text" value={params.namee} readOnly />
                        </form>
                        <form action="">
                            <input className="form-control" type="number" name="units" placeholder={'Units number to ' + params.buttonName}/>
                        </form>
                        <button className="btn btn-primary" type="submit" name="confirm">Confirm</button>
                    </div>
                </div>
            </Collapse>
        </>   
    );
}

export default TableStocks;