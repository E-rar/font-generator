function changeFontsSize() {
    document.getElementById("change").style.fontSize=document.getElementById("font-size").value+"px";
    document.getElementById("change").style.fontFamily=document.getElementById("font-family").value;
    document.getElementById("change").innerHTML=document.getElementById("content").value;

    console.log("tets");
}
