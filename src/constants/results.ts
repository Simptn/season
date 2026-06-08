export type Season = 'spring' | 'summer' | 'autumn' | 'winter'
export type Phase = 'early' | 'mid' | 'late'
export type ResultId = 'earlySpring' | 'spring' | 'lateSpring' | 'earlySummer' | 'summer' | 'lateSummer' | 'earlyAutumn' | 'autumn' | 'lateAutumn' | 'earlyWinter' | 'winter' | 'lateWinter'

export interface ResultData {
  id: ResultId
  monthTitle: string
  typeName: string
  season: Season
  phase: Phase
  oneLine: string
  keywords: string[]
  description: string
  strengths: string[]
  shadows: string[]
  bestMatch: string
  worstMatch: string
  goodBoss: string
  goodSubordinate: string
  goodLover: string
}

export const resultThemes: Record<Season, { color: string; paleColor: string }> = {
  spring: { color: '#83a66f', paleColor: '#edf3e3' },
  summer: { color: '#d69846', paleColor: '#fbf0d8' },
  autumn: { color: '#9b7058', paleColor: '#f0e6dc' },
  winter: { color: '#788f9f', paleColor: '#e8edf4' },
}

export const results: ResultData[] = [
  {
    id: 'earlySpring', monthTitle: '3월의 아이', typeName: '초봄형', season: 'spring', phase: 'early',
    oneLine: '아직 피지 않은 가능성을 가장 먼저 발견하는 사람', keywords: ['호기심', '순수함', '성장'],
    description: '당신은 새로운 가능성에 가장 먼저 반응하는 사람입니다. 아직 완성되지 않은 것에서도 희망을 보고, 작은 변화에서도 설렘을 발견합니다.',
    strengths: ['창의적이다', '사람에게 관심이 많다', '새로운 시도를 두려워하지 않는다'], shadows: ['쉽게 질릴 수 있다', '현실적인 마무리가 약할 수 있다'],
    bestMatch: '늦가을형', worstMatch: '늦겨울형', goodBoss: '늦봄형', goodSubordinate: '가을형', goodLover: '여름형',
  },
  {
    id: 'spring', monthTitle: '4월의 아이', typeName: '봄형', season: 'spring', phase: 'mid',
    oneLine: '사람과 아이디어를 자라게 하는 따뜻한 성장형', keywords: ['창의성', '친절', '성장'],
    description: '당신은 주변을 부드럽게 밝히고, 사람과 아이디어가 자라날 수 있게 돕는 사람입니다.',
    strengths: ['다정하다', '분위기를 부드럽게 만든다', '가능성을 잘 본다'], shadows: ['거절을 어려워할 수 있다', '감정적으로 흔들릴 수 있다'],
    bestMatch: '가을형', worstMatch: '겨울형', goodBoss: '늦봄형', goodSubordinate: '초여름형', goodLover: '가을형',
  },
  {
    id: 'lateSpring', monthTitle: '5월의 아이', typeName: '늦봄형', season: 'spring', phase: 'late',
    oneLine: '다정함을 오래 지속시키는 성숙한 돌봄형', keywords: ['보살핌', '성숙', '온기'],
    description: '당신은 단순히 따뜻한 사람이 아니라, 누군가가 실제로 성장할 수 있도록 오래 곁을 지키는 사람입니다.',
    strengths: ['사람을 잘 키운다', '신뢰를 준다', '꾸준히 돌본다'], shadows: ['과보호할 수 있다', '자기희생이 과해질 수 있다'],
    bestMatch: '초가을형', worstMatch: '초겨울형', goodBoss: '늦가을형', goodSubordinate: '초봄형', goodLover: '늦여름형',
  },
  {
    id: 'earlySummer', monthTitle: '6월의 아이', typeName: '초여름형', season: 'summer', phase: 'early',
    oneLine: '뜨거워지기 직전의 도전가', keywords: ['패기', '도전', '에너지'],
    description: '당신은 아직 완전히 폭발하지 않은 뜨거운 에너지를 품고 있습니다. 가능성이 보이면 직접 부딪혀 확인하려 합니다.',
    strengths: ['행동이 빠르다', '도전적이다', '분위기를 끌어올린다'], shadows: ['충동적일 수 있다', '주변 속도를 놓칠 수 있다'],
    bestMatch: '늦겨울형', worstMatch: '늦가을형', goodBoss: '늦여름형', goodSubordinate: '봄형', goodLover: '초봄형',
  },
  {
    id: 'summer', monthTitle: '7월의 아이', typeName: '여름형', season: 'summer', phase: 'mid',
    oneLine: '강렬한 에너지로 세상을 밀고 나가는 사람', keywords: ['추진력', '자신감', '실행'],
    description: '당신은 생각보다 행동이 빠른 사람입니다. 망설임보다 실행을 선택하고, 정체된 분위기에 불을 붙입니다.',
    strengths: ['추진력이 강하다', '리더십이 있다', '결과를 만든다'], shadows: ['성급할 수 있다', '타인의 감정을 놓칠 수 있다'],
    bestMatch: '겨울형', worstMatch: '가을형', goodBoss: '늦여름형', goodSubordinate: '초봄형', goodLover: '봄형',
  },
  {
    id: 'lateSummer', monthTitle: '8월의 아이', typeName: '늦여름형', season: 'summer', phase: 'late',
    oneLine: '열정을 성과로 바꾸는 완숙한 추진형', keywords: ['성과', '책임', '통솔'],
    description: '당신은 뜨거운 에너지를 단순한 열정으로 끝내지 않고 결과로 연결하는 사람입니다.',
    strengths: ['책임감이 강하다', '목표를 완수한다', '팀을 통솔한다'], shadows: ['완고해질 수 있다', '성과 중심적으로 보일 수 있다'],
    bestMatch: '초겨울형', worstMatch: '초가을형', goodBoss: '겨울형', goodSubordinate: '초여름형', goodLover: '늦봄형',
  },
  {
    id: 'earlyAutumn', monthTitle: '9월의 아이', typeName: '초가을형', season: 'autumn', phase: 'early',
    oneLine: '세상을 알고 싶어 하는 조용한 탐구자', keywords: ['탐구', '질문', '호기심'],
    description: '당신은 조용하지만 끊임없이 궁금해하는 사람입니다. 겉으로는 차분해 보여도 안에서는 수많은 질문이 자랍니다.',
    strengths: ['배움이 빠르다', '관찰력이 좋다', '다양한 관심사가 있다'], shadows: ['생각이 산만해질 수 있다', '실행이 늦어질 수 있다'],
    bestMatch: '늦봄형', worstMatch: '늦여름형', goodBoss: '가을형', goodSubordinate: '초봄형', goodLover: '늦봄형',
  },
  {
    id: 'autumn', monthTitle: '10월의 아이', typeName: '가을형', season: 'autumn', phase: 'mid',
    oneLine: '사색과 분석으로 본질을 찾아가는 사람', keywords: ['분석', '사색', '논리'],
    description: '당신은 쉽게 휩쓸리지 않고, 현상 뒤의 이유를 찾으려는 사람입니다.',
    strengths: ['분석적이다', '객관적이다', '깊이 생각한다'], shadows: ['차갑게 보일 수 있다', '행동이 느려질 수 있다'],
    bestMatch: '봄형', worstMatch: '여름형', goodBoss: '늦가을형', goodSubordinate: '초여름형', goodLover: '봄형',
  },
  {
    id: 'lateAutumn', monthTitle: '11월의 아이', typeName: '늦가을형', season: 'autumn', phase: 'late',
    oneLine: '지식을 통찰로 바꾸는 깊은 해석자', keywords: ['통찰', '철학', '내재화'],
    description: '당신은 단순히 많이 아는 사람이 아니라, 경험과 지식을 자기만의 시선으로 정리하는 사람입니다.',
    strengths: ['본질을 본다', '조언을 잘한다', '깊은 관점을 가진다'], shadows: ['관조에 머물 수 있다', '염세적으로 보일 수 있다'],
    bestMatch: '초봄형', worstMatch: '초여름형', goodBoss: '늦겨울형', goodSubordinate: '봄형', goodLover: '초봄형',
  },
  {
    id: 'earlyWinter', monthTitle: '12월의 아이', typeName: '초겨울형', season: 'winter', phase: 'early',
    oneLine: '조심스럽게 거리를 두며 자신을 지키는 사람', keywords: ['경계', '신중함', '자기보호'],
    description: '당신은 쉽게 마음을 열지 않지만, 그만큼 자신과 관계를 소중히 다루는 사람입니다.',
    strengths: ['신중하다', '실수가 적다', '위험을 잘 감지한다'], shadows: ['다가가기 어려워 보일 수 있다', '기회를 놓칠 수 있다'],
    bestMatch: '늦여름형', worstMatch: '늦봄형', goodBoss: '겨울형', goodSubordinate: '여름형', goodLover: '늦여름형',
  },
  {
    id: 'winter', monthTitle: '1월의 아이', typeName: '겨울형', season: 'winter', phase: 'mid',
    oneLine: '차분하고 냉정하게 중심을 지키는 사람', keywords: ['냉정함', '독립성', '안정'],
    description: '당신은 쉽게 흔들리지 않는 사람입니다. 감정보다 거리와 판단을 통해 자신을 지킵니다.',
    strengths: ['침착하다', '독립적이다', '판단력이 좋다'], shadows: ['차갑게 보일 수 있다', '소극적으로 보일 수 있다'],
    bestMatch: '여름형', worstMatch: '봄형', goodBoss: '늦겨울형', goodSubordinate: '초여름형', goodLover: '여름형',
  },
  {
    id: 'lateWinter', monthTitle: '2월의 아이', typeName: '늦겨울형', season: 'winter', phase: 'late',
    oneLine: '초연함과 성찰로 세상을 바라보는 사람', keywords: ['초연함', '성찰', '완숙함'],
    description: '당신은 많은 것을 쉽게 믿지 않지만, 그만큼 깊이 보고 오래 생각하는 사람입니다.',
    strengths: ['흔들리지 않는다', '깊이 성찰한다', '본질을 지킨다'], shadows: ['염세적으로 보일 수 있다', '관계에서 멀어질 수 있다'],
    bestMatch: '초여름형', worstMatch: '초봄형', goodBoss: '늦가을형', goodSubordinate: '여름형', goodLover: '초여름형',
  },
]
