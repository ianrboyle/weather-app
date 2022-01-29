import React, {useState, ChangeEvent, useEffect} from 'react';
import axios from "axios"
import PositionsList from './PositionsList';

export interface Position {
  positions: {
    sector: string,
    country: string,
    state: string,
    longBusinessSummary: string
  }[]
}

const Yahoo = () => {
  const [positions, setPositions] = useState<Position["positions"]>([{
    sector: "Tech",
    country: "USA",
    state: "CA",
    longBusinessSummary: "feouwhfew"
  }])
  const getStockInfo = () => {
    var options: object = {
      method: 'GET',
      url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
      params: {modules: 'defaultKeyStatistics,positions'},
      headers: {
        'x-api-key': `${process.env.REACT_APP_YAHOO_API_KEY}`
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.quoteSummary.result);
      setPositions(response.data.quoteSummary.result[0]);
      // response.data.quoteSummary.result.map((comp: object) => {
      //   console.log(comp)
      //   setPositions({
      //     sector: comp.sector
      //   })
      // })
      console.log(positions)
    }).catch(function (error) {
      console.error(error);
    });
           
  }

  return (
  <div>
    <button onClick={getStockInfo}>Click</button>
    {/* {positions?.map((p) => {return p.sector})} */}
    <PositionsList positions={positions}/>
  </div> )
}

export default Yahoo;