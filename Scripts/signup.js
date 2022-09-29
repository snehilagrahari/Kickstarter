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
        localStorage.setItem("user-details",JSON.stringify(userArr));
    }
}