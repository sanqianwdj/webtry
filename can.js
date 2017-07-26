function init() {
    if (!document.getElementById("myCanvas")) {
        var width = "";
        var height = "";
        var canvas = document.createElement("canvas");
        width = document.getElementById("div").offsetWidth;
        height = document.getElementById("div").offsetHeight;
        canvas.setAttribute("width", width + "px");
        canvas.setAttribute("height", height + "px");
        canvas.setAttribute("style", "border:1px solid green");
        canvas.id = "myCanvas";
        document.getElementById("div").appendChild(canvas);
    }

    var myCanvasObject = document.getElementById("myCanvas");
    var ctx = myCanvasObject.getContext("2d");

    //绘制黑色矩形    
    ctx.beginPath();
    ctx.fillStyle = "#939393";
    ctx.rect(0, 0, width, height);
    ctx.closePath();
    ctx.fill();

    var isDown = false; //鼠标是否按下标志
    var pointerArr = []; //鼠标移动坐标数组
    var xPointer = 0;//鼠标当前x坐标
    var yPointer = 0;//鼠标当前y坐标


    //pc，移动事件兼容写法
    var hastouch = "ontouchstart" in window ? true : false,
    tapstart = hastouch ? "touchstart" : "mousedown",
    tapmove = hastouch ? "touchmove" : "mousemove",
    tapend = hastouch ? "touchend" : "mouseup";


    //鼠标按下
    myCanvasObject.addEventListener(tapstart, function(e) {
        this.style.cursor = "move";
        isDown = true;
        xPointer = hastouch ? e.targetTouches[0].pageX : e.clientX - this.offsetLeft;
        yPointer = hastouch ? e.targetTouches[0].pageY : e.clientY - this.offsetTop;;
        pointerArr.push([xPointer, yPointer]);
        circleReset(ctx);
    });


    //鼠标按下后拖动
    myCanvasObject.addEventListener(tapmove, function(e) {
        if (isDown) {
        xPointer = hastouch ? e.targetTouches[0].pageX : e.clientX - this.offsetLeft;;
        yPointer = hastouch ? e.targetTouches[0].pageY : e.clientY - this.offsetTop;;
        pointerArr.push([xPointer, yPointer]);
        circleReset(ctx);
        }
    });


    //鼠标抬起取消事件
    myCanvasObject.addEventListener(tapend, function(e) {
        isDown = false;
        pointerArr = [];
    });


    //圆形橡皮檫
    function circleReset(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pointerArr[0][0], pointerArr[0][1]);
        ctx.lineCap = "round";　　 //设置线条两端为圆弧
        ctx.lineJoin = "round";　　 //设置线条转折为圆弧
        ctx.lineWidth = 60;
        ctx.globalCompositeOperation = "destination-out";
        if (pointerArr.length == 1) {
            ctx.lineTo(pointerArr[0][0] + 1, pointerArr[0][1] + 1);
        } else {
            for (var i=1;i<pointerArr.length;i++) {
                ctx.lineTo(pointerArr[i][0], pointerArr[i][1]);
                ctx.moveTo(pointerArr[i][0], pointerArr[i][1]);
            }
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}
