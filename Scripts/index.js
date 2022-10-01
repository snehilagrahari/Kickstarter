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



let Arr1=[
    {
        img:"https://ksr-ugc.imgix.net/assets/038/338/675/269439190225c9c1586cac6427ba5c35_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661001447&auto=format&frame=1&q=92&s=fa1e84e298a7a1f366d95b2665cb8fc6",
        title:"The ABCs of Inclusion by Beth Leipholtz",
        fund:"595% funded",
        by:"By Beth Leipholtz"
    },
    {
        img:"https://ksr-ugc.imgix.net/assets/038/681/784/e3673efbd1f7bb8941ce9109e3b57324_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663933107&auto=format&frame=1&q=92&s=2286530b8ab76fc76c5d6cea8032201d",
        title:"Darkboard: Ultralight ergonomic drawing",
        fund:"530% funded",
        by:"By Crowd Cookware"
    },
    {
        img:"https://ksr-ugc.imgix.net/assets/038/511/017/73b9149272bb414599ce9c97a82601d4_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1662507301&auto=format&frame=1&q=92&s=5324273675b955b14b46e0f998425dad",
        title:"The Naked Pan by Crowd Cookware",
        fund:"415% funded",
        by:"By Astro HQ"
    }
];
let Arr2=[
    {
        img:"https://ksr-ugc.imgix.net/assets/038/626/381/27cb4616c965e002f76f8a9228e49787_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663508531&auto=format&frame=1&q=92&s=2f52298b86aff890d7b926ef58163b71",
        title:"The Wavelinks Puzzle",
        by:"By Craighill"
    },
    {
        img:"https://ksr-ugc.imgix.net/assets/037/708/862/fdf4f73db80660cb0d0dc8f4db1515f2_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1655769818&auto=format&frame=1&q=92&s=8f29aa1d448030fba2843645edf21ec9",
        title:"Tokyo Conversations",
        by:"By Lee Chapman"
    },
    {
        img:"https://ksr-ugc.imgix.net/assets/038/390/830/a6418d462a63736201732a8b2359a9a2_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661450170&auto=format&frame=1&q=92&s=353eae221ff0549523644ee58bf433eb",
        title:"The Planetary Academy",
        by:"By Bill Nye,CEO,Planetary Society"
    }
];
let Arr3=[
    {
        img:"https://ksr-ugc.imgix.net/assets/037/963/854/56e8fb161de10b1d8ce1aaba6e6f6ef1_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1657869800&auto=format&frame=1&q=92&s=88742c021c7a3d632cd367c029845549",
        title:"All That You Love - Based On The Story By",
        by:"By Warren Duncan"
    },
    {
        img:"https://ksr-ugc.imgix.net/assets/038/660/743/d16945568f087adbb0aca973647bfa33_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663772922&auto=format&frame=1&q=92&s=ddb0ed7cbdd8ee620eb5f5fc57225f33",
        title:"Sharp Wit & the Company of Women",
        by:"By Brent Fisher"
    },
    {
        img:"https://ksr-ugc.imgix.net/assets/038/397/227/3facc0e76ad597191742fa80dd18bd84_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661510631&auto=format&frame=1&q=92&s=f26f443dc7752eb34254567ce8745894",
        title:"The Hedgehog Gaming Mouse and Controller!",
        by:"By Branden Duncan"
    }
];
let listArr2=[
    {
        "img": "https://ksr-ugc.imgix.net/assets/038/436/793/942c50b2c9b064ab22b6f059910c5051_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661882162&auto=format&frame=1&q=92&s=245d6e734a7b5679139d5880afd6561b",
        "title": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "p": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "by": "Barnabas Gonning"
      }, {
        "img": "https://ksr-ugc.imgix.net/assets/038/678/685/deea81c3d3244d9c2f7edaa22ebc32e6_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663907330&auto=format&frame=1&q=92&s=2a329252e13f772dba7a6a6cebc553f8",
        "title": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "p": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "by": "Malcolm Gilhouley"
      }, {
        "img": "https://ksr-ugc.imgix.net/assets/038/438/835/ff8798e407c79d6b7ac99fd8d5c065b6_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1661892603&auto=format&frame=1&q=92&s=9000fe0df482b66d21bea3ffff227f71",
        "title": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        "p": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.llus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "by": "Hasheem Skates"
      }, {
        "img": "https://ksr-ugc.imgix.net/assets/038/541/962/fceab6dca8cac56a22d33f5fb2d83629_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1662742921&auto=format&frame=1&q=92&s=1016b457dc54dac9a64433cee03f7e4a",
        "title": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "p": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enimuris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "by": "Herrick Le Cornu"
      }
];
let cardArr=[
    {
        img:"https://www.pw.org/files/article_thumbs/ocean_vuong_thumbnail.png",
        h2:"Author Ocean Vuong on being generous in your work",
        href:"https://thecreativeindependent.com/people/2017-05-16-ocean-vuong-on-being-generous-in-your-work/?ref=section-homepage-newsitem-author-ocean-vuong-on-being-generous-in-your-work"
    },
    {
        img:"https://m.media-amazon.com/images/S/amzn-author-media-prod/mea2gb1n1q72lpsta6246340n7._SX450_.jpg",
        h2:"Musician and writer Michelle Zauner on finding ways to keep going",
        href:"https://thecreativeindependent.com/people/musician-and-author-michelle-zauner-on-finding-ways-to-keep-going/?ref=section-homepage-newsitem-musician-and-writer-michelle-zauner-on-finding-ways-to-keep-going"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmFPHX5asruSLaMZozmmuvdHvJstDYOlnXw&usqp=CAU",
        h2:"Visual artist Tschabalala Self on not being afraid of hard work",
        href:"https://thecreativeindependent.com/people/2017-06-30-tschabalala-self-on-not-being-afraid-of-hard-work/?ref=section-homepage-newsitem-visual-artist-tschabalala-self-on-not-being-afraid-of-hard-work"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/4/40/20220610_dannyelfman_by_sachynmital_%28cropped%29.jpg",
        h2:"Composer Danny Elfman on not being afraid of failure",
        href:"https://thecreativeindependent.com/people/composer-danny-elfman-on-not-being-afraid-of-failure/?ref=section-homepage-newsitem-composer-danny-elfman-on-not-being-afraid-of-failure"
    }
]
display(Arr1);
displaydata(listArr2,"taking");
displaycard(cardArr,"int");
function display(data)
{
    document.getElementById("container").innerHTML=null;
    data.forEach(function(el){
        let div=document.createElement("div");
        div.style.display="flex";
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.img;
        img.style.width="200px";
        div1.append(img);
        let hr=document.createElement("hr");
        hr.style.margin="20px 0px";
        hr.style.color="white";
        let div2=document.createElement("div");
        div2.style.lineHeight="15px";
        let h2=document.createElement("p");
        h2.innerText=el.title;
        h2.style.fontSize="16px";
        let p=document.createElement("p");
        p.innerText=el.by;
        p.style.color="grey";
        p.style.fontSize="13px";
        let b1=document.createElement("button");
        b1.style.borderRadius="50%"
        b1.style.margin="5px"
        b1.innerHTML="<i class=\"fa-regular fa-bookmark\"></i>"
        let b2=document.createElement("button");
        b2.innerHTML="<i class=\"fa-regular fa-thumbs-up\"></i>"
        b2.style.margin="5px"
        b2.style.borderRadius="50%"
        let b3=document.createElement("button");
        b3.innerHTML="<i class=\"fa-regular fa-thumbs-down\"></i>"
        b3.style.margin="5px"
        b3.style.borderRadius="50%"
        if(el.fund!=undefined)
        {
            let fund=document.createElement("p");
            fund.innerText=el.fund;
            fund.style.color="green";
            fund.style.fontWeight="bold";
            fund.style.fontSize="14px";
            div2.append(h2,fund,p,b1,b2,b3);
        }
        else
        {
            div2.append(h2,p,b1,b2,b3);
        }
        div.append(div1,div2);
        document.querySelector("#container").append(div,hr);
    });
}
let left=document.getElementById("left");
let right=document.getElementById("right");
left.addEventListener("click",leftslide)
right.addEventListener("click",rightslide)
function leftslide()
{
    document.getElementById("fresh").scrollBy({
        left:-350,
        behavior:"smooth"
    })
}
function rightslide()
{
    document.getElementById("fresh").scrollBy({
        left:350,
        behavior:"smooth"
    })
}
let one=document.getElementById("one");
one.addEventListener("click",fun1);
let two=document.getElementById("two");
two.addEventListener("click",fun2);
let three=document.getElementById("three");
three.addEventListener("click",fun3);
function fun1()
{
    display(Arr1);
    one.style.textDecoration="underline 2px";
    two.style.textDecoration="none";
    three.style.textDecoration="none";
}
function fun2()
{
    display(Arr2);
    two.style.textDecoration="underline 2px";
    one.style.textDecoration="none";
    three.style.textDecoration="none";
}
function fun3()
{
    display(Arr3);
    three.style.textDecoration="underline 2px";
    two.style.textDecoration="none";
    one.style.textDecoration="none";
}
function displaydata(data,identity)
{
    data.forEach(function(el){
        let card=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.img;
        img.style.width="100%";
        let h2=document.createElement("p");
        h2.innerText=el.title;
        h2.style.fontSize="25px";
        let p=document.createElement("p");
        p.innerText=el.p;
        p.style.fontSize="14px";
        let by=document.createElement("p");
        by.innerText="by "+el.by;
        by.style.fontSize="12px";
        by.style.color="grey";
        card.append(img,h2,p,by);
        document.getElementById(identity).append(card);
    })
}
function displaycard(data,identity)
{
    data.forEach(function(el){
        let card=document.createElement("a");
        card.setAttribute("href",el.href);
        card.setAttribute("target","blank")
        let img=document.createElement("img");
        img.src=el.img;
        let h2=document.createElement("p");
        h2.innerText=el.h2;
        h2.style.fontSize="20px";
        card.append(img,h2);
        document.getElementById(identity).append(card);
    })
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

