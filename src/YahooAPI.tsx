import React, {useState, ChangeEvent, useEffect} from 'react';
import axios from "axios"

const Yahoo = () => {
  const getStockInfo = () => {
    var options: object = {
      method: 'GET',
      url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
      params: {modules: 'defaultKeyStatistics,assetProfile'},
      headers: {
        'x-api-key': `${process.env.REACT_APP_YAHOO_API_KEY}`
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(typeof response.data.quoteSummary.result);
    }).catch(function (error) {
      console.error(error);
    });
           
  }

  return <div><button onClick={getStockInfo}>Click</button></div> 
}

export default Yahoo;