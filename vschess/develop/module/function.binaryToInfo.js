// 从二进制原始数据中抽取棋局信息
vs.binaryToInfo = function(buffer, parseType, errorCallback){
    parseType = parseType || "auto";

    // 象棋演播室 XQF 格式
	if (parseType === "auto" && vs.subhex(buffer, 0, 2) === "5851" || parseType === "xqf") {
		return vs.binaryToInfo_XQF(buffer);
	}

    // 象棋桥 CBR 格式
	if (parseType === "auto" && vs.subhex(buffer, 0, 15) === "4343427269646765205265636f7264" || parseType === "cbr") {
		return vs.binaryToInfo_CBR(buffer);
	}

    // 未能识别的数据，调用错误回调，并返回空
	typeof errorCallback === "function" && errorCallback();
	return {};
};
