import React from "react"
import {Position as Props} from "./YahooAPI"


const PositionsList: React.FC<Props> = ({positions}) => {

  const renderCompanies = (): JSX.Element[] => {
    return positions.map((position, i) => {
      return (
        <li key={i}>
          <div>
            <h1>{position.name}</h1>
            <p>{position.longBusinessSummary.substring(0,250)}...</p>
            <p>{position.sector}</p>
          </div>
      </li>
      )})
  }
  return (

      <ul>
        {renderCompanies()}
      </ul>)
      
    
}


export default PositionsList;