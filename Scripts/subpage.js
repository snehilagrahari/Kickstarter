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
let Arr2=[
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
let Arr1=[
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

display(Arr1);
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
let one=document.getElementById("one");
one.addEventListener("click",fun1);
one.style.textDecoration="underline 2px";
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
let sub=document.getElementById("sub")
sub.addEventListener("click",subscribe)
function subscribe()
{
    if(document.getElementById("subemail").value!="")
    {
        document.getElementById("subemail").style.display="none";
        document.getElementById("sub").style.display="none";
        document.getElementById("mess").style.display="block";
    }
}
document.getElementById("container").style.transition="all 2s";







let exploreArr1=[{
    "img": "http://inspirationfeed.com/wp-content/uploads/2010/10/22551-500x300.jpg",
    "title": "Nullam molestie nibh in lectus.",
    "p": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUO5c4w0_zD0TvSzbEn2b6BLtzcMVOK-Acw5_f9qlFzvFVSioPfGYob-vf8C8GW3_iowI&usqp=CAU",
    "title": "Quisque porta volutpat erat.",
    "p": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
  }, {
    "img": "https://www.pngmart.com/files/4/Rally-PNG-Image.png",
    "title": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "p": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
  }];
  let exploreArr2=[{
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYx7JPL0bRv16ikCO2IVbRPjlihxs8r21tw&usqp=CAU",
    "title": "Duis mattis egestas metus.",
    "p": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlU3x9jbsS4MVxxSvZjOuvyF0iYKAmB_Lng&usqp=CAU",
    "title": "Proin interdum mauris non ligula pellentesque ultrices.",
    "p": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WkVv9rVPQQfZb58lXx5ecBzTB6h38tzt9Q&usqp=CAU",
    "title": "In hac habitasse platea dictumst.",
    "p": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
  }];
  let exploreArr3=[{
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpeJBBzsmTC-jglIKq857b01YRoMxbtEjrA&usqp=CAU",
    "title": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "p": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgsEf9xURraP2hIDnuiveGScwjZrTGsjBOg&usqp=CAU",
    "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "p": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z0A0-zD2gwfWcgzHOHKNZ8xrbmYvgMfJow&usqp=CAU",
    "title": "Duis mattis egestas metus.",
    "p": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
  }];
  let exploreArr4=[{
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xWad0zpObR9kNO_QlVOk0cVAgz7yxEQT1w&usqp=CAU",
    "title": "Morbi non quam nec dui luctus rutrum.",
    "p": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Giu_aporZaYky84BmopzQkOp9nBLNyCHaA&usqp=CAU",
    "title": "Sed ante.",
    "p": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  }, {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPY-fh7Q7-v5UBZUVXU8eACRp-vFXeGLgrWz7F6efUofSYSo9XEnjYTGgBFC2UC89IFM0&usqp=CAU",
    "title": "Morbi vel lectus in quam fringilla rhoncus.",
    "p": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
  }];
  let b1=document.getElementById("b1");
  let b2=document.getElementById("b2");
  let b3=document.getElementById("b3");
  let b4=document.getElementById("b4");
  b1.addEventListener("click",function(){
    appendExplore(exploreArr1,"exploreCard");
  })
  b2.addEventListener("click",function(){
    appendExplore(exploreArr2,"exploreCard");
  })
  b3.addEventListener("click",function(){
    appendExplore(exploreArr3,"exploreCard");
  })
  b4.addEventListener("click",function(){
    appendExplore(exploreArr4,"exploreCard");
  })
  appendExplore(exploreArr1,"exploreCard");
  function appendExplore(data,identity)
  {
    document.getElementById(identity).innerHTML=null;
    data.forEach(function(el){
        let card=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.img;
        img.style.width="100%"
        let title=document.createElement("p");
        title.innerText=el.title;
        title.style.fontSize="16px";
        let p=document.createElement("p")
        p.innerText=el.p;
        p.style.fontSize="13px";
        p.style.color="grey";
        card.append(img,title,p);
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
  };
  