import { useState, useEffect } from 'react'
import { fetchDestiInfo, DestinationInterface } from './fetchDestiInfo'

interface DestiInfoProps {
  current: string
}

export default function DestinationInfo( { current }: DestiInfoProps ) {
  const [info, setInfo] = useState<DestinationInterface>({} as DestinationInterface)

  useEffect (()=> {
    const fetchedInfo = fetchDestiInfo(current)
    setInfo(fetchedInfo)
  }, [current])

  return (
    <div>
      <img src="" alt=""/>
      <section>
        <div>
          <h1>{info.name}</h1>
          <p>{info.description}</p>
        </div>
        <div>
          <div>
            <span>AVG. DISTANCE</span>
            <span>{info.distance}</span>
          </div>
          <div>
            <span>EST. TRAVEL TIME</span>
            <span>{info.travel}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
