$(function(){
//微信
	var shouye1=$(".shouye1")[0]
	var weixin=$(".weixin")[0]
	shouye1.onmouseover=function(){
		weixin.style.display="block"
	}
	shouye1.onmouseout=function(){
		weixin.style.display="none"
	}
//手机银泰
	var shouye2=$(".shouye2")[0]
	var shouji=$(".shouji")[0]
	shouye2.onmouseover=function(){
		shouji.style.display="block"
	}
	shouye2.onmouseout=function(){
		shouji.style.display="none"
	}
//我的银泰
	var shouye4=$(".shouye4")[0]
	var wode=$(".wode")[0]
	shouye4.onmouseover=function(){
		wode.style.display="block"
	}
	shouye4.onmouseout=function(){
		wode.style.display="none"
	}
//banner右
	for(i=0;i<10;i++){
        one(i);
    }
    function one(z){
	    var fl2=$(".fl2")[z]
		var a=$(".a")[z]
		fl2.onmouseover=function(){
			fl2.style.background="#E5004F"
			a.style.display="block"
		}
		fl2.onmouseout=function(){
			fl2.style.background="#333"
			a.style.display="none"
		}
    }
//banner轮播
	    shuang();
function shuang(){
        var imgs=$(".bannertu");
        var box=$(".banner")[0];
        var left=$(".box-left")[0];
        var right=$(".box-right")[0];
        var dian=$(".circle-a");
        var n=0;       //定义当前图片的初始值
        var next=0;    //定义下一张图片的初始值
        var width=parseInt(getStyle(imgs[0],"width"));//获取图片的宽度 
        var t=setInterval(move,3000);
        function move(){
            next=n+1;
            if(next>=imgs.length){   //      
                next=0;
            }   
            for(var i=0;i<imgs.length;i++){
                dian[i].style.background="#000";
            }
            dian[next].style.background="#E5004F";
            imgs[next].style.left=width+"px";      //保持后一张图片一直在width位置。
            animate(imgs[n],{left:-width},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgs[next],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            n=next;
        }
        function move1(){            //右点击图片移动的方向时----从左到右
            next=n-1;
            if(next<0){          
               next=imgs.length-1;
            }
            for(var i=0;i<imgs.length;i++){
                dian[i].style.background="#000";
            }
            dian[next].style.background="#E5004F";
            imgs[next].style.left=-width+"px";      //保持后一张图片一直在width位置。
            animate(imgs[n],{left:width},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgs[next],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            n=next;
            // n=this.index;
        }
        box.onmouseover=function(){     //鼠标效果
                clearInterval(t);
                left.style.display="block"
                right.style.display="block"
        }
        box.onmouseout=function(){
                 t=window.setInterval(move,3000);
                 left.style.display="none"
                 right.style.display="none"
        }
        // 左右点击
        left.onclick=function(){        //右点击事件         
                move();
        }
        right.onclick=function(){
                move1();
        }
        //小圆的选项卡操作
        for(var i=0;i<dian.length;i++){    //对选项卡进行标识。给它添加一个属性 
                dian[i].index=i;
                dian[i].onmouseover=function(){     //通过点击事件进行操作
                    if(this.index==n){
                        return;
                    }else if(this.index>n){                 //方向从左到右
                        for(var i=0;i<imgs.length;i++){
                           dian[i].style.background="#000";
                        }
                        dian[this.index].style.background="#E5004F";
                        imgs[this.index].style.left=width+"px";      //保持后一张图片一直在width位置。
                        animate(imgs[n],{left:-width},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgs[this.index],{left:0},500);
                        n=this.index;
                    }else if(this.index<n){                     //方向从右到左
                        for(var i=0;i<imgs.length;i++){
                           dian[i].style.background="#000";
                        }
                        dian[this.index].style.background="#E5004F";
                        imgs[this.index].style.left=-width+"px";      //保持后一张图片一直在width位置。
                        animate(imgs[n],{left:width},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgs[this.index],{left:0},500);
                        n=this.index;

                    }
                }
        } 
    }

//超值特卖选项卡
    chaozhi()
    function chaozhi(){
        var y=$(".cztmbox")
        var d=$(".cztm2")
        for(var i=0;i<d.length;i++){
            d[i].index=i
            d[i].onmouseover=function(){
                    for(var i=0;i<d.length;i++){
                        d[i].style.borderBottom="0"
                        y[i].style.display="none"
                    }
                    d[this.index].style.borderBottom="4px solid #E80050"
                    y[this.index].style.display="block"
                }
        }
}
// 专柜选项卡
    zhuangui()
    function zhuangui(){
        var y=$(".zgbox")
        var d=$(".zg4")
        for(var i=0;i<d.length;i++){
            d[i].index=i
            d[i].onmouseover=function(){
                    for(var i=0;i<d.length;i++){
                        d[i].style.borderBottom="0"
                        y[i].style.display="none"
                    }
                    d[this.index].style.borderBottom="3px solid #E80050"
                    y[this.index].style.display="block"
                }
        }
}
// 超值特卖框
    for(i=0;i<12;i++){
        cz(i)
    }
   function cz(a){
    var k=$(".cztm3")[a]
    var yi=$(".bk-1")[a]
    var er=$(".bk-2")[a]
    var san=$(".bk-3")[a]
    var si=$(".bk-4")[a]
    k.onmouseover=function(){
        animate(yi,{width:222},500)
        animate(er,{height:262},500)
        animate(san,{width:221},500)
        animate(si,{height:261},500)
    }
    k.onmouseout=function(){
        animate(yi,{width:1},500)
        animate(er,{height:1},500)
        animate(san,{width:1},500)
        animate(si,{height:1},500)
    }
}
// 专柜框
    for(i=0;i<8;i++){
        zg(i)
    }
   function zg(a){
    var k=$(".zg10")[a]
    var yi=$(".bk-11")[a]
    var er=$(".bk-22")[a]
    var san=$(".bk-33")[a]
    var si=$(".bk-44")[a]
    k.onmouseover=function(){
        animate(yi,{width:200},500)
        animate(er,{height:250},500)
        animate(san,{width:200},500)
        animate(si,{height:250},500)
    }
    k.onmouseout=function(){
        animate(yi,{width:1},500)
        animate(er,{height:1},500)
        animate(san,{width:1},500)
        animate(si,{height:1},500)
    }
}  
//时尚名品轮播
    var box=$(".ssmp6");
    for(var i=0;i<box.length;i++){
        shuang1(i)
    }
function shuang1(a){
        var box=$(".ssmp6")[a];
        var imgs=$(".ssmp6a",box);
        var left=$(".boxleft",box)[0];
        var right=$(".boxright",box)[0];
        var dian=$(".circlea",box);
        var n=0;       //定义当前图片的初始值
        var next=0;    //定义下一张图片的初始值
        var width=parseInt(getStyle(imgs[0],"width"));//获取图片的宽度 
        var t=setInterval(move,3000);
        function move(){
            next=n+1;
            if(next>=imgs.length){   //      
                next=0;
            }   
            for(var i=0;i<imgs.length;i++){
                dian[i].style.background="#000";
            }
            dian[next].style.background="#E5004F";
            imgs[next].style.left=width+"px";      //保持后一张图片一直在width位置。
            animate(imgs[n],{left:-width},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgs[next],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            n=next;
        }
        function move1(){            //右点击图片移动的方向时----从左到右
            next=n-1;
            if(next<0){          
               next=imgs.length-1;
            }
            for(var i=0;i<imgs.length;i++){
                dian[i].style.background="#000";
            }
            dian[next].style.background="#E5004F";
            imgs[next].style.left=-width+"px";      //保持后一张图片一直在width位置。
            animate(imgs[n],{left:width},500);   //当前图片位置为0；动画时向左移动一个width
            animate(imgs[next],{left:0},500);      //后一张图片得移动到当前图片的位置 为0；
            n=next;
            // n=this.index;
        }
        box.onmouseover=function(){     //鼠标效果
                clearInterval(t);
                left.style.display="block"
                right.style.display="block"
        }
        box.onmouseout=function(){
                 t=window.setInterval(move,3000);
                 left.style.display="none"
                 right.style.display="none"
        }
        // 左右点击
        left.onclick=function(){        //右点击事件         
                move();
        }
        right.onclick=function(){
                move1();
        }
        //小圆的选项卡操作
        for(var i=0;i<dian.length;i++){    //对选项卡进行标识。给它添加一个属性 
                dian[i].index=i;
                dian[i].onmouseover=function(){     //通过点击事件进行操作
                    if(this.index==n){
                        return;
                    }else if(this.index>n){                 //方向从左到右
                        for(var i=0;i<imgs.length;i++){
                           dian[i].style.background="#000";
                        }
                        dian[this.index].style.background="#E5004F";
                        imgs[this.index].style.left=width+"px";      //保持后一张图片一直在width位置。
                        animate(imgs[n],{left:-width},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgs[this.index],{left:0},500);
                        n=this.index;
                    }else if(this.index<n){                     //方向从右到左
                        for(var i=0;i<imgs.length;i++){
                           dian[i].style.background="#000";
                        }
                        dian[this.index].style.background="#E5004F";
                        imgs[this.index].style.left=-width+"px";      //保持后一张图片一直在width位置。
                        animate(imgs[n],{left:width},500);   //当前图片位置为0；动画时向左移动一个width
                        animate(imgs[this.index],{left:0},500);
                        n=this.index;

                    }
                }
        } 
    }
//左轮播
    var box=$(".ssmp4")
    for(var i=0;i<9;i++){
        zuo(i)
    }
    function zuo(n){
    var box=$(".ssmp4")[n]
    var tu=$(".ssmp4box",box)
    var zuo=$(".ssmp4zuo")[n]
    var you=$(".ssmp4you")[n]
    var n=0
    var next=0
    zuo.onclick=function(){
        move1()
    }
    you.onclick=function(){
        move()
    }
        function move(){
            next=n+1
            if(next>=tu.length){
                next=0
            }
            tu[next].style.left=200+"px"
            animate(tu[n],{left:-200},500)
            animate(tu[next],{left:0},500)
            n=next
        }
        function move1(){
            next=n-1
            if(next<0){
                next=tu.length-1
            }
            tu[next].style.left=-200+"px"
            animate(tu[n],{left:200},500)
            animate(tu[next],{left:0},500)
            n=next
        }
}	
//楼层框
    for(var i=0;i<36;i++){
        loucengk(i)
    }
    function loucengk(n){
    var k=$(".ssmp7")[n]
    var yi=$(".bk-111")[n]
    var er=$(".bk-222")[n]
    var san=$(".bk-333")[n]
    var si=$(".bk-444")[n]
    k.onmouseover=function(){
        animate(yi,{width:272},500)
        animate(er,{height:182},500)
        animate(san,{width:272},500)
        animate(si,{height:182},500)
    }
    k.onmouseout=function(){
        animate(yi,{width:1},500)
        animate(er,{height:1},500)
        animate(san,{width:1},500)
        animate(si,{height:1},500)
    }
}
//楼层跳转
    louceng()
function louceng(){
    var box=$(".ssmp")
    var shu=$(".gundongtiao")[0]
    var k=$(".gundong-shu")
    var flag3=true
    var shuzu=[
    {a1:"时尚名品"},
    {a1:"潮流女装"},
    {a1:"精品男装"},
    {a1:"时尚鞋靴"},
    {a1:"潮流箱包"},
    {a1:"美容护肤"},
    {a1:"运动户外"},
    {a1:"内衣配饰"},
    {a1:"婴童家居"},
    {a1:"返回顶部"},
    ]
    var width=document.documentElement.clientWidth
    var height=document.documentElement.clientHeight
    var shuk=shu.offsetHeight
    shu.style.top=(height-shuk)/2+"px"
    for(var i=0;i<k.length;i++){
        k[i].index=i
        k[i].onclick=function(){
            flag3=false
            for(var i=0;i<k.length;i++){
                k[i].style.background="transparent"
                k[i].innerHTML=""
            }
            k[this.index].style.background="#e5004f"
            k[this.index].innerHTML=shuzu[this.index]["a1"]
            if(this.index==9){
                // 不同浏览器获取滚动条
                var obj=document.documentElement.scrollTop?document.documentElement:document.body
                // 点击返回顶部
                animate(obj,{scrollTop:100},300,function(){
                flag3=true
            })
            }else{
                // 不同浏览器获取滚动条
                var obj=document.documentElement.scrollTop?document.documentElement:document.body
                // 获取滚动条的高度
                var top=box[this.index].offsetTop
                // 滚动条动画
                animate(obj,{scrollTop:top-100},300,function(){
                    flag3=true
                })
            }
            
        }
    }
    // 滚动事件
    window.onscroll=function(){
        if(!flag3){
            return 0
        }
        var flag=true;
        var flag1=true;
        // 不同浏览器获取滚动条
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        
        for(var i=0;i<box.length;i++){
            // 循环所有元素归0
            if(obj.scrollTop>box[i].offsetTop-height+100){
                for(var j=0;j<k.length;j++){
                     k[j].style.background="transparent";
                     k[j].innerHTML=""
                }
                // 当前变为灰色
            k[i].style.background="#e5004f"
            k[i].innerHTML=shuzu[i]["a1"]
            }
        } 
        // 判断滚动条的高度
        if(obj.scrollTop>box[0].offsetTop-height+100){
            if(flag){
            flag=false;
            // 滚动条出现
                animate(shu,{opacity:1},500,function(){
                    flag1=true;
                })
            }
        
        }else{
            if(flag1){
                flag1=false;
                // 滚动条消失
                animate(shu,{opacity:0},500,function(){
                    flag=true
                })
            }
        }
        
    }
}


})

