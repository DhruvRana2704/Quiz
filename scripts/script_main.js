let module1=document.querySelector(".m1")
let module2=document.querySelector(".m2")
let module3=document.querySelector(".m3")
let module4=document.querySelector(".m4")
let module5=document.querySelector(".m5")

module1.addEventListener('click',async()=>{
   const response=await fetch('https://the-trivia-api.com/v2/questions?limit=10&difficulty=medium&categories=science') 
    const data=await response.json()
    console.log(data)
    localStorage.setItem('selectedCategory', module1.innerHTML);

    window.location.href = 'module1.html'; // redirect to the questions page
  
})
module2.addEventListener('click',async()=>{
   const response=await fetch('https://the-trivia-api.com/v2/questions?limit=10&difficulty=medium&categories=general_knowledge') 
    const data=await response.json()
    console.log(data)
    localStorage.setItem('selectedCategory', "general_knowledge");

    window.location.href = 'module1.html'; // redirect to the questions page
  
})
module3.addEventListener('click',async()=>{
   const response=await fetch('https://the-trivia-api.com/v2/questions?limit=10&difficulty=medium&categories=geography') 
    const data=await response.json()
    console.log(data)
    localStorage.setItem('selectedCategory', "geography");

    window.location.href = 'module1.html'; // redirect to the questions page
  
})
module4.addEventListener('click',async()=>{
   const response=await fetch('https://the-trivia-api.com/v2/questions?limit=10&difficulty=medium&categories=film_and_tv') 
    const data=await response.json()
    console.log(data)
    localStorage.setItem('selectedCategory', "film_and_tv");

    window.location.href = 'module1.html'; // redirect to the questions page
  
})
module5.addEventListener('click',async()=>{
   const response=await fetch('https://the-trivia-api.com/v2/questions?limit=10&difficulty=medium&categories=food_and_drink') 
    const data=await response.json()
    console.log(data)
    localStorage.setItem('selectedCategory', "food_and_drink");

    window.location.href = 'module1.html'; // redirect to the questions page
  
})