# 계절의 아이들

나를 닮은 달과 계절을 발견하는 12유형 심리테스트 정적 웹앱입니다. 모든 질문 계산, 결과 표시, 공유 이미지 생성은 브라우저 안에서 동작하며 외부 서버나 API를 사용하지 않습니다.

## 로컬 실행 및 점검

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run build` 결과물은 `dist/`에 생성됩니다. 모바일과 PC 레이아웃은 브라우저 개발자 도구에서 각각 9:16 및 16:9 화면으로 확인할 수 있습니다.

## GitHub Pages 배포

이 저장소 이름이 `season`이면 현재 `vite.config.ts`의 `base: '/season/'` 설정을 그대로 사용할 수 있습니다. 저장소 이름이 다르면 해당 파일의 주석 안내에 따라 `base`를 `'/저장소명/'`으로 변경하세요. `username.github.io` 사용자 페이지 저장소라면 `/`를 사용합니다.

1. 로컬 저장소에 배포 대상 GitHub 저장소가 `origin` 원격으로 연결되어 있는지 확인합니다.
2. GitHub 저장소의 **Settings → Pages → Build and deployment**에서 배포 소스를 `Deploy from a branch`로 설정합니다.
3. 아래 명령으로 빌드 결과인 `dist/`를 `gh-pages` 브랜치에 배포합니다.

```bash
npm run deploy
```

`npm run deploy` 실행 시 `predeploy`가 먼저 `npm run build`를 실행합니다. 배포 후 Pages 설정에서 `gh-pages` 브랜치의 `/ (root)`를 선택합니다.

## 배포 구성

- Vite 정적 빌드 출력: `dist/`
- 배포 브랜치: `gh-pages`
- 배포 도구: `gh-pages`
- SPA 라우터: 사용하지 않음
- 외부 서버/API/이미지: 사용하지 않음
- 결과 이미지: 브라우저에서 `html2canvas`로 1080×1080 PNG 생성
