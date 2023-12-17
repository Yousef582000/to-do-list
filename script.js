let inpt=document.getElementById('inp-box');
const btn=document.getElementById('btn')
let listdata=document.getElementById('list-data');




function addtask(){
   if(inpt.value==""){
    alert("you must write any tasks ")
   }
   else{
    let li=document.createElement('li');
    li.innerHTML=inpt.value;
    listdata.appendChild(li)
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span)
   }
   inpt.value=" ";
   savadata();
}
listdata.addEventListener("click",function(e){

    if(e.target.tagName=="LI")
    {
        e.target.classList.toggle("checked");
        savadata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savadata();
    }
   

}, false);

document.body.addEventListener("keydown",function(e){

   if(e.keyCode==13 && inpt.value!=" ")
{
    addtask()
}
})

function savadata(){
    localStorage.setItem("date",listdata.innerHTML)
}
function showdata(){
    listdata.innerHTML=localStorage.getItem("date")
}
showdata();
