
let links = document.getElementsByClassName('tabs');
for (let i = 0; i < links.length; i++) {
   links[i].onmouseover = function(){
       let tooltip = document.getElementsByClassName('tooltip')
       let too = tooltip[i];
       too.style.opacity = "1";
       too.style.visibility = "visible";   
       console.log(too)
  }  
  links[i].onmouseout = function(){
    let tooltip = document.getElementsByClassName('tooltip')
    let too = tooltip[i];
    too.style.opacity = "0";
    too.style.visibility = "hidden";   
    console.log(too)
} 
  
}
