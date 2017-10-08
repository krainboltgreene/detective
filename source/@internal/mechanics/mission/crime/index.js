import sampleSize from "@unction/samplesize"
import sample from "@unction/sample"
import upTo from "@unction/upto"
import {CRIMES} from "@internal/data"
import {MOTIVES} from "@internal/data"
import {TIMES} from "@internal/data"
import {EVIDENCES} from "@internal/data"
import type {CrimeType} from "@internal/types"

const MAXIMUM_EVIDENCES = 5
const MAXIMUM_AMOUNT = 10

export default function crime (): CrimeType {
  return {
    type: sample(CRIMES),
    happendAt: [sample(upTo(MAXIMUM_AMOUNT)), sample(TIMES)],
    discoveredAt: [sample(upTo(MAXIMUM_AMOUNT)), sample(TIMES)],
    motive: sample(MOTIVES),
    evidences: sampleSize(sample(upTo(MAXIMUM_EVIDENCES)))(EVIDENCES),
  }
}
