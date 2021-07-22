


window.onload = function()
{
    document.getElementById("stk").innerHTML = sessionStorage.getItem("stk");
    document.getElementById("sotien").innerHTML = sessionStorage.getItem("sotien") + " VNĐ";
    document.getElementById("sotienphi").innerHTML = "2000 VNĐ";
    document.getElementById("phigd").innerHTML = sessionStorage.getItem("phigd");
    document.getElementById("noidung").innerHTML = sessionStorage.getItem("noidung");
}

