export type CrimeType = {
  type: string,
  happendAt: [number, string],
  discoveredAt: [number, string],
  motive: string,
  evidences: Array<string>,
}
