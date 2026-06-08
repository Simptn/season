import { motion } from 'framer-motion'
import { EarlySpringIcon, SparkleIcon } from './icons/SeasonIcons'

export function Intro({ onStart }: { onStart: () => void }) {
  return <motion.section className="screen intro-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -45, rotate: -1.5 }}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="intro-lines"/>
    <motion.div className="intro-calendar" initial={{ scale: .82, rotate: -5, y: 16 }} animate={{ scale: 1, rotate: -2, y: 0 }} transition={{ type: 'spring', duration: 1.1 }}>
      <div className="calendar-rings"><i/><i/><i/><i/></div><span className="calendar-month">MARCH · 어느 계절의 첫 장</span><EarlySpringIcon size={124}/><SparkleIcon className="art-sparkle one" size={18}/><SparkleIcon className="art-sparkle two" size={12}/>
    </motion.div>
    <div className="eyebrow"><span/> 12가지 계절 심리테스트 <span/></div>
    <h1>계절의<br/><em>아이들</em></h1>
    <p className="intro-copy">마음의 달력을 한 장씩 넘기며<br/>당신을 닮은 계절을 만나보세요.</p>
    <motion.button className="primary-button" onClick={onStart} whileTap={{ scale: .97 }} whileHover={{ y: -2 }}>첫 장 넘기기 <SparkleIcon size={15}/></motion.button>
    <p className="duration">약 3분 · 총 14문항</p>
  </motion.section>
}
