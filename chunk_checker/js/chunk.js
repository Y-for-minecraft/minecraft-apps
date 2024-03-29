/*aside display at 1200px*/
$(window).resize(function() {
  let ww = window.innerWidth;
  if (ww >= 1200) {
    if (!$('#hanb').prop('checked')) {
      $('#hanb').prop('checked', true);
    }
  }
});
/*hide aside menu when using smartphone*/
$(document).ready(function () {
  let ww = window.innerWidth;
  if (ww <= 640) {
    $('#hanb').prop('checked', false);
  }
});
/*Map Calculation*/
$('.go_button').on("click", function (e) {
  $("#answer").removeClass("hidden");
  let wh = window.innerHeight;
  wh = wh - 80;
  $('table').css('max-height', wh);
  if (!$('input[name="x"]').val()) {
    $('input[name="x"]').val(123);
  }
  if (!$('input[name="z"]').val()) {
    $('input[name="z"]').val(123);
  }
  let x = $('input[name="x"]').val();
  let z = $('input[name="z"]').val();
  let chunkCount = $('select[name="count"]').val();
  let view = $('input[name="view"]:checked').val();
  let area = chunkCount * 2 + 1;
  let ansx = Math.floor(x / 16) * 16 - 16 * chunkCount;
  let ansz = Math.floor(z / 16) * 16 - 16 * chunkCount;
  /*simple display*/
  if (view == 1) {
    let i = 0;
    let col = "";
    let colEnpty = "";
    let countX = 0;
    while (i <= 16 * area) {
      if (ansx % 16 === 0) {
        col = col + '<td style="padding: 0.5em;" class="x16 tableTop positionX' + ansx + '">' + ansx + "</td>";
        colEnpty = colEnpty + '<td style="padding: 0.5em;" class="x16 positionX' + ansx + '"><span class="hide countX' + countX + '">x' + ansx + "<br></span></td>";
        countX = countX + 1;
      } else if (((ansx % 16) + 1) % 16 === 0) {
        col = col + '<td style="padding: 0.5em;" class="x15 tableTop positionX' + ansx + '">' + ansx + "</td>";
        colEnpty = colEnpty + '<td style="padding: 0.5em;" class="x15 positionX' + ansx + '"><span class="hide countXbef' + countX + '">x' + ansx + "<br></span></td>";
      } else if (((ansx % 16) - 1) % 16 === 0) {
        col = col + '<td class="tableTopNone positionX' + ansx + '">X</td>';
        colEnpty = colEnpty + '<td class="positionX' + ansx + '"></td>';
      }
      ansx = ansx + 1;
      i = i + 1;
    }

    let j = 0;
    let positionZ = "";
    let table = '<tr><td class = "fixed"></td>' + col + "</tr>";
    let countZ = 0;
    while (j <= 16 * area) {
      if (ansz % 16 === 0) {
        table = table + '<tr class="z16 positionZ' + ansz + " countZ" + countZ + '"><td style="padding: 0.5em;" class="tableLeft"><span class="hide cZ">z' +
          ansz + "</span>" + ansz + "</td>" + colEnpty + "</tr>";
        countZ = countZ + 1;
      } else if (((ansz % 16) + 1) % 16 === 0) {
        table = table + '<tr class="z15 positionZ' + ansz + " countZbef" + countZ + '"><td style="padding: 0.5em;" class="tableLeft"><span class="hide cZ">z' +
          ansz + "</span>" + ansz + "</td>" + colEnpty + "</tr>";
      } else if (((ansz % 16) - 1) % 16 === 0) {
        table = table + '<tr class="positionZ' + ansz + '"><td class="tableLeftNone">X</td>' + colEnpty + "</tr>";
      }
      ansz = ansz + 1;
      j = j + 1;
    }
    $("#answer").children().remove();
    $("#answer").append(table);

    let myX = "";
    let myZ = "";
    if (x % 16 === 0 || ((x % 16) + 1) % 16 === 0) {
      myX = x;
    } else {
      myX = Math.floor(x / 16) * 16 + 1;
    }
    if (z % 16 === 0 || ((z % 16) + 1) % 16 === 0) {
      myZ = z;
    } else {
      myZ = Math.floor(z / 16) * 16 + 1;
    }

    $("#answer td").append('<p class="space"></p>');
    $("#answer tr.positionZ" + myZ + " td.positionX" + myX + " p.space").attr("id", "here");
  }
  /*detailed display*/
  if (view == 2) {
    let i = 0;
    let col = "";
    let colEnpty = "";
    let countX = 0;
    while (i <= 16 * area) {
      if (ansx % 16 === 0) {
        col = col + '<td style="padding: 0.5em;" class="x16 tableTop positionX' + ansx + '">' + ansx + "</td>";
        colEnpty = colEnpty + '<td style="padding: 0.5em;" class="x16 positionX' + ansx + '"><span class="hide countX' + countX + '">x' + ansx + "<br></span></td>";
        countX = countX + 1;
      } else if (((ansx % 16) + 1) % 16 === 0) {
        col = col + '<td style="padding: 0.5em;" class="x15 tableTop positionX' + ansx + '">' + ansx + "</td>";
        colEnpty = colEnpty + '<td style="padding: 0.5em;" class="x15 positionX' + ansx + '"><span class="hide countXbef' + countX + '">x' + ansx + "<br></span></td>";
      } else {
        col = col + '<td style="padding: 0.5em;" class="tableTop positionX' + ansx + '">' + ansx + "</td>";
        colEnpty = colEnpty + '<td class="positionX' + ansx + '"></td>';
      }
      ansx = ansx + 1;
      i = i + 1;
    }

    let j = 0;
    let table = '<tr><td class = "fixed"></td>' + col + "</tr>";
    let countZ = 0;
    while (j <= 16 * area) {
      if (ansz % 16 === 0) {
        table = table + '<tr class="z16 positionZ' + ansz + " countZ" + countZ + '"><td style="padding: 0.5em;" class="tableLeft"><span class="hide cZ">z' +
          ansz + "</span>" + ansz + "</td>" + colEnpty + "</tr>";
        countZ = countZ + 1;
      } else if (((ansz % 16) + 1) % 16 === 0) {
        table = table + '<tr class="z15 positionZ' + ansz + " countZbef" + countZ + '"><td style="padding: 0.5em;" class="tableLeft"><span class="hide cZ">z' +
          ansz + "</span>" + ansz + "</td>" + colEnpty + "</tr>";
      } else {
        table = table + '<tr class="positionZ' + ansz + '"><td style="padding: 0.5em;" class="tableLeft">' + ansz + "</td>" + colEnpty + "</tr>";
      }
      ansz = ansz + 1;
      j = j + 1;
    }

    $("#answer").children().remove();
    $("#answer").append(table);

    $("#answer td").append('<p class="space"></p>');
    $("#answer tr.positionZ" + z + " td.positionX" + x + " p.space").attr( "id", "here");
  }
  /*show coordinates*/
  let coordinate = $('input[name="coordinate"]:checked').val();
  if (coordinate == 1) {
    $("tr.z16 td.x16 span").removeClass("hide");
    $("tr.z15 td.x15 span").removeClass("hide");
  } else {
    $("tr.z16 td.x16 span").addClass("hide");
    $("tr.z15 td.x15 span").addClass("hide");
  }

  let n = 0;
  while (n <= area) {
    for (let m = 0; m <= area; m = m + 1) {
      let cou_Z = $("tr.countZ" + n + " span.cZ").text() + "<br>";
      let cou_Z_bef = $("tr.countZbef" + n + " span.cZ").text() + "<br>";
      $("tr.countZ" + n + " span.countX" + m + "").append(cou_Z);
      $("tr.countZbef" + n + " span.countXbef" + m + "").append(cou_Z_bef);
    }
    n = n + 1;
  }
  /*move to my place
  https://code-pocket.info/20191109272/
https://developer.mozilla.org/ja/docs/Web/API/Element/scrollIntoView*/
  let target = document.getElementById("here");
  target.scrollIntoView({ block: "center", inline: "center" });
});
/*move to #here at click my place icon*/
$(".enter_coordinates_menu .my_place").click(function () {
  let target = document.getElementById("here");
  target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});
/*avoid crashes using delete range*/
$('input[name="view"]').change(function () {
  if ($('input[name="view"]:checked').val() == 2) {
    $('select[name="count"] option[value="10"]').addClass("hide");
    $('select[name="count"] option[value="6"]').addClass("hide");
    if (
      $('select[name="count"]').val() == 10 ||
      $('select[name="count"]').val() == 6
    ) {
      $('select[name="count"] option[value="1"]').prop("selected", true);
    }
  } else {
    $('select[name="count"] option[value="10"]').removeClass("hide");
    $('select[name="count"] option[value="6"]').removeClass("hide");
  }
});
//全角を半角に変更
/*https://www.searchlight8.com/jquery-javaascript-replace-charcode/*/
$(function () {
  $("input").blur(function () {
    charChange($(this));
  });
  charChange = function (e) {
    let val = e.val();
    let str = val.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });

    if (val.match(/[Ａ-Ｚａ-ｚ０-９]/g)) {
      $(e).val(str);
    }
  };
});
