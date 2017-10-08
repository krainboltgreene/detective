import type {ActorType} from "./ActorType"
import type {CrimeType} from "./CrimeType"

export type MissionType = {
  name: string,
  witnesses: Array<ActorType>,
  suspects: Array<ActorType>,
  victims: Array<ActorType>,
  crime: CrimeType,
}
