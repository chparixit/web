let btn_no = document.getElementsByClassName("btn")[1];
let btn_yes = document.getElementsByClassName("btn")[0];
let img_box = document.getElementsByClassName("boxx")[0];
let img_text = document.getElementsByClassName("yes-text")[0];
let i=20;
let j=19;
let k=0;

const reply = ["Please","pleaseeeeeee","Ahhh bhana naa","Y E S", "Lets try again", "Please na", "huhuhuhu",
 "OK last time",
 "Ok lala lastest time",
"huhu kasto k", "Its spelled Yes",
"Y E S", "mana na",
"huhuhu","kasto nisthuri" ]
let a=0
btn_no.addEventListener("click",()=>{
    a=a+1
    btn_yes.style.padding = `${i}px`;
    i = i+3;
    btn_no.style.fontSize =  `${j}px`;
    btn_no.style.padding = `${j-11}px ${j}px`;
    j=j-1;
    btn_yes.innerHTML=reply[k]
    k=k+1;
    if (j<=10){
        j=10;
    }
    if (k>=3) {
        img_box.style.backgroundImage = `url("cat2.gif")`;
    }
    if (k>=7){
        img_box.style.backgroundImage = `url("cat3.gif")`;
    }
    if (k >= 14){
        k=14;
    }
     if(a>=14){
       btn_yes.innerHTML="Hehe aba ta bhannai paryo yes"
       btn_no.disabled = true
       btn_no.style.display = "none";
    }
    

})

btn_yes.addEventListener("click",()=>{
    let z =4;
    img_box.style.backgroundImage = `url("cat${z}.gif")`;
    setInterval(()=>{
        z=z+1
        img_box.style.backgroundImage = `url("cat${z}.gif")`;
        if (z>=8) {
            z=4;
        }
    }, 4000)
    btn_no.style.display="none";
    btn_yes.style.display="none";
    img_text.style.display="block"

})
