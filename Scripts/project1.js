let form=document.querySelector("form");
let category=document.getElementById("category");
    let art=["Select","Digital Art","Ceramics Art","Physical Art","Painting","Drawing","Portrait"]
    let comic=["Select","Avengers","Marvel","Anthologies","Comic Books","Graphic Novel"]
    let dance=["Select","Kathakali","Hip Hop","Free Style","Mime"]
    let fashion=["Select","Men","Women","Kid","Summer","Winter","All"]
    let film=["Select","Hollywood","Bollywood","Tollywood","English","Hindi","Kannada"]
let sub=document.getElementById("subcategory");
category.addEventListener("change",opt)
function opt()
{
    sub.innerHTML=null;
    if(category.value=="")
    {
        document.getElementById("sub").style.cursor="not-allowed";
        document.getElementById("sub").style.backgroundColor="grey"
        return;
    }    
    else
    {
        document.getElementById("sub").style.backgroundColor="black";
        document.getElementById("sub").style.cursor="pointer";
        let data;
        if(category.value=="Arts")
            data=art;
        else if(category.value=="Comics")
            data=comic;
        else if(category.value=="Dance")
            data=dance;
        else if(category.value=="Films")
            data=film;
        else if(category.value=="Fashion")
            data=fashion;
        data.forEach(function(el){
            let op=document.createElement("option");
            op.innerText=el;
            op.value=el;
            sub.append(op);
        })
    } 
}  
form.addEventListener("submit",load)
function load(event)
{
    event.preventDefault();
    let cat=document.getElementById("category").value;
    if(cat=="")
    {
        return;
    }
    alert("Login First");
    window.location.assign("login.html");
}