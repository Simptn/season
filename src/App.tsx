import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Intro } from './components/Intro'
import { QuestionCard } from './components/QuestionCard'
import { LoadingScreen } from './components/LoadingScreen'
import { ResultScreen } from './components/ResultScreen'
import { questions, type AnswerOption } from './constants/questions'
import { results } from './constants/results'
import { calculateResult, type CalculationResult } from './utils/calculateResult'

type Stage = 'intro' | 'question' | 'loading' | 'result'

export default function App() {
  const [stage, setStage] = useState<Stage>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<AnswerOption[]>([])
  const [calculation, setCalculation] = useState<CalculationResult | null>(null)

  const answer = (option: AnswerOption) => {
    const nextAnswers = [...answers, option]
    setAnswers(nextAnswers)
    if (current < questions.length - 1) setCurrent(current + 1)
    else {
      setCalculation(calculateResult(nextAnswers, results))
      setStage('loading')
      window.setTimeout(() => setStage('result'), 1900)
    }
  }

  const restart = () => {
    setStage('intro')
    setCurrent(0)
    setAnswers([])
    setCalculation(null)
  }

  return <main className="app-shell"><AnimatePresence mode="wait">
    {stage === 'intro' && <Intro key="intro" onStart={() => setStage('question')}/>}
    {stage === 'question' && <QuestionCard key={`q-${current}`} question={questions[current]} current={current} total={questions.length} onAnswer={answer}/>}
    {stage === 'loading' && <LoadingScreen key="loading"/>}
    {stage === 'result' && calculation && <ResultScreen key="result" calculation={calculation} onRestart={restart}/>}
  </AnimatePresence></main>
}
