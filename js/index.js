/*
* @Author: cao424519431
* @Date:   2018-07-22 08:50:12
* @Last Modified by:   cao424519431
* @Last Modified time: 2018-07-22 10:23:16
*/
window.onload=function(){
	//顶部选项卡
	let header=document.getElementsByClassName("header")[0];
	let li=header.getElementsByTagName("li");
	let item=header.getElementsByClassName("item");
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			if(i==0){
				item[i].style.height="270px";
			}
			else if(i==1){
				item[i].style.height="90px";
			}
			else if(i==2){
				item[i].style.height="180px";
			}
			else{
				item[i].style.height="90px";
			}
		};
		li[i].onmouseleave=function(){
			item[i].style.height=0;
		}
	}
	let main_wrap=document.querySelector(".main_wrap");
	let banner=main_wrap.querySelector(".banner_wrap");
    let bg=main_wrap.querySelectorAll(".bg");
    let Btn=document.querySelector(".banner-btn");
    let btns=Btn.querySelectorAll("span");
    let t=setInterval(move,2000);
    let num=0;
    //图片轮播事件
    function move() {
    	num++;
    	if(num==bg.length){
    		num=0;
		}
        for (let i=0;i<bg.length;i++){
            bg[i].style.zIndex=5;
            btns[i].style.backgroundPosition="0 0";
        }
        bg[num].style.zIndex=10;
    	btns[num].style.backgroundPosition="-21px 0";
    }
    //按钮移入事件
	for(let j=0;j<btns.length;j++){
        btns[j].onmouseenter=function(){
            for (let i=0;i<bg.length;i++){
                bg[i].style.zIndex=5;
                btns[i].style.backgroundPosition="0 0";
            }
            num=j
            bg[j].style.zIndex=10;
            btns[j].style.backgroundPosition="-21px 0";
        };
    }
    //鼠标移入停止轮播
	banner.onmouseenter=function () {
        clearInterval(t);
    };
	//鼠标移出开始轮播
	banner.onmouseleave=function () {
        t=setInterval(move,2500);
    };
	/*let main_wrap=document.querySelector(".main_wrap");
    let banner=document.querySelector(".banner");
    let main=document.querySelector(".main");
    function hb(value) {
        let banner=value.querySelector(".banner_wrap");
        let bg=banner.querySelectorAll(".bg");
        let Btn=banner.querySelector(".banner-btn");
        let btns=Btn.querySelectorAll("span");
        let num=0;
        let t=setInterval(move,2000);
        function move() {
            num++;
            if(num==bg.length){
                num=0;
            }
            for (let i=0;i<bg.length;i++){
                bg[i].style.zIndex=5;
                btns[i].style.backgroundPosition="0 0";
            }
            bg[num].style.zIndex=10;
            btns[num].style.backgroundPosition="-21px 0";
        }
        for(let j=0;j<btns.length;j++){
            btns[j].onmouseenter=function(){
                for (let i=0;i<bg.length;i++){
                    bg[i].style.zIndex=5;
                    btns[i].style.backgroundPosition="0 0";
                }
                bg[j].style.zIndex=10;
                btns[j].style.backgroundPosition="-21px 0";
            };
        }
        banner.onmouseenter=function () {
            clearInterval(t);
        };
        banner.onmouseleave=function () {
            t=setInterval(move,2000);
        };
    }
    hb(main_wrap);*/
}