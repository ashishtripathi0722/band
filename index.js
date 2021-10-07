
var totalButton=document.querySelectorAll(".drum").length;

for(var i=0;i<totalButton;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

console.log(this.style.color="white");
curr=this.innerHTML;
if(curr=='w')
{var audi=new Audio("tom-1.mp3");
audi.play()
}
else if(curr=='a')
{var audi=new Audio("tom-2.mp3");
audi.play()
}
else if(curr=='s')
{var audi=new Audio("tom-3.mp3");
audi.play()
}
else if(curr=='d')
{var audi=new Audio("tom-4.mp3");
audi.play()
}
else if(curr=='j')
{var audi=new Audio("snare.mp3");
audi.play()
}
else if(curr=='k')
{var audi=new Audio("kick-bass.mp3");
audi.play()
}
else if(curr=='l')
{var audi=new Audio("crash.mp3");
audi.play()
}
else
{}

});


}


// var totalButton=document.querySelectorAll(".drum").length;
// for(var i=0;i<totalButton;i++)
// {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//
//     this.style.color="white";
//   });
//
// }



          //
