let inp=document.querySelector("input")
let btn=document.querySelector("button")
let text=document.querySelector("h2")
let form =document.querySelector("form")
let main=document.querySelector("main")
let img=document.querySelector("img")
btn.addEventListener("click",()=>{
// console.log("ok");
if(+inp.value<0||+inp.value>99){

    text.innerHTML="invalid number"

    inp.value=""
    img.style.display="none"
}

else if ( inp.value>0&&inp.value<=99){
 fetch("https://api.imgflip.com/get_memes").
 then((t)=>{
  return t.json()
 }).
 then((mems)=>{
    // console.log(mems.data.memes[inp.value].url);
 text.innerHTML=mems.data.memes[inp.value].name
 img.style.display="block"
img.setAttribute("src",mems.data.memes[inp.value].url)
inp.value=""

 })

}
else{
    text.innerHTML="please inter valid number"
    inp.value=""
    img.style.display="none"
}
}

)
form.addEventListener("submit", (t) => {


    t.preventDefault()
})