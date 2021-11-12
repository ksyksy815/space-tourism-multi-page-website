import { useState, useEffect } from 'react'
import DestinationInfo from './DestinationInfo'
import DestiNav from './DestiNav'
import styled from 'styled-components';
import { Page } from '../../styles/commonStyles'
import bgImageDesktop from '../../assets/destination/background-destination-desktop.jpg'
import moon from "../../assets/destination/image-moon.png"
import mars from "../../assets/destination/image-mars.png"
import europa from "../../assets/destination/image-europa.png"
import titan from "../../assets/destination/image-titan.png"

const DestinationPage = styled(Page)`
  background: url(${bgImageDesktop});
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  row-gap: 2rem;
`

const DestiTitle = styled.div`
  font-size: 2rem;
  display: flex;
  column-gap: 2rem;
`

const DestiInfoBox = styled.section`
  border: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default function Destination() {
  const [current, setCurrent] = useState<string | null>("Moon")
  const [imageURL, setImageURL] = useState(moon)

  const handleCurrent = (str: string | null) => {
    setCurrent(str)
  }
  
  useEffect(() => {
    switch (current) {
      case "Moon":
        setImageURL(moon)
        break;
      case "Mars":
        setImageURL(mars)
        break;
      case "Europa":
        setImageURL(europa)
        break;
      case "Titan":
        setImageURL(titan)
        break;
      default: return;
    }
  }, [current])

  return (
    <DestinationPage>
      <DestiTitle>
        <span>01</span>
        <span>PICK YOUR DESTINATION</span>
      </DestiTitle>
      <DestiInfoBox>
        <img src={imageURL} alt={current}></img>
        <div>
          <DestiNav handleCurrent={handleCurrent}/>
          <DestinationInfo current={current}/>
        </div>
      </DestiInfoBox>
    </DestinationPage>
  )
}
