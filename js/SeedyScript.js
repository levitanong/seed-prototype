export default class Node {
	constructor(id, parentNode, title, notes){
		this.id = id;
		this.parentId = parent.id;
		if (parentNode != null){
			parentNode.addChild(id);
			this.parentId = parentNode.id;
		} else {
			this.parentId = 0;
		}
		this.title = title;
		this.notes = notes;
		this.checked = false;
		this.childNodes = [];
	}

	addChild(id){
		this.childNodes.push(id);
	}

	static makeSampleData(max){
		var nodes = [];
		nodes.push(new Node(0, null, "the root of all", "notes of all"));
		nodes.push(new Node(1, nodes[0], "left", "kaliwa kaliwa"));
		nodes.push(new Node(2, nodes[0], "right", "migi migi"));
		nodes.push(new Node(3, nodes[2], "right", "migi migi"));
		for (var i = 4; i < max; i++) {
			var p = i % 3 + 1;
			nodes.push(new Node(i, nodes[p], "title-" + i, "notes"));
		};
		var data = {};
		data["root"] = {
			title: nodes[0].title,
	    checked: nodes[0].checked,
	    notes: nodes[0].notes,
	    children: nodes[0].childNodes
		};
		for (var i = 1; i < max; i++) {
			data[i] = {
				title: nodes[i].title,
	    	checked: nodes[i].checked,
	    	notes: nodes[i].notes,
	    	children: nodes[i].childNodes
	  	};
		}
		return data;
	}
}

//console.log(makeSampleData(10));
