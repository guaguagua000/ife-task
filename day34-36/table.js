var tableWrapper = document.querySelector("#table-wrapper");
var tableBox = tableWrapper.querySelector("table");

//渲染到网页上
function renderTable(data) {
	var dataLen = data.length;
	var regionNums = countSelectedNum(regionOptions);
	var productNums = countSelectedNum(productOptions);
	var th = "<tr>";
	if(regionNums === 1 && productNums > 1) {
		th += "<th>地区</th><th>商品</th>"
	} else {
		th += "<th>商品</th><th>地区</th>";
	}
	th +="<th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>";
	var td = "<tr>"
	for(var i = 0; i < dataLen; i++) {
		if(regionNums === 1 && productNums > 1) {
			td += "<td>" + data[i].region + "</td>";
			td += "<td>" + data[i].product + "</td>";
		} else {
			td += "<td>" + data[i].product + "</td>";
			td += "<td>" + data[i].region + "</td>";
		}
		td += "<td>" + data[i].sale.join("</td><td>") + "</td></tr>";
	}
	tableBox.innerHTML = th + td;
	mergeCell(tableBox);
}

//合并相同单元格
function mergeCell(table) {
	var rows = table.querySelectorAll("tr");
	var mix = 1;
	var markCell = rows[1].querySelectorAll("td")[0];
	for(var i = 1; i < rows.length - 1; i++) {
		var firstCell = rows[i].querySelectorAll("td")[0]; //每行的第一个单元格
		var nextCell = rows[i + 1].querySelectorAll("td")[0]; //下一行的第一个单元格
		if(firstCell.innerHTML === nextCell.innerHTML) {
			mix++;
			nextCell.style.display = "none";
		} else {
			markCell.setAttribute("rowspan", mix);
			mix = 1;
			markCell = nextCell;
		}
	}
	markCell.setAttribute("rowspan", mix);
}

//计算被选中的选项个数
function countSelectedNum(optionsList) { 
	var num = 0;
	optionsList.forEach(function(val, idx, arr) {
		if(arr[idx].checked) {
			num ++;
		}
	});
	return num;
}

tableBox.addEventListener("mouseover", function (e) {
	var e = e || window.event;
	var target = e.target || e.srcElement;
	if(target.nodeName.toLowerCase() === "td") {
		var tr = e.path[1];
		var tds = tr.children;
		var tdsValue = new Array();
		for (var i = 2; i < 14; i++) {
			if (tds[i].nodeName.toLowerCase() === "td") {
				tdsValue.push(tds[i].innerHTML);
			}
		}
		drawBarGraph(tdsValue);
		drawLineChart(tdsValue);
	}
});