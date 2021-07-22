
var option;
var stk;
var nguon;
var sotien;
var phigd;
var noidung;

window.onload = function()
{
    var hinhthuc = document.getElementById("hinhthuc");
    option = hinhthuc.options[hinhthuc.selectedIndex].text;

    var tknguon = document.getElementById("tknguon");
    nguon = tknguon.options[tknguon.selectedIndex].text;

    stk = document.getElementById('stk').value;
    
    sotien = document.getElementById("sotien").value;

    if(document.getElementById("nguoichuyentra").checked) {
        phigd = "Người chuyển trả";
      }else if(document.getElementById("nguoinhantra").checked) {
        phigd = "Người nhận trả";
      }

    noidung = document.getElementById("noidung").value;
}

function changeOptionHinhthuc()
{
    var hinhthuc = document.getElementById("hinhthuc");
    option = hinhthuc.options[hinhthuc.selectedIndex].text;
}
function changeOptionHinhthuc()
{
    var tknguon = document.getElementById("tknguon");
    nguon = tknguon.options[tknguon.selectedIndex].text;
}
function changeStk()
{
    stk = document.getElementById('stk').value;
    
}
function changeSotien()
{
    sotien = document.getElementById("sotien").value;
    console.log(sotien);
}
function changePhigd()
{
    if(document.getElementById("nguoichuyentra").checked) {
        phigd = "Người chuyển trả";
      }else if(document.getElementById("nguoinhantra").checked) {
        phigd = "Người nhận trả";
      }
}
function changeNoidung()
{
    noidung = document.getElementById("noidung").value;
}
function ClickHandler()
{
    sessionStorage.setItem("hinhthuc", option);
    sessionStorage.setItem("tknguon", nguon);
    sessionStorage.setItem("stk", stk);
    sessionStorage.setItem("sotien",sotien);
    sessionStorage.setItem("phigd",phigd);
    sessionStorage.setItem("noidung",noidung);
}