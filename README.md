# sangjo (Noble Path 정적 사이트)

Vite 기반의 **정적 멀티 페이지 사이트(MPA)** 입니다. 루트에 있는 여러 `*.html` 파일이 각각 페이지 엔트리이며, 공통 동작은 루트 `main.js`에서 처리합니다.

## 실행 방법

### 요구 사항
- Node.js: **^20.19.0 또는 >=22.12.0** (현재 의존성인 Vite 7.x 요구)

### 설치
```bash
npm install
```

### 개발 서버
```bash
npm run dev
```

### 빌드 / 프리뷰
```bash
npm run build
npm run preview
```

## 페이지 구성

루트 HTML 파일이 곧 페이지입니다.

- `index.html`: 메인
- `about.html`: 회사소개
- `products.html`: 상품소개
- `counseling.html`: 장지상담
- `reviews.html`: 장례후기
- `support.html`: 고객센터

모든 페이지는 공통으로 아래를 로드합니다.
- 스타일: `./style.css`
- 스크립트: `<script type="module" src="/main.js"></script>`

## 주요 파일/디렉터리

- `main.js`: 헤더 스크롤 효과 + 현재 경로 기반 네비게이션 active 처리
- `style.css`: 전역 스타일/컴포넌트 스타일(헤더/섹션/카드/그리드 등)
- `public/`: 정적 자원(이미지 등). HTML/CSS에서 `/bg-hero.png` 처럼 **절대 경로**로 참조

## 참고: `src/` 디렉터리

`src/`는 Vite 기본 템플릿 산출물(예: `src/main.js`, `src/counter.js`)로 보이며, 현재 루트의 HTML들에서 로드되지 않습니다.

- 실제 동작 수정은 **루트 `main.js` / `style.css` / 루트 `*.html`**을 기준으로 진행하세요.


