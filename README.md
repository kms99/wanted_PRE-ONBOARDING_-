# 원티드 프리-온보딩 사전과제 - TODO LIST

1. [프로젝트 개요](#프로젝트-개요)
2. [주요 기능](#주요-기능)
3. [트러블슈팅](#트러블슈팅)

## 프로젝트 개요
1. **프로젝트 명**: TODO LIST
2. **개발기간**: '24.02.27. ~ '24.02.28 (2일)
3. **사용기술**: 
  - 언어: **TypeScript**
  - 메인 라이브러리: **React**
  - 전역상태관리: **redux-toolkit**
  - 스타일: styled-components
  - 기타 라이브러리: react-hook-form

본 프로젝트는 24년 원티드 프리-온보딩 사전과제로 CRUD 기능을 갖춘 투두리스트입니다.

프로젝트에서 중요하게 생각한 부분 다음과 같습니다.
  - 타입스크립트, ESLint, Prettier를 활용한 **클린코드 작성**
  - **컴포넌트 세분화 및 재활용성**
  - 컨벤션에 따른 **폴더 및 파일 구조 정리**

## 주요 기능
### 1. 다크/라이트 모드
  로컬스토리지를 이용하여 이전 모드 저장
![image](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/bae06477-a0ad-4bc6-a469-2da9f2d9ecdc)
![image](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/7de4b36f-1676-4fe9-92d0-dc8e1bc31aa7)

### 2. TODO CRUD
   
  - 등록 (C)
    
    ![bandicam2024-02-2900-30-06-599-ezgif com-video-to-gif-converter](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/eddb9765-4e5c-467f-9cc5-28196e0868dc)
    
  - 목록확인 (R)
    
    ![image](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/7be43ae3-719a-4c1f-99a4-c208ca36de24)

  - 수정 및 완료 상태 변경 (U)
    
    - 수정
      
      ![bandicam2024-02-2900-30-34-308-ezgif com-video-to-gif-converter](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/20e616fe-5c3a-4fb8-a006-a15abd97a748)
      
    - 완료 상태 변경
      
      ![bandicam2024-02-2900-31-14-329-ezgif com-video-to-gif-converter](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/07440f4a-f7a0-4d57-b71a-13a3e7a43c7d)

  - 삭제 (D)
    
    ![bandicam2024-02-2900-30-47-793-ezgif com-video-to-gif-converter](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/72133fc5-fb8b-4bff-a453-87036488ce80)

## 트러블슈팅
- Input Form 토글 상태에 따른 토글 버튼의 의도하지 않은 최초 실행

  **개요**
  
  Input Form 토글 상태에 따라 토글 버튼의 text를 변경하는 로직을 useEffect내에서 실행, 이때 토글 상태를 의존성 추가
  UX를 고려하여 토글의 transition 시간을 고려하여 setTimeOut을 실행하였다.

  ```javascript
    useEffect(() => {
      setTimeout(() => setButtonMessage(toggleForm ? 'CLOSE' : 'ADD'), 450);
    }, [toggleForm]);
  ```

  **문제**
  
  위 동작은 의존성 배열에 추가된 토글 상태가 변경될 때만 실행되는 것을 기대하였다.
  하지만 React LifeCycle에 따라서 useEffect는 해당 컴포넌트가 최초 랜더링 되었을 때도 실행되었다.

  - 새로고침 시 useEffect가 실행되면서 토글 버튼의 text가 변경되는 오류

    ![bandicam2024-02-2900-45-57-084-ezgif com-video-to-gif-converter](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/39ebc1d2-8a95-4142-9db3-7763a9178560)

  
  **해결**
  
  최초 실행을 막기 위하여 Flag Ref를 사용하였다
  최초 true로 초기화 되어있는 Ref를 LifeCycle에 의한 최초 실행시 false로 바꾸어 주면서 다음 로직이 실행되도록 개선하였다.

  ```javascript
    const isFirstRun = useRef(true);

    useEffect(() => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      setTimeout(() => setButtonMessage(toggleForm ? 'CLOSE' : 'ADD'), 450);
    }, [toggleForm]);
  ```

  - 새로고침 시 개선

    ![bandicam2024-02-2900-45-21-795-ezgif com-video-to-gif-converter](https://github.com/kms99/wanted_PRE-ONBOARDING_PreMission/assets/29966870/fc7443b8-2560-47bb-ac62-1fd9e22f419d)
