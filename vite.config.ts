import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 프로젝트 저장소 이름에 맞게 '/저장소명/'으로 변경하세요. 사용자 페이지라면 '/'를 사용합니다.
  base: '/season/',
})
