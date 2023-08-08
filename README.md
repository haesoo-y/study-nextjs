# SSR vs RSC

Next.js 13 에서 비교하며 알아보는 SSR과 RSC

- Page Route 방식 - Server-Side Rendering
- App Route 방식 - React Server Components

### Prerequisite

- pages-router/.env.local
- app-router/.env.local

```
API_URL=https://your-mock-server
```

- 위와 같이 각 폴더에 환경변수 파일을 생성해야 합니다.
- 간단한 목서버를 만드시려면 [mockapi.io](https://mockapi.io)를 활용해보세요.
- 개발 당시 작성한 목데이터는 다음과 같습니다.

```json
// /api/todos
[
  {
    "id": 1,
    "title": "강아지 산책"
  },
  {
    "id": 2,
    "title": "고양이 산책"
  },
  {
    "id": 3,
    "title": "거북이 산책"
  },
  {
    "id": 4,
    "title": "토끼 산책"
  },
  {
    "id": 5,
    "title": "호랑이 산책"
  }
]

// /api/todos/1
{
    "id": 1,
    "title": "강아지 산책",
    "description": "아침먹고 강아지 산책 시키기"
}
// ...
// /api/todos/5
{
    "id": 5,
    "title": "호랑이 산책",
    "description": "아침먹고 호랑이 산책 시키기"
}

// /api/test
{
    "data": "hello world!!"
}
```

[포스팅 바로 가기](https://haesoo9410.tistory.com/404)
