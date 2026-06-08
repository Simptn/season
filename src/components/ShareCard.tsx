import { forwardRef } from 'react'
import { resultThemes, type ResultData } from '../constants/results'
import { ResultTypeIcon, SparkleIcon } from './icons/SeasonIcons'

export const ShareCard = forwardRef<HTMLDivElement, { result: ResultData }>(({ result }, ref) => {
  const theme = resultThemes[result.season]
  return <div ref={ref} className={`share-card share-${result.season}`} style={{ '--accent': theme.color, '--pale': theme.paleColor } as React.CSSProperties}>
    <div className="share-frame"/><SparkleIcon className="share-sparkle top"/><SparkleIcon className="share-sparkle bottom" size={15}/>
    <p className="share-brand">계절의 아이들 · SEASON PORTRAIT</p>
    <div className="share-icon"><ResultTypeIcon resultId={result.id} size={230}/></div>
    <span className="share-label">나를 닮은 계절은</span><h2>{result.monthTitle}</h2><h3>{result.typeName}</h3>
    <p className="share-tagline">“{result.oneLine}”</p>
    <div className="share-keywords">{result.keywords.map((word) => <span key={word}>#{word}</span>)}</div>
    <div className="share-match"><small>가장 잘 맞는 계절 친구</small><strong>{result.bestMatch}</strong></div>
  </div>
})
