let d1=document.querySelector(".everything");
for(let i=1;i<=5; i++){
d1.insertAdjacentHTML("beforeend",`<div class="container"><div class="bar bar${i}"></div></div>`);
  /*all progress bars starting at the same time*/
 let myInterval1= setInterval(function() {progress(document.querySelector(`.bar${i}`), `myInterval${i}`)},1000*i);
  
  /* progress bars starting after each other*/
//  let myIntervall= setInterval(
//    function() {progress(document.querySelector(`.bar1`),i, myIntervall)}
// ,100*i);
}


let progress=function(barname, intervalname){
  
  // console.log(intervalname);
  let currentWidth= barname.offsetWidth;
  let newWidth= currentWidth+1;
  let FixedWidth=newWidth/10;
    barname.innerHTML=FixedWidth.toFixed()+"%";

  barname.style.width=newWidth+"px";   
  
    if (newWidth>=1000){
       barname.innerHTML="Full";   
    clearInterval(intervalname);
//       let intervalName="myInterval"+barNumber;
//       console.log(intervalName);
//        let myInterval2= setInterval(
//    function() {progress(document.querySelector(`.bar${barNumber}`),barNumber, myInterval2)}
// ,100);
  // }
}
}
