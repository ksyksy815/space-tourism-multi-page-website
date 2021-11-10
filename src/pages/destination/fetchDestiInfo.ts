import { destinations } from "../../data.json"

export interface DestinationInterface {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export const fetchDestiInfo = (current: string): DestinationInterface => {
  const info = destinations.filter(planet => planet.name === current)
  return info[0]
}