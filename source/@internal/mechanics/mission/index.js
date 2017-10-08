import upTo from "@unction/upto"
import mapValues from "@unction/mapvalues"
import type {MissionType} from "@internal/types"
import actor from "./actor"
import crime from "./crime"

const MAXIMUM_WITNESSES = 10
const MAXIMUM_SUSPECTS = 5
const MAXIMUM_VICTIMS = 3

export default function mission (): MissionType {
  return {
    name: "The case of the missing foot",
    witnesses: mapValues(actor)(upTo(MAXIMUM_WITNESSES)),
    suspects: mapValues(actor)(upTo(MAXIMUM_SUSPECTS)),
    victims: mapValues(actor)(upTo(MAXIMUM_VICTIMS)),
    crime: crime(),
  }
}
