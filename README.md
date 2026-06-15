# 한국 전통 건축 3D 체험 프로그램 가이드

`Chunbae-A/Unity-3D_Korean_Traditional_Architecture` 프로젝트의 사용자용 공식 문서 웹사이트입니다.
개발자용 API 문서가 아니라, 프로그램을 처음 실행하는 사용자가 화면 구성과 기본 사용 흐름을 이해하도록 만든 안내 문서입니다.

## 로컬 실행

이 문서 사이트는 정적 HTML/CSS/JS로 구성되어 있어 별도 설치나 빌드 과정이 필요하지 않습니다.

1. 레포지토리 폴더로 이동합니다.

```bash
cd /Users/hywznn/Desktop/guide
```

2. 로컬 서버를 실행합니다.

```bash
python3 -m http.server 4174
```

3. 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:4174
```

포트가 이미 사용 중이라면 다른 포트로 실행할 수 있습니다.

```bash
python3 -m http.server 8080
```

이 경우 접속 주소는 `http://localhost:8080`입니다.

## 문서 기준

- Unity 6000.3.16f1에서 확인한 `SampleScene` 실행 화면 기준
- `feature/add-asset` 브랜치의 모듈 라이브러리, 배치 편집, 추천 입력 흐름 기준
- 실제 확인되지 않은 기능은 본문에서 “추후 보완 필요”로 분리
