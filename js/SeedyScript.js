var nodes = [];

class Node {
	constructor(id, parentNode, title, notes){
		this.id = id;
		this.parentId = parent.id;
		console.log(parentNode);
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
}

function makeSampleData(max){
	nodes.push(new Node(0, null, "title", "notes"));
	nodes.push(new Node(1, null, "left", "kaliwa kaliwa"));
	nodes.push(new Node(2, null, "right", "migi migi"));
	for (var i = 3; i < max; i++) {
		var p = i % 2 + 1;
		nodes.push(new Node(i, nodes[p], "title-" + i, "notes"));
	};
}

makeSampleData(10);
console.log(nodes);

/*var nodeee = new Node(1, null, "title", "notes");
console.log(nodeee.notes);
nodeee.addChild(3);
nodeee.addChild(4);
console.log(nodeee.childNodes);*/

