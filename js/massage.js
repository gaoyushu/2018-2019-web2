window.onload = function(){
//导航栏（OK）

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

//动效一 购物车+弹出提示框（OK）

	var combchb = document.getElementById("combchb");
	var bigframe = document.getElementById("bigframe");
	var frame = document.getElementById("frame");
	var close = document.getElementById("close");
	var fra = document.getElementById("fra");
	var cart = document.getElementById("cart");
	var num = document.getElementById("comb2num");

	combchb.onclick = function(){
		cart.innerText = num.value;
		bigframe.style.display = "block";
		frame.style.display = "block";
	}
	close.onclick = function(){
		bigframe.style.display = "none";
		frame.style.display = "none";
	}
	fra.onclick = function(){
		bigframe.style.display = "none";
		frame.style.display = "none";
	}

//动效二 放大镜（OK）
	
	var box = document.getElementById("comaa");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var Bimg = document.getElementById("Bimg");
	var slider = document.getElementById("slider");

	img1.onmouseover = function(){
 		slider.style.display = "block";
 		img2.style.display = "block";
 	} 

 	img1.onmouseout = function(){
 		slider.style.display = "none";
 		img2.style.display = "none";
 	}

 	img1.onmousemove = function(event){
 		//slider移动
 		var x = event.clientX;
 		var y = event.clientY;
 		var boxx = box.offsetLeft;
 		var boxy = box.offsetTop;

 		var OL = x - boxx - slider.offsetWidth/2;//鼠标X-box左侧-slider宽度/2
 		var OT = y - boxy - slider.offsetHeight/2;

 		var oMaxw = img1.offsetWidth - slider.offsetWidth;
 		var oMaxh = img1.offsetHeight - slider.offsetHeight;

 		OL = (OL>oMaxw)?(oMaxw):((OL<0)?0:OL);
 		OT = (OT>oMaxh)?(oMaxh):((OT<0)?0:OT);

 		slider.style.left = OL + "px";
 		slider.style.top = OT + "px";

 		//img2放大图
 		var maxOL = -OL*(1.5);
 		var maxOT = -OT*(1.5);

 		Bimg.style.left = maxOL + "px";
 		Bimg.style.top = maxOT + "px";
 	}

//动效三 左右选择（OK）

	var box = document.getElementById("comaa");
	var img11 = document.getElementById("img11");
	var img2 = document.getElementById("img2");
	var Bimg = document.getElementById("Bimg");
	var slider = document.getElementById("slider");
	var comul = document.getElementById("comul").children;
	var right = document.getElementById("spanr");
	var left = document.getElementById("spanl");

	for(var i=0; i<comul.length; i++){
		comul[i].index = i;
		comul[i].onmouseover = function(){
			for(var j=0; j<comul.length; j++){
				if(j!=this.index)
					comul[j].className="";
			}
			this.className="change";
			img11.src="../img/pp"+(this.index)+".jpeg";
			Bimg.src="../img/pp"+(this.index)+".jpeg";
		}
	}

	left.onclick=function(){
		for(var i=0; i<comul.length; i++){
			if(comul[i].className=="change" && i!=0){
				comul[i-1].className="change";
				comul[i].className="";
				img11.src="../img/pp"+(i-1)+".jpeg";
				Bimg.src="../img/pp"+(i-1)+".jpeg";
			}
		}
	}

	right.onclick=function(){
		for(var i=0; i<comul.length; i++){
			if(comul[i].className=="change" && i!=comul.length-1){
				comul[i+1].className="change";
				comul[i].className="";
				img11.src="../img/pp"+(i+1)+".jpeg";
				Bimg.src="../img/pp"+(i+1)+".jpeg";
			}
		}
	}

//动效四 选择净含量（OK）

	var combba = document.getElementById("combba");
	var comb1List = document.getElementById("comb1").children;
	var comb1text = document.getElementById("comb1text");

	for(var i=0; i<comb1List.length; i++){
		comb1List[i].index=i;
		comb1List[i].onclick=function(){
			for(j=0;j<comb1List.length;j++){
				if(j!=this.index)
					comb1List[j].className="";
			}
			this.className="choose";
			var text = '"'+this.innerText+'"';
			comb1text.innerText=text;
		}
	}

//动效四 选择件数(OK)

	var plus = document.getElementById("plus");
	var num = document.getElementById("comb2num");
	var reduce = document.getElementById("reduce");
	var max = document.getElementById("comb2max");

	plus.onclick=function(){
		if(num.value >= max.innerText){
			plus.style.cursor = "not-allowed";
			reduce.style.cursor = "pointer";
		}
		else if(num.value == max.innerText-1){
			plus.style.curso = "not-allowed";
			reduce.style.cursor = "pointer";
			num.value++;
		}
		else{
			plus.style.cursor = "pointer";
			reduce.style.cursor = "pointer";
			num.value++;
		}
	}

	reduce.onclick=function(){
		if(num.value <= 1){
			reduce.style.cursor = "not-allowed";
			plus.style.cursor = "pointer";
		}
		else if(num.value == 2){
			reduce.style.cursor = "not-allowed";
			plus.style.cursor = "pointer";
			num.value--;
		}
		else{
			reduce.style.cursor="pointer";
			plus.style.cursor="pointer";
			num.value--;
		}
	}
}