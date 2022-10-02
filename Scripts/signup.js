let form=document.querySelector("form");
let p=document.createElement("p")
{
    p.innerText="**ALL FIELDS NECESSARY**"
    p.style.color="red";
    p.style.fontSize="14px";
    p.style.display="none";
    p.style.textAlign="center";
    p.style.marginTop="-15px";
    form.append(p);
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
let userArr=JSON.parse(localStorage.getItem("user-details"))||[];
form.addEventListener("submit",signup)
function signup(event)
{
    event.preventDefault();
    document.getElementById("existingemail").style.display="none";
    let details={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value
    };
    console.log(details);
    let flag=false;
    for(let i=0;i<userArr.length;i++)
    {
        if (details.email==userArr[i].email)
            flag=true;
    }
    if(details.name==""||details.email==""||details.pass=="")
    {
        p.style.display="block";
        return ;
    }
    else if(flag==true)
    {
        document.getElementById("existingemail").style.display="block";
    }
    else
    {
        p.style.display="none";
        userArr.push(details);
        alert("Account Created Succesfully! \n Please Login With Your Account")
        localStorage.setItem("user-details",JSON.stringify(userArr));
        window.location.assign("login.html");
    }
}
let aname=localStorage.getItem("account")||"Login";
document.getElementById("login").innerHTML=aname;
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
