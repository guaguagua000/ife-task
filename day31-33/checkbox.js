function createCheckBox(target, optionsBox) {
	var selectedNum = countSelectedNum(optionsBox);

	if(selectedNum === 0) {	//假如当前没有被选择的选项
		target.checked = true;
	}

	if(optionsBox[3].checked) { //在全选状态下
		if(!target.checked) { //若当前选项取消选中
			optionsBox[3].checked = false;
		} else {
			for(var i = 0; i < 3; i++) {
				if(!optionsBox[i].checked) {
					optionsBox[i].checked = true;
				}
			}
		}
	} else {
		selectedNum === 3 ? (optionsBox[3].checked = true) : (optionsBox[3].checked = false);
	}
}

//读取数据
function getDataArr() {
	var dataArr = new Array();
	for(var i = 0; i < sourceDataLen; i++) {
		switch(sourceData[i].region) {
			case "华东": regionOrder = 0;
						 break;
			case "华南": regionOrder = 1;
						break;
			case "华北": regionOrder = 2;
						break;
		}
		switch(sourceData[i].product) {
			case "手机": productOrder = 0;
						 break;
			case "笔记本": productOrder = 1;
						break;
			case "智能音箱": productOrder = 2;
						break;
		} 
		if(!countSelectedNum(regionOptions) && productOptions[productOrder].checked) {
			dataArr.push(sourceData[i]);
		} else if(!countSelectedNum(productOptions) && regionOptions[regionOrder].checked) {
			dataArr.push(sourceData[i]);
		} else if(regionOptions[regionOrder].checked && productOptions[productOrder].checked) {
			dataArr.push(sourceData[i]);
		}
	}
	return dataArr;
}