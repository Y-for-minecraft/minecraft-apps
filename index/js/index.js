//BG_change_fun
$(document).scroll(function () {
  let h = $(this).scrollTop();
  if (h < 400) {
    $('body').css('background-image', 'radial-gradient(ellipse at center, rgba(10,5,0,0.8) 40%,rgba(0,0,0,0.9) 60%,rgba(0,0,0,1) 100%) , url(./img/BG.jpg)');
  }
  if (h >= 400) {
    $('body').css('background-image', 'radial-gradient(ellipse at center, rgba(10,5,0,0.8) 40%,rgba(0,0,0,0.9) 60%,rgba(0,0,0,1) 100%) , url(../chunk_checker/img/codePen_Minecraft_1.jpg)');
  }
  if (h >= 1000) {
    $('body').css('background-image', 'radial-gradient(ellipse at center, rgba(10,5,0,0.8) 40%,rgba(0,0,0,0.9) 60%,rgba(0,0,0,1) 100%) , url(./img/BG.jpg)');
  }
});
