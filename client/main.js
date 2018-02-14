console.log('main connected');

//action for the findOne button
document.getElementById('find-one').addEventListener("click", function (event){
	let thing1 = document.getElementById('thing1').value;
	let thing2 = document.getElementById('thing2').value;

	var url = 'http://localhost:3000/findOne';
	var myInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json' //must set this content type
		},
		body: JSON.stringify({thing1, thing2}) //must json stringingy it
	}
	fetch(url, myInit)
		.then(function (res){
			return res.json();
		}).then(function (json){
		console.log('returned json', json);
		let thing1 = json.thing1;
		let thing2 = json.thing2;
		var p = document.createElement("p");
		p.innerHTML = `thing 1 value is ${thing1}`;
		document.body.appendChild(p);
	});
	event.preventDefault();
});

//action for the findAll button
document.getElementById('find-all').addEventListener("click", function (event){
	var myInit = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json' //must set this content type
		},
	}
	var url = 'http://localhost:3000/findAll';
	fetch(url, myInit)
		.then(function (res) {
			return res.json();
		}).then(function (json) {
		json.forEach(function (el){
			let thing1 = el.thing1;
			let thing2 = el.thing2;
			var p = document.createElement("p");
			p.innerHTML = `thing 1 value is ${thing1} and thing 2 value is ${thing2}`;
			document.body.appendChild(p);
		});
	});
	event.preventDefault();
});


//action for the delete button
document.getElementById('delete').addEventListener("click", function (event){
	let thing1 = document.getElementById('thing1').value;
	let thing2 = document.getElementById('thing2').value;
	let url = 'http://localhost:3000/removeOne';
	var myInit = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json' //must set this content type
		},
		body: JSON.stringify({thing1, thing2})
	}
	fetch(url, myInit)
		.then(function (res){
			//didn't do anything with response
			var p = document.createElement("p");
			p.innerHTML = "successful deletion from database";
			document.body.appendChild(p);
		})

	event.preventDefault();
});

//action for the insert-one button
document.getElementById('insert-one').addEventListener("click", function (event){
	let thing1 = document.getElementById('thing1').value;
	let thing2 = document.getElementById('thing2').value;
	let url = 'http://localhost:3000/insertOne';
	var myInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json' //must set this content type
		},
		body: JSON.stringify({thing1, thing2})
	}
	fetch(url, myInit)
		.then(function (res){
			return res.json();
		})
		.then(function (res){
			let thing1 = res.thing1;
			let thing2 = res.thing2;
			var p = document.createElement("p");
			p.innerHTML = `thing 1 value is ${thing1} and thing 2 value is ${thing2}`;
			document.body.appendChild(p);
		})
	event.preventDefault();
});

//action for the update-one button
document.getElementById('update-one').addEventListener("click", function (event){
	let thing1 = document.getElementById('thing1').value;
	let thing2 = document.getElementById('thing2').value;
	let newValueForThing1 = document.getElementById('newValue').value;
	let url = 'http://localhost:3000/updateOne';
	var myInit = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json' //must set this content type
		},
		body: JSON.stringify({thing1, thing2, newValueForThing1})
	}
	fetch(url, myInit)
		.then(function (res){
			return res.json();
		})
		.then(function (res){
		})


	event.preventDefault();
});