var list=[];


function validate(){
 var validEle=document.body.querySelector(".vali");
  var username=document.body.querySelector(".username").value;
  var password=document.body.querySelector(".password").value;

  
  if(username==="cool"){
  validEle.innerHTML=""
  document.body.querySelector(".username").style.visibility="hidden";
  document.body.querySelector(".password").style.visibility="hidden";
  document.body.querySelector(".validate").style.visibility="hidden";
    document.body.querySelector(".write").style.visibility="visible";
  document.body.querySelector(".submit").style.visibility="visible";
  document.body.querySelector(".nav").style.visibility="visible";
}else{
  validEle.innerHTML="Invalid information try again"
}  

  
  
  if(password==="password"){
  validEle.innerHTML=""
   document.body.querySelector(".username").style.visibility="hidden";
  document.body.querySelector(".password").style.visibility="hidden";
  document.body.querySelector(".validate").style.visibility="hidden";
    document.body.querySelector(".write").style.visibility="visible";
    document.body.querySelector(".submit").style.visibility="visible";
  document.body.querySelector(".nav").style.visibility="visible";
}else{
  validEle.innerHTML="Invalid information try again"
}    
}
document.body.querySelector(".validate").addEventListener("click",function(){
  validate();
})

document.body.querySelector(".nav").style.visibility="hidden";
 var write=document.body.querySelector(".write").style.visibility="hidden";




function renderList(){
  var listEle=document.body.querySelector(".list");
  listEle.innerHTML="";
  for(var i=0; i<list.length; i++){
    var element=document.createElement("div");
    element.innerHTML=list[i];
    listEle.appendChild(element);
  }
}





function submit(){
   var text=document.body.querySelector(".iitem").value;
   var run=document.body.querySelector(".run").value;
  if(text.length>0&&run.length>0){
      list.push("Student Name: "+text+  "  Grade: "+run+"%");
    document.body.querySelector(".dothings").innerHTML="" ;
  }else{
    window.alert("Did not enter any or enough letters");
  }
  renderList();
  if (isNaN(run)){
    window.alert("The Grade has to be a number in order to process.");
    document.body.querySelector(".list").innerHTML="" ;
  }
  GradePage();
}

document.body.querySelector(".submit").addEventListener("click",function(){
  submit();
})
renderList();
var nav= document.body.querySelector(".nav");
var display= document.body.querySelector(".display");
var pages= [
    {
    title:"View Grades",
    content:""
  },
    {
    title:"Add Grade",
    content:""
  }
]
for(var i=0; i<pages.length; i++){
new pageMaker(pages[i]);
}





function pageMaker(pg){
  this.button=document.createElement("button");
  this.button.addEventListener("click", function(){    
   writestuff(pg.content,pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}



function writestuff(stuff,pg){
  if(pg=="View Grades") {
  GradePage();  
  }if (pg=="Add Grade") {
    AddPage();
  }
}




function GradePage(){
display.innerHTML="";
var heading = document.createElement("h1");
  heading.innerHTML="Grades";
  display.appendChild(heading);
     document.body.querySelector(".write").style.visibility="hidden";
    document.body.querySelector(".submit").style.visibility="hidden";
}






function AddPage(){
display.innerHTML="";
var addheading = document.createElement("h1");  
  addheading.innerHTML="Add grade";
  display.appendChild(addheading);
     document.body.querySelector(".write").style.visibility="visible";
    document.body.querySelector(".submit").style.visibility="visible";
}





writestuff(pages[0].content,"Grade","Add Grade");