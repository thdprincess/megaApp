$(function(){
  // 페이지 구성
  // 초기설정
  $("#container section:not("+ $(".submenu li a.connect.selected").attr("href") +")").hide();

  // 이벤트
  $(".submenu li a.connect").click(function(){
    // 연결된 서브메뉴를 클릭시 menu_wrap 닫기
    $("#menu_wrap").css({right:"-60%"});

    // 메뉴 => 1.모든 메뉴에 클래스 제거+2.클릭한 메뉴에 클래스 적용
    $(".submenu li a.connect").removeClass("selected");
    $(this).addClass("selected");
    // 내용 => 1.모든 내용 숨김+2.클릭한 메뉴의 내용만 보임
    $("#container section").hide();
    $( $(this).attr("href") ).show();
    return false;
  });

  // 메뉴 표시
  $(".menu_icon").click(function(){
    $("#menu_wrap").animate({right:0},"normal");
    return false;
  });
  $(".menu_close").click(function(){
    $("#menu_wrap").animate({right:"-60%"},"normal");
    return false;
  });

  // 웹의 메뉴 숨김 처리
  $("#menu_wrap").mouseleave(function(){
    $("#menu_wrap").animate({right:"-60%"},"normal");
  });

  // 메뉴 동작
  $("#gnb > ul > li").click(function(e){
    e.preventDefault();
    // 1단 메뉴(on 클래스)
    $("#gnb > ul > li > a").removeClass("on");
    $(this).children("a").addClass("on");
    
    // 2단 메뉴(slideToggle)
    // $(this).children("ul").slideToggle();
    
    // 2단 메뉴(아코디언)
    if( $(this).children("ul").css("display") == "none" ){
      $("#gnb > ul > li > ul").slideUp();
    }
    $(this).children("ul").slideDown();
  });

  // top
  // 초기설정
  $('.top_btn').hide();
  // 이벤트 => 기본적인 scroll 이벤트의 대상은 window가 맞음
  // CSS에 overflow: auto 또는 overflow: scroll이 body 또는 특정 div에 적용되어 있을 경우 => 이런 경우에는 스크롤이 window가 아닌 body나 특정 div에서 발생하므로, $(window).scroll()은 아무런 이벤트도 감지하지 못함
  $('body').scroll(function(){
    // 스크롤 높이
    let sc_num = $(this).scrollTop();
    let height = $(this).height();
    console.log(sc_num, height);
    if(sc_num > height/2){
      $('.top_btn').fadeIn();
    }else{
      $('.top_btn').fadeOut();
    }
  });
});