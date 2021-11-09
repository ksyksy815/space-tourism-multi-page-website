import { useEffect } from 'react'

export default function DestinationInfo( {current: string} ) {
  useEffect(()=> {

  })

  return (
    <div>
      <img src="" alt=""/>
      <section>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div>
          <div>
            <span>AVG. DISTANCE</span>
            <span>{distance}</span>
          </div>
          <div>
            <span>EST. TRAVEL TIME</span>
            <span>{travel}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
