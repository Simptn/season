import { motion } from 'framer-motion'
import { AutumnIcon, SpringIcon, SummerIcon, WinterIcon } from './icons/SeasonIcons'

const seasons = [
  { label: '봄', Icon: SpringIcon }, { label: '여름', Icon: SummerIcon },
  { label: '가을', Icon: AutumnIcon }, { label: '겨울', Icon: WinterIcon },
]

export function LoadingScreen() {
  return <motion.section className="screen loading-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="loading-book"><span className="binding"/><div className="season-parade">{seasons.map(({ label, Icon }, index) => <motion.div key={label} className={`parade-season season-${index}`} initial={{ opacity: 0, x: 35, scale: .8 }} animate={{ opacity: [0, 1, 1, 0], x: [35, 0, 0, -35], scale: [.8, 1, 1, .9] }} transition={{ duration: 1.7, delay: index * .38, repeat: Infinity, repeatDelay: .1 }}><Icon size={76}/><span>{label}</span></motion.div>)}</div></div>
    <p className="loading-kicker">마음의 달력을 넘기는 중</p><h2>당신의 계절을<br/>찾고 있어요</h2><p>열네 개의 장면을 천천히 모아보고 있어요.</p>
    <div className="loading-dots"><i/><i/><i/></div>
  </motion.section>
}
