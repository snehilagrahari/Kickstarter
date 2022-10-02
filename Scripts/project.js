let but=document.getElementById("next");
but.addEventListener("click",load)
function load()
{
    window.location.assign("project1.html");
}
let but1=document.getElementById("next1");
but1.addEventListener("click",load)
function load()
{
    window.location.assign("project1.html");
}
let aname=localStorage.getItem("account")||"Login";
document.getElementById("login").innerText=aname;
document.getElementById("login").addEventListener("click",displaylogout);
let clickcount=0;
function displaylogout()
{
    if(localStorage.getItem("account")!=undefined&clickcount%2==0)
    {
        clickcount++;
        document.getElementById("logoutbox").style.display="block";
    }
    else if(localStorage.getItem("account")!=undefined&clickcount%2!=0)
    {
        clickcount++;
        document.getElementById("logoutbox").style.display="none";
    }
    else
        window.location.assign("login.html");
}
document.getElementById("logout").addEventListener("click",logout)
function logout()
{
    localStorage.removeItem("account");
    window.location.reload();
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