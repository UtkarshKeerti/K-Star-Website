$(".reveal").click(function(){
  $(".curtain").css('transform','translateX(-100vw)')
  $(this).css('opacity','0')
  $(this).css('transform','translateX(-100%)')
})