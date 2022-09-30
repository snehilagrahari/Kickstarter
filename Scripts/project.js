let but=document.getElementById("next");
but.addEventListener("click",load)
function load()
{
    window.location.assign("project1.html");
}
let aname=localStorage.getItem("account")||"Login";
document.getElementById("acc").innerHTML=aname;
let logOut=document.getElementById("out")
logOut.addEventListener("click",logout);
function logout()
{
  localStorage.removeItem("account");
}
let search=document.getElementById("searchButton");
search.addEventListener("click",searchfun)
function searchfun()
{
    document.getElementById("searchBox").style.visibility="visible";
}
let exi=document.getElementById("exit");
exi.addEventListener("click",closesearchbox)
function closesearchbox()
{
    document.getElementById("searchBox").style.visibility="hidden";
}