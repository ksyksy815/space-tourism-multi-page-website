import { destinations } from "../../data.json"

export const fetchDestiInfo = (current: string) => {
  for (let i = 0; i < destinations.length; i++) {
    if (destinations[i].name === current) {
      return destinations[i]
    }
  }
}