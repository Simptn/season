import { motion } from 'framer-motion'
import type { AnswerOption, Question } from '../constants/questions'
import { ArrowIcon, LeafIcon } from './icons/SeasonIcons'

interface Props { question: Question; current: number; total: number; onAnswer: (answer: AnswerOption) => void }
export function QuestionCard({ question, current, total, onAnswer }: Props) {
  return <motion.section className="screen question-screen" key={question.id} initial={{ opacity: 0, x: 54, rotate: 1.8 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: -54, rotate: -1.8 }} transition={{ duration: .46, ease: [0.22, 1, 0.36, 1] }}>
    <header className="question-header"><div className="mini-brand"><LeafIcon size={25}/> 계절의 아이들</div><span>{String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></header>
    <div className="progress"><motion.div initial={{ width: 0 }} animate={{ width: `${((current + 1) / total) * 100}%` }}/></div>
    <div className="question-copy"><p>QUESTION {String(current + 1).padStart(2, '0')}</p><h2>{question.question}</h2><span>{question.hint}</span></div>
    <div className="options">{question.options.map((option, index) => <motion.button key={option.text} onClick={() => onAnswer(option)} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} whileTap={{ scale: .98 }}>
      <b>{String.fromCharCode(65 + index)}</b><span>{option.text}</span><ArrowIcon />
    </motion.button>)}</div>
  </motion.section>
}
