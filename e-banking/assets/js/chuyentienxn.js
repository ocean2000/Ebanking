

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
}

