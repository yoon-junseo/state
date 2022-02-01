## Context API

### 왜 사용하는가?

- 앱 내에서 전역 상태 관리가 필요한 경우에 사용한다.
- 리액트 자체에서 제공하는 기능이기 때문에 별도의 라이브러리 설치가 필요 없다.

### 폴더 구조

```bash
├── context
│   └── context domain
|       ├── hooks.ts
│       ├── index.tsx
│       ├── reducer.ts
│       └── types.ts
└──
```

- types.ts -> 관리할 state의 타입과, action의 타입을 설정한다.
- reducer.ts -> action의 type에 따라서 state를 처리할 로직을 작성한다.
- hooks.ts -> state와 dispatch의 context를 더 편리하게 사용하기 위한 hook을 작성한다.
- index.ts -> ContextProvider를 작성한다. stateContext와 dispatchContext를 분리하였다.

### 주의할 점

- 모든 전역 상태를 공유하고 싶다면 하나의 엄청 큰 Provider를 만들어서 사용하면 된다.
- 이때, Provider가 겹치는 경우에는 Context가 공유 되지 않는다.
