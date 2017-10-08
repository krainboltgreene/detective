import {TIMES} from "@internal/data"
import {QUALITIES} from "@internal/data"
import type {JobType} from "@internal/types"
import sample from "@unction/sample"
import upTo from "@unction/upto"

const MAXIMUM_AGE = 10

export default function job (type: string): JobType {
  return {
    name: type,
    age: [sample(upTo(MAXIMUM_AGE)), sample(TIMES)],
    quality: sample(QUALITIES),
  }
}
