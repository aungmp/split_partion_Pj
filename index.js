 
 const left=document.querySelector('.left');
 const right=document.querySelector('.right');
 const con =document.querySelector('.container');

 left.addEventListener('mouseenter',()=>{
     con.classList.add("hover_left");
     con.classList.remove("hover_right");
 })
 right.addEventListener('mouseenter',()=>{
    con.classList.add("hover_right");
    con.classList.remove("hover_left");
 })