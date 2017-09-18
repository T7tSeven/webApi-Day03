//前一个节点
function prev(obj) {
	var prevElt = obj.previousElementSibling || obj.previousSibling;
	if(prevElt && prevElt.nodeType == 1) {
		return prevElt;
	} else {
		return null;
	}
}

//后一个节点
function next(obj) {
	var nextElt = obj.nextElementSibling || obj.nextSibling;
	if(nextElt && nextElt.nodeType == 1) {
		return nextElt;
	} else {
		return null;
	}
}

//当前第一个节点
function first(obj) {
	var firstElt = obj.firstElementChild || obj.firstChild;
	if(firstElt && firstElt.nodetype == 1) {
		return firstElt;
	} else {
		return null;
	}
}