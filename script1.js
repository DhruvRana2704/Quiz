let formObject = sessionStorage.getItem("formObject")
let formData = JSON.parse(formObject)
let q1=document.getElementById('q1')
let result=document.getElementById('result')
let points=document.querySelector('.points')
let selected=[]
let m1_res =['118', 'Venus', 'Nicolaus Copernicus', 'Saturn', 'Mercury', 'Jaw', 'Eyes', '3', 'Heliocentrism', 'Photosynthesis']
let count =0;
if(formData){
    for (i = 1; i <= 10; i++) {
        if(`${m1_res[i-1]}`)
        {
            document.querySelector(`input[name="q${i}"][value="${m1_res[i-1]}"]`).checked=true
        }
        if (m1_res[i-1] == formData[`q${i}`]) {
            document.querySelector(`.correct${i}`).innerHTML='✅'
            count=count+1;
        }
    }
    points.innerHTML=count
}