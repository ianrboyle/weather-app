import React, {useState} from 'react';
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

  return (
  <div>
    <AddToPositionsList positions={positions} setPositions={setPositions}/>
    <PositionsList positions={positions}/>
   
  </div> )
}

export default Yahoo;