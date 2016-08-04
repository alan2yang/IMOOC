 window.onload=function(){
   var tag=document.getElementById("title");
    var tags=tag.getElementsByTagName("li");
    var content=document.getElementById("main");
    var contents=content.getElementsByTagName("div");
    for(var i=0;i<tags.length;i++){
        tags[i].index=i;//这里是为了后面做铺垫
        //这个铺垫只能在onmouseover外面做？？？？？？？？？一旦tag[i]放到匿名函数内就报错。why???????????????????
        tags[i].onmouseover=function(){
            //为了在切换之后消除原来li的效果，先把整个li全部清零
            for (var i = 0; i < tags.length; i++) {
                tags[i].className="";
            }
            //然后再设置当前的li的类
            this.className="active";//这里用tags[i]为什么会报错？？？？？？？？？？？？？
            //设置下面对应的内容
            for (var i = 0; i < contents.length; i++) {
                contents[i].className="hidde";
            }
            contents[this.index].className="show";
        }
        // tags[i].onmouseout=function(){
        //     this.className="";
        // }
    }
 }