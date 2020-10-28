import x from './x.js'
import jpg from './assets/lion.jpg'
const app=document.querySelector(".app");
const divImg=document.querySelector(".divImg");

console.log(x)

divImg.innerHTML=`<img src="${jpg}" alt="lion">`
const btn=document.createElement("button")
btn.innerText="启动懒加载"
btn.addEventListener('click',()=>{
    const promise = import("./lazyload");
    promise.then((obj)=>{
        console.log(obj.default())
        console.log("加载成功!")
    },()=>{
        console.log("加载失败!")
    })
})
app.appendChild(btn);
