### 학습목표(아래)

- 반응형 웹사이트 만들기
- 파이어폭스 개발자도구의 스타일 탭사용
- 기존 PC용 > 태블릿용 > 모바일용 CSS작업순서를 [모바일용 > 태블릿용 > PC용] 으로 변경작업

#### 20201104(수)
- 메인페이지 로고와 슬라이드(모바일용/PC용) 이미지 교체
- 테이블 display: none -> block
- 테이블 display: none -> table-cell 처리
- 크로스브라우징 처리
    브라우저 IE11, 크롬, 파이어포그, 오페라 등
    브라우서 교차 검사 후 처리
    display : revert; IE11(윈7)에서 지원 안 함
    -> display : table-cell 로 처리
    width : initial; IE11에서 지원 안 함
    -> width : inherit; 로 처리

#### 20201103(화)
- 시맨틱 웹: 의미있는 태그사용 == html5 사용
            (header, footer, aside, article, nav 등 웹문서에 의미있는 영역 지정.)
- white-space:nowrap
        예) 마지막 교시 입
            니다.
  white-space:wrap
        예) 마지막 교시
            입니다.
- css 값에 대한 수정
    -> padding:40px 0 0;
             (상)(좌우)(하)
- vertical(수직) : top, middle, bottom
  horizontal(수평) : left, center, right
- 유효성검사 : 예전에는 자바스크립트로 처리했으나,
                현재는 html5 required 속성으로 처리.
- <form>태그 속성 2가지 중요
    1)action 속성 : 데이터 전송 위치
    2)method 속성 : 데이터 전송 방법
                -> get(비보안-데이터노출, 기본값, 검색방식)
                    post(보안-데이터숨김, 회원가입 등의 등록폼에서 사용)
- 게시판리스트 : 모바일용 작업
                -> 태블릿용
                -> PC용

- 부트스트랩 4.x 버전
    > J쿼리기반 자바스크립트 프레임웍
    > 프레임워크 : 라이브러리를 구조화시킨것
    > 그리드시스템 : 화면레이아웃 구조(화면을 가로 12개로 분할구성)
    > AdminLTE 프레임웍(부트스트랩기반)

#### 20201102(월)
- 자바스크립트 : 조건문 안에서 아래의 내용은 동일함.
    !ok = not ok = false = !true
- 조건 : && == and == *
        || == or == +
        1 && 0 == 1*0 = 0 = and 모두 만족 할 때만 true
        1||0 == 1+0 = 1 = or 하나만 만족해도 true
- Rest API: Representation(화면처리)
            Application Interface(앱인터페이스)
- 원시 데이터(Raw데이터 - 공공데이터)
    앱인터페이스에서 받아 재가공해 화면에 뿌려주는 작업(마스크앱, 코로나 19 환자정보, SNS 로그인 등)
- 토큰 :네트워크로 전송되는 조각 데이터
       : OAuth2.0 인증데이터(SNS 로그인)
- 람다식(코드생략-애로우함수)
    : 자바7(x) 8(o), 안드로이드 스튜디오 에서도 사용됨.
        ->(자바)
        =>(자바스크립트)
- 자바스크립트 버전
    1)es5(엑마스크립트2015):네이티브 자바크립스와 비슷
    2)es7(엑마스크립트2017):람다함수식 추가(코드축소구현)
- 자바스크립트(제이쿼리) 디버그 방법(아래)
    -> 개발자도구 > 콘솔열고 > 화면실행
    1)alrert('디버그값출력');
    2)console.log('디버그값출력');

- 2000만원 이상 프로젝트 진행순서
    1) 클라이언트(공개입찰올림):
    2) 개발사(업체):위 RFP를 보고 제안서 제출
    3) 클라이언트(낙찰):업체선정
    4) 작업시작:개발사 작업시작.

- IT 개발회사:법인(주식회사)중소기업
    (사원:10명 내외, 연매출액 10억내외)
    개발팀, 디자인팀, 기획팀

#### 20201030(금)
- background-size: cover; 속성은 영역보다 이미지가 작을 때 작동함.
- inherit : 상속(extends)
- @media all => screen + print + ...
- [대괄호-배열], {중괄호-구현내용}, (소괄호-매개변수)
- @미디어쿼리(@-애노테이션=지시어)
- 웹 프로그램 : 기본은 게시판
                -> CRUD : Create(insert-자료입력)
                    Read(Select-자료조회)
                    Update(자료수정)
                    Delete(자료삭제)

#### 20201029(목)
- bbs(PC통신부터 사용되는 '게시판'의 약자)
- img는 가로크기를 지정하면 세로크기는 자동으로 조정됨.
- J쿼리 : 네이티브 자바스크립트를 단축키워드로 사용.
- J쿼리 코어를 가져와서 사용.
- 자바스크립트 콜백함수 : (아래)
    1) 이름이 없음.
    2) 기본함수는 이름을 호출해야 실행되나, 콜백함수는 호출 없이 자동실행됨.
- nav태그 : html5에 추가된 태그.
- ul(unorder list)태그 > li(list)태그
- 네이밍 규칠 : 카멜표기(낙타등표기법 단어+단어 시 두 번째 단어부터   대문자로 작성 ex).closePop)
- 사각형 영역 크기 : box-sizing: border-box;
- 햄버거메뉴 : .openMOgnb -> gnb(Global Navigation Bar)
    Ps. -> page navigation(각 페이지 내부 메뉴링크)
- 웹접근성 : 시각장애인들을 위한 코딩추가.
- 스크린리더 프로그램용 코딩 예) text-indent: -9999px;

#### 20201028(수)
- z-index : 0부터 시작, 화면에는 레이어라는 개념(포토피아)
- CSS 스타일 적용하는 3가지 방법
    1)인라인스타일(태그 안에 style 속성 사용 (예)style="padding:10px"))
    2)HTML 파일 안에 <style>내부스타일</style>
    3)외부CSS파일 지정 (예)<link href="css파일위치"/>)
- gitHub README.md(마크다운 언어(깃에서 쓰이는 언어))
- meta 데이터 : 데이터의 데이터(콘텐츠를 설명하는 데이터)
- 메타 태그 중 viewport는 반응형 사이트에서 필수. 
- 반응형사이트 화면설계서_학생용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/17jXgf7R2BawMt3K9eoxfnnO_8X9yClLZ/view?usp=sharing
- 반응형사이트 기획서_학생용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1dC2RMqDqNeEFtr-r-dvcsKk0YwPjk0Xy/view?usp=sharing

#### 20201022(목)

- 소스내용 교육용으로 정리
- 깃 사용시 토큰인증헤제: [윈도우 자격증명관리]에 personal access token 을 삭제 후 커밋
- 강사블로그 http://blog.daum.net/web_design 에서 익스텐션으로 검색 vscode 사용법 참조.
- 비주얼스튜디오코드 익스텐션 파일 구글드라이브 다운로드(아래):
- https://drive.google.com/file/d/1NkZ0qfr2P0tDsRKyP9qHQ3tPkafeKiPv/view?usp=sharing

#### 20201019(월)

- 반응형사이트 화면설계서_교사용 구글ppt 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1GqBK_sKPFpfhTDd4whbLK3ZLXP1g3_Kw/view?usp=sharing
- 반응형사이트 기획서_교사용 구글xlsx 다운받기(아래 구글링크):
- https://drive.google.com/file/d/1Wjuov4TCQjqBtCu5EbUc3SNns8PaxHSX/view?usp=sharing
