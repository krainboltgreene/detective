import type {JobType} from "./JobType"

export type ActorType = {
  name: string,
  gender: string,
  job: JobType,
  build: string,
  traits: Array<string>,
}
