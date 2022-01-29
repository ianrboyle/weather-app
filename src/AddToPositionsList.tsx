import React, {ChangeEvent, useState} from "react"
import axios from "axios"
import {Position as Props} from "./YahooAPI"
// interface IProps {
//   onChange:  
// }
interface IProps {
  positions: Props["positions"]
  setPositions: React.Dispatch<React.SetStateAction<Props["positions"]>>
}
const AddToPositionsList: React.FC<IProps> = ({positions, setPositions}) => {
  const [newPosition, setNewPosition] = useState("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    setNewPosition(event.target.value)
  }
  const handleClick = ():void => {
    var options: object = {
      method: 'GET',
      url: `https://yfapi.net/v11/finance/quoteSummary/${newPosition}`,
      params: {modules: 'defaultKeyStatistics,assetProfile'},
      headers: {
        'x-api-key': `${process.env.REACT_APP_YAHOO_API_KEY}`
      }
    };
    
     axios.request(options).then(function (response) {
      console.log(response.data.quoteSummary.result[0]);
      if(!response.data.quoteSummary.result){return}
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
      console.log(positions)
    }).catch(function (error) {
      console.error(error);
    });
           
  }
  return (
    <div>
    <input onChange={handleChange} value={newPosition} type="text" placeholder="symbol"/>
    <button onClick={handleClick}>Submit</button>
    </div>

  )
}

export default AddToPositionsList