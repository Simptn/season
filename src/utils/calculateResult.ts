import type { AnswerOption } from '../constants/questions'
import type { Phase, ResultData, Season } from '../constants/results'

export const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter']
export const phases: Phase[] = ['early', 'mid', 'late']

export type SeasonScores = Record<Season, number>
export type PhaseScores = Record<Phase, number>

export interface CalculationResult {
  result: ResultData
  season: Season
  phase: Phase
  seasonPercentages: SeasonScores
  phasePercentages: PhaseScores
}

function sumWeights<T extends string>(answers: AnswerOption[], keys: T[], field: 'seasonWeights' | 'phaseWeights'): Record<T, number> {
  return answers.reduce((totals, answer) => {
    const weights = answer[field] as Partial<Record<T, number>> | undefined
    keys.forEach((key) => { totals[key] += weights?.[key] ?? 0 })
    return totals
  }, Object.fromEntries(keys.map((key) => [key, 0])) as Record<T, number>)
}

function normalize<T extends string>(scores: Record<T, number>, keys: T[]): Record<T, number> {
  const total = keys.reduce((sum, key) => sum + scores[key], 0)
  const equalShare = 100 / keys.length
  return Object.fromEntries(keys.map((key) => [key, total > 0 ? (scores[key] / total) * 100 : equalShare])) as Record<T, number>
}

function tiedLeaders<T extends string>(scores: Record<T, number>, keys: T[]): T[] {
  const highest = Math.max(...keys.map((key) => scores[key]))
  return keys.filter((key) => Math.abs(scores[key] - highest) < 1e-9)
}

function resolveSeasonTie(candidates: Season[], answers: AnswerOption[]): Season {
  for (const answer of [...answers].reverse()) {
    const weights = answer.seasonWeights
    if (!weights) continue
    const highestRecentWeight = Math.max(...candidates.map((season) => weights[season] ?? 0))
    const recentLeaders = candidates.filter((season) => (weights[season] ?? 0) === highestRecentWeight)
    if (recentLeaders.length === 1) return recentLeaders[0]
  }
  return candidates[0]
}

function resolvePhaseTie(candidates: Phase[], answers: AnswerOption[]): Phase {
  const latestPhaseWeights = [...answers].reverse().find((answer) => answer.phaseWeights)?.phaseWeights
  if (latestPhaseWeights) {
    const early = latestPhaseWeights.early ?? 0
    const mid = latestPhaseWeights.mid ?? 0
    const late = latestPhaseWeights.late ?? 0
    if (early > mid && early > late && candidates.includes('early')) return 'early'
    if (late > mid && late > early && candidates.includes('late')) return 'late'
  }
  if (candidates.includes('mid')) return 'mid'
  return candidates[0]
}

export function calculateResult(answers: AnswerOption[], results: ResultData[]): CalculationResult {
  const seasonScores = sumWeights(answers, seasons, 'seasonWeights')
  const phaseScores = sumWeights(answers, phases, 'phaseWeights')
  const seasonCandidates = tiedLeaders(seasonScores, seasons)
  const phaseCandidates = tiedLeaders(phaseScores, phases)
  const season = seasonCandidates.length === 1 ? seasonCandidates[0] : resolveSeasonTie(seasonCandidates, answers)
  const phase = phaseCandidates.length === 1 ? phaseCandidates[0] : resolvePhaseTie(phaseCandidates, answers)
  const result = results.find((item) => item.season === season && item.phase === phase)

  if (!result) throw new Error(`결과 유형을 찾을 수 없습니다: ${season}/${phase}`)

  return {
    result,
    season,
    phase,
    seasonPercentages: normalize(seasonScores, seasons),
    phasePercentages: normalize(phaseScores, phases),
  }
}
