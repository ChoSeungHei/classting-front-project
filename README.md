# 클래스팅 프론트엔드 포지션 과제

## 설계

### 개발 환경

- react + typescript + **eslint + prettier**

1. 요구사항 파악과 함께 화면 아우터라인 잡기  
   a. 게임시작 화면 (게임 시작 버튼, 게임 타이틀)  
   b. 게임진행 화면 (문제 제목, 문제 보기, 정오답 표기, 다음 버튼)  
   c. 게임결과 안내 화면 (정오답, 소요시간)

2. UI 라이브러리  
   a. React Bootstrap [link](https://react-bootstrap.github.io/)

3. 기타 라이브러리  
   a. axios  
    - ajax 통신을 위해 사용  
   b. chart.js [link](https://www.chartjs.org/)  
    - 정오답 비율을 보여주기 위해 사용
   c. react-loading [link](https://www.npmjs.com/package/react-loading)  
    - api http 통신 동안에 로딩시간 대기를 위해 사용

## 화면 설명

1. 첫 진입 화면(배경색 4개 루프)  
   ![image](./ReadMeImg/1.png)

2. 로딩 화면
   ![image](./ReadMeImg/4.png)

3. 퀴즈 화면
   ![image](./ReadMeImg/5.png)

4. 퀴즈 정답 화면
   ![image](./ReadMeImg/2.png)

5. 퀴즈 오답 화면
   ![image](./ReadMeImg/3.png)

6. 퀴즈 결과 화면
   ![image](./ReadMeImg/6.png)
