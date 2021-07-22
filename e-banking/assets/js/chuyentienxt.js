
var OTP;

window.onload = function()
{
    var hinhthuc = sessionStorage.getItem("hinhthuc");
    var ht = document.getElementById("ht");
    ht.innerHTML = hinhthuc;

    document.getElementById("tknguon").innerHTML = sessionStorage.getItem("tknguon");
    document.getElementById("stk").innerHTML = sessionStorage.getItem("stk");
    document.getElementById("sotien").innerHTML = sessionStorage.getItem("sotien") + " VNĐ";
    document.getElementById("sotienphi").innerHTML = "2000 VNĐ";
    document.getElementById("phigd").innerHTML = sessionStorage.getItem("phigd");
    document.getElementById("noidung").innerHTML = sessionStorage.getItem("noidung");

    OTP = document.getElementById("OTP").value;
}
function changeOTP(){
    OTP = document.getElementById("OTP").value;
    console.log(OTP);
}
function ClickHandler(){

    if(OTP === "6868"){
        console.log(OTP);
        window.location.href = "./chuyentienkq.html";
    }
    else{
        var tag = document.createElement("p");
        var text = document.createTextNode("Nhập sai mã OTP");
        tag.appendChild(text);
        var element = document.getElementById("divOTP");
        element.appendChild(tag);
    }
}