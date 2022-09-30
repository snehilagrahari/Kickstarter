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
    let details={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value
    };
    console.log(details);
    if(details.name==""||details.email==""||details.pass=="")
    {
        p.style.display="block";
        return ;
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
document.getElementById("acc").innerHTML=aname;
document.getElementById("out").addEventListener("click",logout);
function logout()
{
  localStorage.removeItem("account");
}