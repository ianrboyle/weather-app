import React, {useState, ChangeEvent, useEffect} from 'react';
import axios from "axios"
import PositionsList from './PositionsList';
import AddToPositionsList from './AddToPositionsList';

export interface Position {
  positions: {
    name: string,
    sector: string,
    country: string,
    state: string,
    longBusinessSummary: string
  }[]
}

const Yahoo = () => {
  const [positions, setPositions] = useState<Position["positions"]>([{
    name: "Fake",
    sector: "Tech",
    country: "USA",
    state: "CA",
    longBusinessSummary: "feouwhfew"
  }])
  const [newPosition, setNewPosition] = useState("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setNewPosition(event.target.value)
  }
  
  const getPositionInfo = async () => {
    var options: object = {
      method: 'GET',
      url: `https://yfapi.net/v11/finance/quoteSummary/${newPosition}`,
      params: {modules: 'defaultKeyStatistics,assetProfile'},
      headers: {
        'x-api-key': `${process.env.REACT_APP_YAHOO_API_KEY}`
      }
    };
    
    await axios.request(options).then(function (response) {
      console.log(response.data.quoteSummary.result[0]);
      // setPositions(response.data.quoteSummary.result[0].assetProfile);
      setPositions([
        ...positions,
        {
          name: newPosition,
          sector: response.data.quoteSummary.result[0].assetProfile.sector,
          country: response.data.quoteSummary.result[0].assetProfile.country,
          state: response.data.quoteSummary.result[0].assetProfile.state,
          longBusinessSummary: response.data.quoteSummary.result[0].assetProfile.longBusinessSummary
        }
      ])
      // setNewPosition({
      //   name: event.target.value,
      //   sector: response.data.quoteSummary.result[0].assetProfile.sector,
      //   country: response.data.quoteSummary.result[0].assetProfile.country,
      //   state: response.data.quoteSummary.result[0].assetProfile.state,
      //   longBusinessSummary: response.data.quoteSummary.result[0].assetProfile.longBusinessSummary,
      // })
      console.log(positions)
    }).catch(function (error) {
      console.error(error);
    });
           
  }
  return (
  <div>
    <input onChange={handleChange} value={newPosition} type="text" placeholder="symbol"/>
    <button onClick={getPositionInfo}>Submit</button>
    {/* {positions?.map((p) => {return p.sector})} */}
    <PositionsList positions={positions}/>
    <AddToPositionsList />
  </div> )
}

export default Yahoo;