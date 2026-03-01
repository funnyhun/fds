# UI 추가 및 프리뷰 흐름 가이드

이 프로젝트는 새 UI 컴포넌트를 추가한 뒤, 카탈로그와 프리뷰 화면에서 즉시 확인할 수 있도록 구성되어 있습니다.

## 1) 새 UI 컴포넌트 만들기

1. `src/components/` 아래에 새 컴포넌트를 추가합니다.
2. 스타일은 기존 패턴처럼 `styled-components`를 사용합니다.

예시:

```tsx
export function ExampleCard() {
  return (
    <div>
      <h3>Example Card</h3>
      <p>설명 텍스트</p>
    </div>
  );
}
```

## 2) 카탈로그에 등록하기

카탈로그 목록은 `src/catalog/catalog.json`에서 관리됩니다. 여기 추가된 항목이 갤러리 카드와 프리뷰 라우팅의 기준이 됩니다.

```json
{
  "id": "example-card",
  "name": "Example Card",
  "description": "간단한 카드형 UI 샘플",
  "tags": ["card", "sample"],
  "componentId": "ExampleCard"
}
```

- `id`: 프리뷰 라우트(`/preview/:id`)에 사용되는 식별자
- `componentId`: 실제 렌더링할 컴포넌트 키 (레지스트리와 매칭)

## 3) 프리뷰 레지스트리에 연결하기

프리뷰에 그려질 컴포넌트와 기본 props는 `src/catalog/registry.tsx`에 등록합니다.

```tsx
import { ExampleCard } from "../components/ExampleCard";

export const previewRegistry = {
  ExampleCard: {
    component: ExampleCard,
    props: {
      // 미리보기에서 사용할 props
    },
  },
};
```

## 4) 프리뷰가 동작하는 방식

- 갤러리 화면은 `src/pages/GalleryPage.tsx`에서 `catalog.json`과 `previewRegistry`를 함께 사용해 카드와 썸네일 프리뷰를 렌더링합니다.
- 상세 프리뷰 화면은 `src/pages/PreviewPage.tsx`에서 `/preview/:id` 라우트의 `id`를 기준으로 카탈로그 항목을 찾고, 해당 `componentId`로 레지스트리를 조회해 실제 UI를 보여줍니다.

즉, **카탈로그 항목의 `componentId`와 레지스트리 키가 일치해야 프리뷰가 정상적으로 표시됩니다.**

## 5) 빠른 확인 방법

GitHub Pages로 배포된 환경에서 바로 확인할 수 있습니다.

🔗 **배포 사이트**: https://funnyhun.github.io/fds/

- 갤러리: https://funnyhun.github.io/fds/
- 프리뷰: https://funnyhun.github.io/fds/preview/<id> (예: `/preview/accent-button`)

로컬 개발 환경:

```bash
npm run dev  # 개발 서버 실행
npm run deploy  # GitHub Pages에 배포
```
