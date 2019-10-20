//绘制柱状图
function drawBarGraph(barDataList) { 
	let dataLen = barDataList.length;
	let wrapper = document.querySelector("#bar-graph-wrapper");
	let svg = document.querySelector("#bar-graph"); //画布
	let xAxisWidth = 800;
	let yAxisHeight = 300;
	let bar = new Array(dataLen);
	let barWidth = 45;
	let barHeight = new Array();
	let barSpace = 18;
	let barColor = "#60ACFC";
	let maxNum = 0;

	//将画布清空
	svg.innerHTML = "";

	//定义画布尺寸
	svg.setAttribute("style", "width: 700px; height: 300px");

	//根据最大值绘制绘制图像区域高度
	barDataList.forEach(function(val) {
		if(maxNum <= val) {
			maxNum = val;
		}
	});

	for(i = 0; i < dataLen; i++) {
		barHeight.push(barDataList[i] * 100 / maxNum);
	}
	console.log(barHeight);

	//绘制横轴与纵轴
	let xAxis = document.createElementNS("http://www.w3.org/2000/svg", "path");
	let yAxis = document.createElementNS("http://www.w3.org/2000/svg", "path");

	//定义轴的宽度高度
	xAxis.setAttribute("d", "M 5 " + yAxisHeight + " h " + xAxisWidth);
	xAxis.setAttribute("style", "fill: transparent; stroke: #666");
	yAxis.setAttribute("d", "M 15 15" + " v " + yAxisHeight); 
	yAxis.setAttribute("style", "fill: transparent; stroke: #666");
	svg.appendChild(xAxis);
	svg.appendChild(yAxis);

	for(i = 0; i < dataLen; i++) {
		bar[i] = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		bar[i].setAttribute("width", barWidth);
		bar[i].setAttribute("height", barHeight[i]);
		bar[i].setAttribute("x", barSpace * (i + 1) + barWidth * i);
		bar[i].setAttribute("y", yAxisHeight - barHeight[i]);
		bar[i].setAttribute("style", "fill:" + barColor);
		svg.appendChild(bar[i]);
	}

}