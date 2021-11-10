import { useState } from 'react'
import DestinationInfo from './DestinationInfo'
import DestiNav from './DestiNav'


export default function Destination() {
  const [current, setCurrent] = useState("Moon")


  return (
    <div>
      <div>
        <span>01</span>
        <span>PICK YOUR DESTINATION</span>
      </div>
      <div>
        <DestiNav />
        <DestinationInfo current={current}/>
      </div>
    </div>
  )
}
