 window.onload=function(){
	 var asd=document.getElementById("qe"); 
     var we=asd.getElementsByTagName("li");
     var qw=document.getElementById("marker");
	 for(var i=0;i<we.length;i++){
	    we[i].index=i;
	    we[i].onmouseover=function(){
	    qw.style.left=this.offsetLeft+"px";
        qw.style.width=this.offsetWidth+"px";
	 }
	    we[i].onmouseout=function(){
        qw.style.width=we[0].offsetWidth+"px";
	    qw.style.left= we[0].offsetLeft+"px";
	 
     };
	} ;
	
	 var timer=null; 
     var bSys=true;
	 window.onscroll=function(){
            var sheight=document.documentElement.scrollTop||document.body.scrollTop;
            if(sheight>200){
            sdf.style.display="block";	
        } else {sdf.style.display="none";}
        if(!bSys)
        {
            clearInterval(timer);
        }
        bSys=false;
     
     };

        var sdf=document.getElementById("btn");
         
        sdf.onclick=function(){
        timer=setInterval(function(){
        var wer=document.documentElement.scrollTop||document.body.scrollTop ;
        var ispeed = Math.floor( - wer/6) ;
     	document.documentElement.scrollTop=document.body.scrollTop = wer+ispeed;
       if(wer===0){
     	clearInterval(timer);
     }

     bSys=true;

     },30);

 };

   
};
