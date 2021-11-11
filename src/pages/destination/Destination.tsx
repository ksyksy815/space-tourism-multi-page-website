import { useState } from 'react'
import DestinationInfo from './DestinationInfo'
import DestiNav from './DestiNav'
import styled from 'styled-components';
import { Page } from '../../styles/commonStyles'
import bgImageDesktop from '../../assets/destination/background-destination-desktop.jpg'

const DestinationPage = styled(Page)`
  background: url(${bgImageDesktop});
`

export default function Destination() {
  const [current, setCurrent] = useState("Moon")


  return (
    <DestinationPage>
      <div>
        <span>01</span>
        <span>PICK YOUR DESTINATION</span>
      </div>
      <div>
        <DestiNav />
        <DestinationInfo current={current}/>
      </div>
    </DestinationPage>
  )
}
