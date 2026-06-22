# HanokBuilder — 사용자 가이드

한국 전통 건축 3D 제작 도구 **HanokBuilder**의 공식 사용자 가이드 사이트입니다.  
설치 없이 브라우저에서 바로 확인할 수 있습니다.

**Guide** · https://chunbae-a.github.io/HanokBuilder-guide/  
**App** · https://chunbae-a.github.io/Unity-3D_Korean_Traditional_Architecture/

---

## 소개

HanokBuilder는 국가 문화공공데이터 기반 에셋으로 한옥 공간을 3D로 조립·편집하는 인터랙티브 제작 도구입니다.  
이 레포지토리는 해당 도구의 공식 사용자 가이드 웹 사이트 소스입니다.

---

## 가이드 목차

| 섹션 | 내용 |
|------|------|
| 개요 | 기능 카드, 스펙, 활용 대상 |
| 바로 체험하기 | WebGL 앱 임베드 |
| 화면 구성 | 7개 영역 어노테이션 설명 |
| 시작 흐름 | 처음 시작하는 5단계 |
| 배경 프리셋 | 한옥 마당 / 저녁노을 / 밤 / 자연 4가지 |
| 에셋 라이브러리 | 카테고리 구조, 검색 방법 |
| 카메라 조작 | 마우스, 키보드, Numpad 시점 |
| 편집 도구 | 이동 / 회전 / 크기 / 삭제 + 단축키 |
| 부재 정보 패널 | 위치·회전·크기 수치 조정 |
| AI 기능 | 에셋 추천 / [맵] 자동 레이아웃 / [씬] 자연어 씬 편집 |
| 문화재 해설 | 건물 클릭 시 Claude 해설 생성 |
| 캡처 | PNG 저장 방법 |
| 단축키 전체 | 편집 / 카메라 / 뷰 전환 탭 |
| 문제 해결 | 자주 묻는 질문 10가지 |
| 문화데이터 출처 | 한국문화정보원 공개 데이터 |

---

## 기술 스택

- 정적 HTML / CSS / JavaScript (프레임워크 미사용)
- Vercel 배포 (main 브랜치 push 시 자동 배포)
- 다크 모드 지원, 반응형 레이아웃 (모바일 대응)

---

## 로컬 실행

별도 빌드 없이 바로 열 수 있습니다.

```bash
git clone https://github.com/Chunbae-A/HanokBuilder-guide.git
cd HanokBuilder-guide
# index.html을 브라우저에서 직접 열거나, 로컬 서버 사용
npx serve .
```

---

## 관련 레포지토리

| 레포 | 설명 |
|------|------|
| [Unity-3D_Korean_Traditional_Architecture](https://github.com/Chunbae-A/Unity-3D_Korean_Traditional_Architecture) | HanokBuilder Unity 앱 소스 |

---

## 데이터 출처

에셋 라이브러리는 [문화포털 메타버스데이터랩](https://www.culture.go.kr)이 공개한 한국문화정보원의 3D 문화공공데이터를 원천으로 합니다.
