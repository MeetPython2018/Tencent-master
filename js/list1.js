window.onload=function () {
    let bh=document.querySelector(".banner");
    let banner=bh.querySelector(".banner_wrap");
    let bg=bh.querySelectorAll(".bg");
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
            btns[i].style.backgroundPosition="0 -8px";
        }
        bg[num].style.zIndex=10;
        btns[num].style.backgroundPosition="0 0";
    }
    //按钮移入事件
    for(let j=0;j<btns.length;j++){
        btns[j].onmouseenter=function(){
            for (let i=0;i<bg.length;i++){
                bg[i].style.zIndex=5;
                btns[i].style.backgroundPosition="0 -8px";
            }
            bg[j].style.zIndex=10;
            btns[j].style.backgroundPosition="0 0";
        };
    }
    //鼠标移入停止轮播
    banner.onmouseenter=function () {
        clearInterval(t);
    };
    //鼠标移出开始轮播
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    //楼层效果
    let header=document.querySelector(".header");
    console.log(header);
    window.onscroll=function () {
        let scrollH=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollH>600){
            animate(header,{top:0});
        }
        if(scrollH<600){
            animate(header,{top:-77});
        }
    }
}