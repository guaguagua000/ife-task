/**
 * @namespace
 */
var selectBox = document.querySelector("#select-box");
var regionBox = document.querySelector("#region-radio-wrapper");
var productBox = document.querySelector("#product-radio-wrapper");

var regionOptions = document.querySelectorAll("input[name='region']");
var productOptions = document.querySelectorAll("input[name='product']");

var tableWrapper = document.querySelector("#table-wrapper");

var sourceDataLen = sourceData.length;
var originData = new Array();



selectBox.addEventListener("click", function(event) {
	var e = event || window.event;
	var target = e.target || e.srcElement;
	
	if(target.nodeName.toLowerCase() === "input") {
		var newData = new Array();
		var optionsBox = target.name === "region" ? regionOptions : productOptions;

		createCheckBox(target, optionsBox); //有关全选与单个选项的逻辑

		newData = getDataArr(); //获得选中选项的数据

		renderTable(newData); //渲染到页面上

	}
});
