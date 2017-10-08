import sample from "@unction/sample"
import sampleSize from "@unction/samplesize"
import mapValues from "@unction/mapvalues"
import upTo from "@unction/upto"
import {GENDERS} from "@internal/data"
import {JOBS} from "@internal/data"
import {TRAITS} from "@internal/data"
import {BUILDS} from "@internal/data"
import type {ActorType} from "@internal/types"
import job from "./job"

const MAXIMUM_TRAITS = 3

export default function Actor (): ActorType {
  const traits = TRAITS
  const maximum = upTo(MAXIMUM_TRAITS)
  const picked = sample(maximum)
  const final = sampleSize(picked)(traits)
  const results = mapValues(sample)(final)

  return {
    name: "Lorena Delure",
    build: sample(BUILDS),
    traits: mapValues(sample)(sampleSize(sample(upTo(MAXIMUM_TRAITS)))(TRAITS)),
    gender: sample(GENDERS),
    job: job(sample(JOBS)),
  }
}
