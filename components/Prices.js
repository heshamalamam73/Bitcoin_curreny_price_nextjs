import { useEffect, useState } from "react";

function Prices(props) {
    const [currency, setCurrency] = useState('USD')
    const { bpi } = props.bpi
    let list = '';
    if (currency === "USD") {
        list = <li className='list-group-item'>
            Bitcoin Rate For {bpi.USD.description} : {bpi.USD.rate} <span className="badge badge-primary">{bpi.USD.code}</span>
        </li>
    }
    else if (currency === "EUR") {
        list = <li className='list-group-item'>
            Bitcoin Rate For {bpi.EUR.description} : {bpi.EUR.rate} <span className="badge badge-primary">{bpi.EUR.code}</span>
        </li>
    } else if (currency === "GBP") {
        list = <li className='list-group-item'>
            Bitcoin Rate For {bpi.GBP.description} : {bpi.GBP.rate} <span className="badge badge-primary">{bpi.GBP.code}</span>
        </li>
    }


    return (
        <div>
            <p>Check current Bitcoin Rate </p>          
                <div class="form-group">
                    <label for="exampleSelect1">Select Currency</label>
                    <select class="form-control " id="exampleSelect1" onChange={(e) => (setCurrency(e.target.value))}  > 
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
            {list}
            {/* {props.bpi.time.updated} */}

        </div>
    )

}
export default Prices;