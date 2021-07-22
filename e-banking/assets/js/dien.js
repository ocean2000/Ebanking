
var nguon;
var nhacungcap;
var makh;
window.onload = function()
{
    var tknguon = document.getElementById("tknguon");
    nguon = tknguon.options[tknguon.selectedIndex].text;

    var ncc = document.getElementById("nhacungcap");
    nhacungcap = ncc.options[ncc.selectedIndex].text;

    makh = document.getElementById('makh').value;
    
}
function changeTknguon(){
    var tknguon = document.getElementById("tknguon");
    nguon = tknguon.options[tknguon.selectedIndex].text;
}
function changeNCC(){
    var ncc = document.getElementById("nhacungcap");
    nhacungcap = ncc.options[ncc.selectedIndex].text;
}
function changeMakh(){
    makh = document.getElementById('makh').value;
}
function ClickHandler(){
    sessionStorage.setItem("tknguon",nguon);
    sessionStorage.setItem("nhacungcap",nhacungcap);
    sessionStorage.setItem("makh",makh);
}

