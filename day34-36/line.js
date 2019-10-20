//绘制折线图
function drawLineChart(lineDataList) {
    let lineLen = lineDataList.length;
    let canvas = document.querySelector("#line-chart");
    let ctx = canvas.getContext('2d');
    let xAxisWidth = 800; //x轴宽度
    let yAxisHeight = 300; //y轴高度
    let pointDiam = 10; //数据点直径
    let pointColor = "#60ACFC"; //数据点颜色
    let pointHeight = new Array();
    let lineWidth = 1; //连线的宽度
    let lineColor = "#60ACFC"; //连线的颜色
    let pointSpace = 28; //两数据点之间间隔
    let maxNum = 0;

    //定义画布尺寸
    canvas.setAttribute("width", "700");
    canvas.setAttribute("height", "300");

    //根据最大值绘制绘制图像区域高度
    lineDataList.forEach(function (val) {
        if (maxNum <= val) {
            maxNum = val;
        }
    });

    for (i = 0; i < lineLen; i++) {
        pointHeight.push(lineDataList[i] * 50 / maxNum);
    }


    //绘制横轴和纵轴
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#666";
    ctx.moveTo(10, 300);
    ctx.lineTo(xAxisWidth - 15, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#666";
    ctx.moveTo(20, 20);
    ctx.lineTo(20, yAxisHeight + 15);
    ctx.stroke();

    lineDataList.forEach(function(val, idx, arr) {
        //记录上一个与这一个数据点的宽度和高度
        var nowWidth = 20 + pointSpace * (2 * idx + 1);
        var nowHeight = yAxisHeight - pointHeight[idx];
        var lastWidth = 20 + pointSpace * (2 * (idx - 1) + 1);
        var lastHeight = yAxisHeight - pointHeight[idx - 1];
        //绘制每个数据点
        ctx.beginPath();
        ctx.fillStyle = pointColor;
        ctx.arc(nowWidth, nowHeight, pointDiam / 2, 0, Math.PI*2, true);
        ctx.fill();

        //绘制连线
        if(idx) {
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = lineColor;
            ctx.moveTo(lastWidth, lastHeight);
            ctx.lineTo(nowWidth, nowHeight);
            ctx.stroke();
        }

    });
}