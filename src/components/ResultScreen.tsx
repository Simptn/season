import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { resultThemes, type Season } from '../constants/results'
import { seasons, type CalculationResult } from '../utils/calculateResult'
import { downloadImage } from '../utils/downloadImage'
import { DownloadIcon, RestartIcon, ResultTypeIcon, ShareIcon, SparkleIcon } from './icons/SeasonIcons'
import { ShareCard } from './ShareCard'

const seasonMeta: Record<Season, { label: string; color: string }> = {
  spring: { label: '봄', color: '#a6bd7d' }, summer: { label: '여름', color: '#e1ad52' }, autumn: { label: '가을', color: '#b47b58' }, winter: { label: '겨울', color: '#8298ad' },
}

function FloatingDecorations({ season }: { season: Season }) {
  return <div className={`floating-decor decor-${season}`} aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <i key={index} style={{ '--i': index } as React.CSSProperties}/>)}</div>
}

export function ResultScreen({ calculation, onRestart }: { calculation: CalculationResult; onRestart: () => void }) {
  const { result, seasonPercentages } = calculation
  const theme = resultThemes[result.season]
  const cardRef = useRef<HTMLDivElement>(null)
  const [saving, setSaving] = useState(false)
  const [shared, setShared] = useState(false)
  const save = async () => {
    if (!cardRef.current || saving) return
    setSaving(true)
    try { await downloadImage(cardRef.current, `${result.monthTitle}-${result.typeName}.png`) }
    finally { setSaving(false) }
  }
  const share = async () => {
    const data = { title: `계절의 아이들 · ${result.typeName}`, text: `${result.monthTitle} — ${result.typeName}\n${result.oneLine}`, url: window.location.href }
    try {
      if (navigator.share) await navigator.share(data)
      else await navigator.clipboard.writeText(`${data.text}\n${data.url}`)
      setShared(true)
      window.setTimeout(() => setShared(false), 1800)
    } catch (error) {
      if ((error as Error).name !== 'AbortError') console.error('결과 공유에 실패했습니다.', error)
    }
  }

  return <motion.section className={`screen result-screen result-${result.season}`} style={{ '--accent': theme.color, '--pale': theme.paleColor } as React.CSSProperties} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <FloatingDecorations season={result.season}/>
    <div className="result-layout">
      <aside className="result-portrait">
        <p className="result-kicker"><SparkleIcon size={13}/> 당신을 닮은 계절을 찾았어요</p>
        <motion.div className="result-icon" initial={{ scale: .55, rotate: -12 }} animate={{ scale: 1, rotate: 0, y: [0, -5, 0] }} transition={{ scale: { type: 'spring', duration: .9 }, rotate: { duration: .7 }, y: { duration: 4, repeat: Infinity } }}><ResultTypeIcon resultId={result.id} size={150}/></motion.div>
        <p className="result-month">{result.monthTitle}</p><h1>{result.typeName}</h1><h2>“{result.oneLine}”</h2>
        <div className="result-keywords">{result.keywords.map((word) => <span key={word}>#{word}</span>)}</div>
        <p className="result-description">{result.description}</p>
      </aside>

      <div className="result-details">
        <div className="trait-grid">
          <section className="trait-card"><h3><span>+</span> 빛나는 강점</h3><ul>{result.strengths.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="trait-card shadow-card"><h3><span>−</span> 마음의 그림자</h3><ul>{result.shadows.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
        <section className="season-mix"><div className="detail-heading"><h3>당신 안의 계절</h3><span>마음을 이루는 네 가지 빛</span></div><div className="season-bars">{seasons.map((season, index) => <div className="season-bar-row" key={season}><span>{seasonMeta[season].label}</span><div className="season-bar-track"><motion.div initial={{ width: 0 }} animate={{ width: `${seasonPercentages[season]}%` }} transition={{ delay: .2 + index * .08, duration: .8 }} style={{ backgroundColor: seasonMeta[season].color }}/></div><small>{Math.round(seasonPercentages[season])}%</small></div>)}</div></section>
        <section className="relationship-section"><div className="detail-heading"><h3>계절 사이의 관계</h3><span>서로의 온도를 이해하는 법</span></div><div className="match-pair"><div><small>대표 궁합</small><strong>{result.bestMatch}</strong></div><div><small>조금 어려운 유형</small><strong>{result.worstMatch}</strong></div></div><div className="role-matches"><div><small>좋은 상사</small><strong>{result.goodBoss}</strong></div><div><small>좋은 아래직원</small><strong>{result.goodSubordinate}</strong></div><div><small>좋은 연인</small><strong>{result.goodLover}</strong></div></div></section>
        <div className="result-actions"><button className="primary-button" onClick={save}><DownloadIcon/>{saving ? '만드는 중...' : '이미지 저장'}</button><button className="secondary-button" onClick={share}><ShareIcon/>{shared ? '링크 복사됨' : '공유하기'}</button><button className="text-button" onClick={onRestart}><RestartIcon/> 다시하기</button></div>
      </div>
    </div><div className="offscreen-card"><ShareCard result={result} ref={cardRef}/></div>
  </motion.section>
}
