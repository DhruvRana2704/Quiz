let m1=document.querySelector(".m1");
let submit=document.querySelector('.submit')
let min=document.querySelector('.min')
let sec=document.querySelector('.sec')
min.innerHTML=`${5}`.toString().padStart(2,"0")
sec.innerHTML=`${0}`.toString().padStart(2,"0")
let m1_req=document.getElementById("form")
let ips=document.querySelectorAll('input')
let time=document.querySelector('.timesup')
m1_req.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData=new FormData(m1_req)
    let formObject={}
    for(i=1;i<=10;i++){
        formObject[`q${i}`]=formData.get(`q${i}`)
    }
    sessionStorage.setItem("formObject",JSON.stringify(formObject))
    window.open("./result.html","_blank")
    // window.location.replace("./index.html")
})

let interval=setInterval(() => {
    if(sec.innerHTML==0)
    {
        if(min.innerHTML!=0)
            {
                min.innerHTML=`${min.innerHTML-1}`.toString().padStart(2,'0')
                sec.innerHTML=`${60}`.toString().padStart(2,"0")       
            }
        }
        
    sec.innerHTML=`${sec.innerHTML-1}`.toString().padStart(2,"0")
    if(min.innerHTML==0 && sec.innerHTML==0)
    {
        clearInterval(interval)
        submit.click()
        console.log(time)
        time.innerHTML="Time's Up"
        ips.forEach(i => {
            i.disabled=true
        });
    }
},10);