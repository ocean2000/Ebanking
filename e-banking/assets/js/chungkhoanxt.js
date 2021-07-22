

window.onload = function()
{

    document.getElementById("tknguon").innerHTML = sessionStorage.getItem("tknguon");
    document.getElementById("nhacungcapck").innerHTML = sessionStorage.getItem("nccck");
    document.getElementById("loaidichvu").innerHTML = sessionStorage.getItem("loaidichvu");
    document.getElementById("makh").innerHTML = sessionStorage.getItem("makh");
    document.getElementById("sotien").innerHTML = sessionStorage.getItem("sotien");

}

function changeOTP(){
    OTP = document.getElementById("OTP").value;
    console.log(OTP);
}
var check = false;
function ClickHandler(){
    console.log(check);
    if(OTP === "6868"){
        console.log(OTP);
        window.location.href = "./chungkhoankq.html";
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