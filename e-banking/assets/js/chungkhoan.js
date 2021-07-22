var nguon;
var nccck;
var loaidichvu;
var makh;
var sotien;

window.onload = function()
{

    var tknguon = document.getElementById("tknguon");
    nguon = tknguon.options[tknguon.selectedIndex].text;

    var ncc = document.getElementById("nhacungcapck");
    nccck = ncc.options[ncc.selectedIndex].text;

    
    var loaidv = document.getElementById("loaidichvu");
    loaidichvu = loaidv.options[loaidv.selectedIndex].text;


    makh = document.getElementById("makh").value;
    sotien = document.getElementById("sotien").value;
}

function changeTknguon(){
    var tknguon = document.getElementById("tknguon");
    nguon = tknguon.options[tknguon.selectedIndex].text;
}
function changeNCC(){
    var ncc = document.getElementById("nhacungcapck");
    nccck = ncc.options[ncc.selectedIndex].text;

}
function changeLoaidv(){
    var loaidv = document.getElementById("loaidichvu");
    loaidichvu = loaidv.options[loaidv.selectedIndex].text;
}
function changeMakh(){
    makh = document.getElementById("makh").value;
}
function changeSotien(){
    sotien  = document.getElementById("sotien").value;
}

function ClickHandler(){
    sessionStorage.setItem("tknguon",nguon);
    sessionStorage.setItem("nccck",nccck);
    sessionStorage.setItem("loaidichvu",loaidichvu);
    sessionStorage.setItem("makh",makh);
    sessionStorage.setItem("sotien",sotien);
}