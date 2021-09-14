---
name: "[✍️ Dev Log][이름] / [년월일]"
about: Describe this issue template's purpose here.
title: "[✍️ Dev Log][이름] / [년월일]"
labels: Dev-log
assignees: ''

---

####예시입니다 ####

> ### 오늘은 어떻게 프로젝트에 기여했나요?
> * Sequelize 모델 설정에서 belongsToMany 메서드로 User 테이블 하나만 이용한 following, follower 관계를 형성했다.
> * Controller 코드 작업을 시작했고, 기본적으로 데이터를 단순 반환하는 get 요청에 대한 서버 로직을 모두 구축했다.
> 
> ### 오늘의 프로젝트에서 힘든 점은 무엇인가요?
> * `belongsToMany` 메서드의 두 번째 인자로 조인테이블의 개별 속성을 처리할 수 있다는 점을 찾는데 많이 오래 걸렸다.
> 
> ```js
> users.belongsToMany(users, {
>   through: 'follow',
>   as: 'Followers',
>   foreignKey: 'userId'
> });
> ```
> 
> ### 내일은 프로젝트에 기여하기 위해 무엇을 해야 하나요?
> * [ ]  기능별 요청에 대한 서버 API 코드를 작성하기 시작한다. 특히 유저가 좋아요한 글에 달린 태그들을 기반으로 비슷한 포스트를 추천해주는 로직을 많이 고민해봐야 할 것 같다.



> ### 오늘은 어떻게 프로젝트에 기여했나요?
> * Sequelize 모델 설정에서 belongsToMany 메서드로 User 테이블 하나만 이용한 following, follower 관계를 형성했다.
> * Controller 코드 작업을 시작했고, 기본적으로 데이터를 단순 반환하는 get 요청에 대한 서버 로직을 모두 구축했다.
> 
> ### 오늘의 프로젝트에서 힘든 점은 무엇인가요?
> * `belongsToMany` 메서드의 두 번째 인자로 조인테이블의 개별 속성을 처리할 수 있다는 점을 찾는데 많이 오래 걸렸다.
> 
> ```js
> users.belongsToMany(users, {
>   through: 'follow',
>   as: 'Followers',
>   foreignKey: 'userId'
> });
> ```
> 
> ### 내일은 프로젝트에 기여하기 위해 무엇을 해야 하나요?
> * [ ]  기능별 요청에 대한 서버 API 코드를 작성하기 시작한다. 특히 유저가 좋아요한 글에 달린 태그들을 기반으로 비슷한 포스트를 추천해주는 로직을 많이 고민해봐야 할 것 같다.
