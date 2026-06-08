import type { Phase, Season } from './results'

export type SeasonWeights = Partial<Record<Season, number>>
export type PhaseWeights = Partial<Record<Phase, number>>

export interface AnswerOption {
  text: string
  seasonWeights?: SeasonWeights
  phaseWeights?: PhaseWeights
}

export interface Question {
  id: number
  question: string
  hint: string
  options: AnswerOption[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: '갑자기 비어 있는 주말이 생겼다.',
    hint: '가장 자연스럽게 떠오르는 모습을 골라주세요.',
    options: [
      { text: '평소 저장해둔 전시나 카페를 찾아본다', seasonWeights: { spring: 1.6, summer: 0.2, autumn: 0.4, winter: 0 } },
      { text: '몸을 움직일 수 있는 약속을 잡는다', seasonWeights: { spring: 0.3, summer: 1.7, autumn: 0, winter: 0 } },
      { text: '밀린 책이나 영상을 차분히 본다', seasonWeights: { spring: 0.1, summer: 0, autumn: 1.6, winter: 0.4 } },
      { text: '아무 일정도 넣지 않고 혼자 쉰다', seasonWeights: { spring: 0, summer: 0, autumn: 0.4, winter: 1.6 } },
    ],
  },
  {
    id: 2,
    question: '친구가 새 프로젝트를 같이 해보자고 한다.',
    hint: '처음 들었을 때의 반응을 떠올려보세요.',
    options: [
      { text: '어떤 식으로 재밌게 만들 수 있을지 상상한다', seasonWeights: { spring: 1.7, summer: 0.3, autumn: 0.2, winter: 0 } },
      { text: '역할만 정해지면 바로 시작할 수 있다', seasonWeights: { spring: 0.1, summer: 1.7, autumn: 0.2, winter: 0 } },
      { text: '왜 이걸 해야 하는지 먼저 이해하고 싶다', seasonWeights: { spring: 0, summer: 0.1, autumn: 1.7, winter: 0.3 } },
      { text: '내 시간과 에너지를 얼마나 써야 할지 따져본다', seasonWeights: { spring: 0, summer: 0.1, autumn: 0.4, winter: 1.6 } },
    ],
  },
  {
    id: 3,
    question: '단체 대화방에서 의견이 갈린다.',
    hint: '평소의 대화 방식을 떠올려보세요.',
    options: [
      { text: '서로 기분 상하지 않게 다른 가능성을 제안한다', seasonWeights: { spring: 1.6, summer: 0.1, autumn: 0.3, winter: 0 } },
      { text: '오래 끌지 않게 하나로 정리해서 밀고 간다', seasonWeights: { spring: 0, summer: 1.7, autumn: 0.2, winter: 0.1 } },
      { text: '각 의견의 장단점을 비교해본다', seasonWeights: { spring: 0.1, summer: 0.1, autumn: 1.7, winter: 0.2 } },
      { text: '굳이 끼어들기보다 상황을 지켜본다', seasonWeights: { spring: 0, summer: 0, autumn: 0.5, winter: 1.5 } },
    ],
  },
  {
    id: 4,
    question: '처음 보는 장소에 갔을 때 나는?',
    hint: '가장 먼저 하는 행동을 골라주세요.',
    options: [
      { text: '작은 디테일이나 분위기에 쉽게 끌린다', seasonWeights: { spring: 1.5, summer: 0.1, autumn: 0.5, winter: 0 } },
      { text: '어디가 제일 재미있는지 바로 움직여본다', seasonWeights: { spring: 0.2, summer: 1.7, autumn: 0, winter: 0 } },
      { text: '구조나 동선을 파악하는 편이다', seasonWeights: { spring: 0, summer: 0.1, autumn: 1.6, winter: 0.4 } },
      { text: '가장 편하게 머물 수 있는 자리를 찾는다', seasonWeights: { spring: 0.1, summer: 0, autumn: 0.3, winter: 1.6 } },
    ],
  },
  {
    id: 5,
    question: '누군가 고민을 털어놓았다.',
    hint: '그 사람 곁에 있는 나를 떠올려보세요.',
    options: [
      { text: '먼저 마음을 풀어주고 싶다', seasonWeights: { spring: 1.7, summer: 0, autumn: 0.2, winter: 0.2 } },
      { text: '뭘 하면 나아질지 같이 정리해준다', seasonWeights: { spring: 0.3, summer: 1.3, autumn: 0.5, winter: 0 } },
      { text: '왜 그런 일이 생겼는지 차근차근 들어본다', seasonWeights: { spring: 0.2, summer: 0, autumn: 1.5, winter: 0.4 } },
      { text: '섣불리 말하기보다 조용히 곁에 있어준다', seasonWeights: { spring: 0.4, summer: 0, autumn: 0.3, winter: 1.4 } },
    ],
  },
  {
    id: 6,
    question: '일이 예상보다 꼬였다.',
    hint: '가장 먼저 드는 생각을 골라주세요.',
    options: [
      { text: '다른 방식으로 바꿔보면 된다고 생각한다', seasonWeights: { spring: 1.6, summer: 0.4, autumn: 0.1, winter: 0 } },
      { text: '멈추기보다 일단 수습부터 한다', seasonWeights: { spring: 0.1, summer: 1.7, autumn: 0.1, winter: 0.1 } },
      { text: '어디서 문제가 생겼는지 되짚는다', seasonWeights: { spring: 0, summer: 0.1, autumn: 1.7, winter: 0.3 } },
      { text: '더 커지기 전에 손실을 줄인다', seasonWeights: { spring: 0, summer: 0.2, autumn: 0.4, winter: 1.5 } },
    ],
  },
  {
    id: 7,
    question: '사람들이 나를 잘 모를 때 오해하는 모습은?',
    hint: '종종 들어본 말과 가까운 것을 골라주세요.',
    options: [
      { text: '너무 좋게만 보는 사람처럼 보인다', seasonWeights: { spring: 1.6, summer: 0, autumn: 0.1, winter: 0 } },
      { text: '성급하거나 세 보인다는 말을 듣는다', seasonWeights: { spring: 0, summer: 1.7, autumn: 0, winter: 0.1 } },
      { text: '따지는 것처럼 보일 때가 있다', seasonWeights: { spring: 0, summer: 0.1, autumn: 1.6, winter: 0.2 } },
      { text: '관심이 없는 사람처럼 보일 때가 있다', seasonWeights: { spring: 0, summer: 0, autumn: 0.4, winter: 1.6 } },
    ],
  },
  {
    id: 8,
    question: '어떤 하루가 가장 만족스러운가?',
    hint: '기분 좋게 하루를 마치는 장면을 골라주세요.',
    options: [
      { text: '뜻밖의 발견이나 좋은 대화가 있었던 하루', seasonWeights: { spring: 1.7, summer: 0.1, autumn: 0.3, winter: 0 } },
      { text: '뭔가 확실히 해낸 하루', seasonWeights: { spring: 0.1, summer: 1.7, autumn: 0.2, winter: 0 } },
      { text: '모르던 것을 이해하게 된 하루', seasonWeights: { spring: 0.1, summer: 0, autumn: 1.7, winter: 0.2 } },
      { text: '나만의 리듬을 지킨 하루', seasonWeights: { spring: 0, summer: 0, autumn: 0.3, winter: 1.7 } },
    ],
  },
  {
    id: 9,
    question: '새로운 일을 시작할 때 나는?',
    hint: '익숙하지 않은 일을 만났을 때를 떠올려보세요.',
    options: [
      { text: '아직 잘 몰라도 해보면서 배운다', phaseWeights: { early: 1.7, mid: 0.2, late: 0 } },
      { text: '어느 정도 준비되면 안정적으로 한다', phaseWeights: { early: 0.2, mid: 1.6, late: 0.2 } },
      { text: '예전 경험을 떠올리며 신중하게 접근한다', phaseWeights: { early: 0, mid: 0.3, late: 1.7 } },
    ],
  },
  {
    id: 10,
    question: '누군가 내게 조언을 구하면?',
    hint: '자주 건네는 말과 가까운 것을 골라주세요.',
    options: [
      { text: '일단 해봐도 괜찮다고 말하는 편이다', phaseWeights: { early: 1.6, mid: 0.3, late: 0 } },
      { text: '지금 상황에서 가장 현실적인 방법을 말한다', phaseWeights: { early: 0.1, mid: 1.7, late: 0.3 } },
      { text: '비슷한 경험에서 얻은 교훈을 말한다', phaseWeights: { early: 0, mid: 0.3, late: 1.7 } },
    ],
  },
  {
    id: 11,
    question: '내 삶의 분위기를 고른다면?',
    hint: '지금 가장 마음이 가는 장면을 골라주세요.',
    options: [
      { text: '아직 열리는 중인 문', phaseWeights: { early: 1.7, mid: 0.1, late: 0 } },
      { text: '가장 선명한 한낮', phaseWeights: { early: 0.1, mid: 1.7, late: 0.1 } },
      { text: '해가 기운 뒤 남는 빛', phaseWeights: { early: 0, mid: 0.2, late: 1.7 } },
    ],
  },
  {
    id: 12,
    question: '실패한 일을 다시 볼 때 나는?',
    hint: '시간이 조금 지난 뒤의 마음을 떠올려보세요.',
    options: [
      { text: '그래도 시도한 게 의미 있었다고 본다', phaseWeights: { early: 1.6, mid: 0.2, late: 0.2 } },
      { text: '다음에는 더 잘할 방법을 찾는다', phaseWeights: { early: 0.2, mid: 1.6, late: 0.3 } },
      { text: '그 일이 나를 어떻게 바꿨는지 생각한다', phaseWeights: { early: 0, mid: 0.3, late: 1.7 } },
    ],
  },
  {
    id: 13,
    question: '사람들이 나에게 기대하는 역할은?',
    hint: '여럿이 함께 있을 때의 나를 떠올려보세요.',
    options: [
      { text: '분위기를 열어주는 사람', phaseWeights: { early: 1.5, mid: 0.3, late: 0 } },
      { text: '중심을 잡아주는 사람', phaseWeights: { early: 0.1, mid: 1.7, late: 0.2 } },
      { text: '정리하고 의미를 남기는 사람', phaseWeights: { early: 0, mid: 0.3, late: 1.7 } },
    ],
  },
  {
    id: 14,
    question: '가장 오래 남는 것은?',
    hint: '마지막 질문이에요. 가장 마음이 가는 것을 골라주세요.',
    options: [
      { text: '시작할 때의 설렘', phaseWeights: { early: 1.7, mid: 0.2, late: 0 } },
      { text: '해내는 과정의 감각', phaseWeights: { early: 0.2, mid: 1.7, late: 0.1 } },
      { text: '지나고 나서 알게 된 의미', phaseWeights: { early: 0, mid: 0.2, late: 1.7 } },
    ],
  },
]
