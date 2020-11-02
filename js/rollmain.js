var wnum = 0; //슬라이드 인덱스 초기값
var wwslidingAuto = null;   //슬라이드 자동실행 변수 초기값
//자바스크립트 함수 선언
function play_w(directw) {  //다이렉트는 좌우 슬라이드 방향
    if(directw=="right") {
        wnum++; //wnum = wnum + 1;
        if(wnum>2) {wnum = 0;}    //중괄호{}를 안 써도 작동은 됨.
    }else if (directw == "left") {
        wnum--; //wnum = wnum - 1;
        if(wnum<0) {wnum = 2;}
    }else{
        wnum = directw;
    }

    $(".rollingbtn").find('li.seq a').each(function(){
        //슬라이드 이미지 아래의 이동버튼을 초기값으로 동그랑땡으로 만든다.
        $(".rollingbtn li.seq a img").attr('src',$(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png'));
    });
    //".rollingbtn li.butt0 a img" -> .rollingbtn li.butt1 a img -> .rollingbtn li.butt2 a img
    $(".rollingbtn li.butt"+wnum+" a img").attr('src',$(".rollingbtn li.butt"+wnum+" a img").attr('src').replace('_off.png','_on.png'));

    //조건 비교) == 값만 비교 | === 값, 형태 모두 비교
    if(wnum==0) {
        $(".viewImgList li.imglist1").animate({'opacity':0},1000);    //단위 1000밀리세컨드
        //슬라이드 인덱스가 0번일 때 li태그를 1초간 서서히 사라지게 함.
        $(".viewImgList li.imglist2").animate({'opacity':0},1000);
        $(".viewImgList li.imglist0").animate({'opacity':1},1000);
    }else if(wnum == 1) {
        $(".viewImgList li.imglist0").animate({'opacity':0},1000);
        $(".viewImgList li.imglist2").animate({'opacity':0},1000);
        $(".viewImgList li.imglist1").animate({'opacity':1},1000);
    }else if(wnum == 2) {
        $(".viewImgList li.imglist0").animate({'opacity':0},1000);
        $(".viewImgList li.imglist1").animate({'opacity':0},1000);
        $(".viewImgList li.imglist2").animate({'opacity':1},1000);
    }

    //true, false 값을 슬라이드 Auto 변수값으로 사용.
    if(wwslidingAuto){
        clearTimeout(wwslidingAuto); //play_w 함수 실행중지.
    }
    wwslidingAuto = setTimeout("play_w('right')",3000);    
}
//아래부터 함수 진입(play_w 함수명 호출해서 실행)됨.
var wwslidingAuto = setTimeout("play_w('right')",3000); //6초 후에 play_w 함수를 실행
//es5 버전용
// var wwrollplayhide = setTimeout(function(){     //첫화면에서 플레이버튼 숨기기(2) : 멋지게
//     $(".rollplay").css("display","none");
// },3000);
//es7 버전용(람다식 = 애로우(화살표) 함수 사용)
var wwrollplayhide = setTimeout(() =>{
    $(".rollplay").css("display","none");
},3000);

$(document).ready(function() {
    // $(".rollplay").css("display","none");    //첫화면에서 플레이버튼 숨기기(1) : 편하게
    $(".rollstop a").click(function() {
        $(this).parent().hide();
        $(".rollplay").css('display','inline-block');
        //하단 진행버튼을 클릭했을 때, setTimeout으로 실행시킨 함수 실행취소.
        if(wwslidingAuto) {clearTimeout(wwslidingAuto);}
    });
    $(".rollplay a").click(function() {
        $(this).parent().hide();
        $(".rollstop").css('display','inline-block');
        play_w('right');    //슬라이드 함수 실행
    });
    
    $(".rollingbtn li.seq a").each(function(index) {
        $(this).click(function() {
            $(".rollplay").hide();
            $(".rollstop").css('display','inline-block');
            if(wwslidingAuto) {clearTimeout(wwslidingAuto);}
            play_w(index);
        });
    });
});