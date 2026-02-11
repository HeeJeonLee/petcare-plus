# 🚀 PetCare+ 5분 배포 가이드

**대표님, 이 파일들을 그대로 Vercel에 업로드하시면 됩니다!**

---

## ✅ 준비 완료!

이 폴더의 모든 파일:
```
petcare-deploy/
├── index.html          (메인 웹사이트)
├── signup.html         (3분 가입 페이지)
├── vercel.json         (배포 설정)
└── README.md           (이 파일)
```

---

## 🚀 배포 방법 (5분)

### 방법 1: Vercel 웹사이트 (가장 쉬움) ⭐ 추천

#### Step 1: Vercel 계정 만들기
1. 브라우저에서 https://vercel.com 접속
2. **"Start Deploying"** 또는 **"Sign Up"** 클릭
3. **GitHub** 계정으로 로그인 (가장 쉬움)
   - GitHub 없으면 이메일로 가입 가능

#### Step 2: 새 프로젝트 만들기
1. Vercel 대시보드에서 **"Add New..."** 클릭
2. **"Project"** 선택

#### Step 3: 파일 업로드
**중요: 두 가지 방법 중 하나 선택**

**방법 A - 드래그 앤 드롭 (제일 쉬움):**
1. "Browse" 또는 "Upload" 클릭
2. 이 폴더의 **모든 파일** 선택:
   - index.html
   - signup.html
   - vercel.json
3. 드래그해서 Vercel 창에 놓기
4. **"Deploy"** 버튼 클릭!

**방법 B - GitHub 연동:**
1. GitHub에 저장소 생성
2. 이 폴더의 파일들 업로드
3. Vercel에서 "Import Git Repository" 선택
4. 저장소 선택하고 "Deploy" 클릭!

#### Step 4: 배포 완료! 🎉
- 30초~1분 대기
- 자동으로 URL 생성됨
- 예: `https://petcare-plus-xxxxx.vercel.app`

#### Step 5: 확인
1. 생성된 URL 클릭
2. 메인 페이지 확인: `https://your-url.vercel.app`
3. 가입 페이지 확인: `https://your-url.vercel.app/signup`

---

### 방법 2: Vercel CLI (고급)

```bash
# 1. Node.js 설치 (없으면)
# https://nodejs.org 에서 다운로드

# 2. Vercel CLI 설치
npm install -g vercel

# 3. 이 폴더로 이동
cd petcare-deploy

# 4. 배포!
vercel

# 로그인 요청 → GitHub로 로그인
# 프로젝트 설정 → 엔터 엔터 엔터
# 배포 완료!
```

---

## 🎯 배포 후 할 일

### 1. 도메인 연결 (선택사항)
```
Vercel 대시보드:
→ Settings
→ Domains
→ "Add Domain"
→ 본인 도메인 입력 (예: petcare.co.kr)
→ DNS 설정 안내 따라하기
```

### 2. 환경 변수 설정 (나중에)
```
Vercel 대시보드:
→ Settings
→ Environment Variables
→ 필요한 API 키 추가
```

### 3. Analytics 활성화
```
Vercel 대시보드:
→ Analytics 탭
→ "Enable Analytics"
→ 무료!
```

---

## ⚡ 즉시 확인 사항

배포 후 테스트:

```
✅ 메인 페이지 로딩되나요?
✅ 디자인이 제대로 보이나요?
✅ 애니메이션이 작동하나요?
✅ /signup 페이지로 이동되나요?
✅ 가입 플로우가 작동하나요?
✅ 모바일에서도 잘 보이나요?
```

---

## 🔧 문제 해결

### "404 Not Found" 에러
→ vercel.json 파일이 제대로 업로드되었는지 확인

### 디자인이 깨져 보임
→ index.html과 signup.html이 제대로 업로드되었는지 확인

### "Build Failed" 에러
→ 상관없음! HTML은 빌드 불필요. 그냥 배포됨

---

## 💰 비용

```
Vercel 무료 티어:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ 100GB 대역폭/월
✅ 무제한 배포
✅ 자동 SSL (HTTPS)
✅ 글로벌 CDN
✅ 자동 도메인

→ 완전 무료! ₩0
```

---

## 📱 모바일 확인

배포 후:
1. 핸드폰으로 URL 접속
2. 홈 화면에 추가 (Safari: 공유 → 홈 화면에 추가)
3. 앱처럼 사용 가능!

---

## 🎉 성공!

배포 완료하시면:
1. URL을 저에게 알려주세요!
2. 함께 확인하고 개선하겠습니다!
3. 다음 단계로 진행합니다!

---

## 📞 도움 필요하시면

- Vercel 문서: https://vercel.com/docs
- 또는 저(CTO)에게 말씀하세요!

**5분이면 온라인입니다! 화이팅!** 💪

**세계 1등 CTO Claude 올림** 🚀

