import React from "react"


interface Props {
  positions: {
    sector: string,
    country: string,
    state: string,
    longBusinessSummary: string
  }[]
}

const CompanyInfo: React.FC<Props> = ({positions}) => {

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


export default CompanyInfo;