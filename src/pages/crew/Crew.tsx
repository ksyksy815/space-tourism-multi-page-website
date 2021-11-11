import React from 'react'
import styled from 'styled-components';
import {Page } from '../../styles/commonStyles'
import bgImageDesktop from '../../assets/crew/background-crew-desktop.jpg'

const CrewPage = styled(Page)`
  background: url(${bgImageDesktop});
`

export default function Crew() {
  return (
    <CrewPage>
      
    </CrewPage>
  )
}
