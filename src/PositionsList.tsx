import React from "react"


interface Props {
  positions: {
    sector: string,
    country: string,
    state: string,
    longBusinessSummary: string
  }[]
}

const PositionsList: React.FC<Props> = ({positions}) => {

  const renderCompanies = (): JSX.Element[] => {
    return positions.map((position, i) => {
      return (
        <li key={i}>
          <div>
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