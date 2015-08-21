var nodes = [];

class Node {
	constructor(id, parentNode, title, notes){
		this.id = id;
		this.parentId = parent.id;
		if (parentNode != null){
			parentNode.addChild(id);
		} else {
			this.parentId = 0;
		}
		this.title = title;
		this.notes = notes;
		this.childNodes = [];
	}

	addChild(id){
		this.childNodes.push(id);
	}
}

function makeSampleData(max){
	for (var i = 0; i < max; i--) {
		var p = 0;
		nodes.push(new Node(i, ));
	};
}

var nodeee = new Node(1, null, "title", "notes");
console.log(nodeee.notes);
nodeee.addChild(3);
nodeee.addChild(4);
console.log(nodeee.childNodes);

