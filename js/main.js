// PC용 메뉴 보이기/숨기기 함수 선언(아래)
var isOver1 = false;	//플래그(깃발) 변수(값이 false 일 때만 fadeOut 작동됨.)
var isOver2 = false;	//플래그(깃발) 변수(값이 false 일 때만 fadeOut 작동됨.)
function goHide1() {
	if(!isOver1 && !isOver2) {
		//자바스크립트는 뒤에서부터 앞으로 해석
		$('.gnb_depth2_1').stop().fadeOut('fast');
		// fadeIn(서서히 나타남), fadeOut(서서히 사라짐)
	}
}
// 두번째 서브메뉴
var isOver11 = false;
var isOver22 = false;
function goHide2() {
	if(!isOver11 && !isOver22) {
		$('.gnb_depth2_2').stop().fadeOut('fast');
	}
}
// 세번째 서브메뉴
var isOver111 = false;
var isOver222 = false;
function goHide3() {
	if(!isOver111 && !isOver222) {
		$('.gnb_depth2_3').stop().fadeOut('fast');
	}
}
// 네번째 서브메뉴
var isOver1111 = false;
var isOver2222 = false;
function goHide4() {
	if(!isOver1111 && !isOver2222) {
		$('.gnb_depth2_4').stop().fadeOut('fast');
	}
}

/* 함수의 기본 작동원리
	function aname(vars) {	//함수선언
		alert(vars + " 이름출력");
	}
	aname('김나현');	//함수호출
	*/
	$(document).ready(function(){
		// 상단으로 바로 가기 버튼 클릭
		$(".to_top a").smoothScroll();
		//alert('콜백함수 실행');
		$(".openMOgnb").click(function(){
			//alrert()//디버그용
			// $(".header_cont").css("display", "block");
			$(".header_cont").slideDown("slow");
		//header 아이디영역 백그라운드 추가
		$("#header").addClass("on");
		});
		$(".closePop").click(function(){
			// $(".header_cont").css("display", "none");
			$(".header_cont").slideUp("fast");
			$("#header").removeClass("on");
		});

		// PC용 메뉴 롤오버(마우스) 호출부분(아래)
		// 대메뉴1 - gnb_depth2_1 서브메뉴 마우스 액션
		$('.openAll1').mouseover(function(){
			// PC용에서만 액션이 가능하도록 가로크기 비교(아래)
			if(parseInt($('header').css('width')) > 1055) {
				$('.gnb_depth2_1').fadeIn('fast');
			}
			isOver1 = true;
		});
		// 대메뉴1 - gnb_depth2_1 서브메뉴 선택액션
		$('.openAll1').focus(function(){
			if(parseInt($('header').css('width')) > 1055){
				$('.gnb_depth2_1').fadeIn('fast');
			}
			isOver1 = true;
		});
		// 대메뉴1 - gnb_depth2_1 서브메뉴 마우스 아웃액션
		$('.openAll1').mouseout(function(){
			isOver1 = false;
			setTimeout("goHide()",200);	//0.2초 후에 goHide1 함수실행
		});
		// 첫번째 서브메뉴 마우스 오버했을 때 액션
		$('.gnb_depth2_1').mouseover(function(){
			isOver2 = true;	//fadeOut 작동을 하지 않겠다는 명시적 변수값
		});
		// 첫번째 서브메뉴 선택액션 <-> blur
		$('.gnb_depth2_1').focus(function(){
			isOver2 = true;
		});
		// 첫번째 서브메뉴 마우스 아웃액션
		$('.gnb_depth2_1').mouseout(function(){
			isOver2 = false;	//fadeOut을 작동하겠다는 명시적 변수값.
			setTimeout("goHide1()",200);
		});
		// 첫번째 서브메뉴 선택 벗어났을 때 액션
		$('.gnb_depth2_1').blur(function(){
			isOver2 = false;
			setTimeout("goHide1()",200);
		});
		// 첫번째 서브메뉴중 마지막 li태그(해외)를 벗어났을 때 액션
		$('.gnb_depth2_1 li:last-child a').blur(function(){
			isOver1 = false;
			setTimeout("goHide1()",200);
		});
	});