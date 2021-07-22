
var OTP;

window.onload = function()
{

    document.getElementById("tknguon").innerHTML = sessionStorage.getItem("tknguon");
    document.getElementById("stk").innerHTML = sessionStorage.getItem("stk");
    document.getElementById("nhacungcap").innerHTML = sessionStorage.getItem("nhacungcap");
    document.getElementById("makh").innerHTML = sessionStorage.getItem("makh");

    OTP = document.getElementById("OTP").value;
}
function changeOTP(){
    OTP = document.getElementById("OTP").value;
    console.log(OTP);
}
var check = false;
function ClickHandler(){

    if(OTP === "6868"){
        console.log(OTP);
        window.location.href = "./dienkq.html";
    }
    else{
        if(!check){
            var tag = document.createElement("p");
            tag.id = "erorr";
            var text = document.createTextNode("Nhập sai mã OTP");
            tag.appendChild(text);
            var element = document.getElementById("divOTP");
            element.appendChild(tag);
            check = true;
        }
       
    }
}