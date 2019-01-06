window.onload=function(){
//动效一 导航栏（OK）
	var bigtop = document.getElementById("bigtop");
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		if(st > 130){
			bigtop.style.position='fixed';
		}
		else{
			bigtop.style.position='static';
		}
	}

//动效二 话费充值(OK)

	var money = document.getElementById("money");
	var showmoney = document.getElementById("showmoney");
	

	money.onchange = function(){
		var text = money.value;
		showmoney.innerText = "￥" + text;
	}

//动效三 轮播图

	function animate(obj,json,callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(
			function(){
			var isStop=true;
			for(var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}
				else{
					var now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr]-now)/50;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(attr=='opacity'){
					obj.style[attr]=(now+speed)/100;
				}
				else{
					obj.style[attr] = now+speed+'px';
				}
				var current=now+speed;
				if(json[attr]!==current){
					isStop=false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
			
		},15);
	}
	function getStyle(obj,style) {
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			obj.currentStyle[style];
		}
	}


	var bannerba = document.getElementById("bannerba");
	var banba = document.getElementById("banba");
	var banleft = document.getElementById("banleft");
	var banright = document.getElementById("banright");
	var oNavlist = document.getElementById("nav").children;
	var index = 1;
	var timer = setInterval(next,4000);//next后不要加小括号

	function next(){
		index++;
		animate(banba,{left:-800*index},function(){
			if(index==7){
				banba.style.left='-800px';
				index=1;
			}
		})
		navChange();
	}

	function prev(){
		index--;
		navChange();
		animate(banba,{left:-800*index},function(){
			if(index==0){
				banba.style.left='-4800px';
				index=6;
			}
		})
	}
	//var timer=setInterval(next,3000);
	bannerba.onmouseover=function(){
		banleft.style.display="block";
		banright.style.display="block";
		clearInterval(timer);
	}

	bannerba.onmouseout=function(){
		banleft.style.display="none";
		banright.style.display="none";
		//animate(banleft,{opacity:100});
		//animate(banright,{opacity:100});
		timer=setInterval(next,4000);
	}

	banright.onclick=next;
	banleft.onclick=prev;

	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].idx=i;
		oNavlist[i].onclick=function(){
			index=this.idx+1;
			animate(banba,{left:-800*index});
			navChange();
		}
	}

	function navChange(){
		for(var i=0;i<oNavlist.length;i++){
			oNavlist[i].className='';
		}
		if(index==7){
			oNavlist[0].className='active';
		}
		else if(index==0){
			oNavlist[5].className='active';
		}
		else{
			oNavlist[index-1].className='active';
		}
	}

//动效四 信息滚动
	
	var area =document.getElementById('bancab');
    var con1 = document.getElementById('bancabula');
    var con2 = document.getElementById('bancabulb');

    con2.innerHTML=con1.innerHTML;
    function scrollUp(){
    if(area.scrollTop>=con1.offsetHeight){
        area.scrollTop=0;
    }else{
        area.scrollTop++
    }
    }                
    var time = 50;
    var mytimer=setInterval(scrollUp,time);
    area.onmouseover=function(){
        clearInterval(mytimer);
    }
    area.onmouseout=function(){
        mytimer=setInterval(scrollUp,time);
    }

//动效五 侧边栏
	
	var beside = document.getElementById("beside").children;

	for(var i=0; i<beside.length; i++){
		// beside[i].style.position="absolute";
		// beside[i].style.top=160*i+"px";
	}

	for(var i=0; i<beside.length; i++){
		beside[i].index=i;
		beside[i].onmouseover=function(){
			for(var j=0; j<beside.length; j++){
				if(this.index!=j){
					this.style.right="-80px";
				}
			}
			this.style.right="80px";
			// var timer = setInterval(function () {
			// 	if(this.style.right=="80px")
			// 		clearInterval(timer);
			// 	else{
			// 		this.style.opacity = 1;
			// 		this.style.right="80px";
			// 	}
			// },3000);		
		}
		beside[i].onmouseout=function(){
			this.style.right="0";
		}
	}
}