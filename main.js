// variables
var getText = document.getElementById('getText');
var getJSON = document.getElementById('getJSON');
var getAPI = document.getElementById('getAPI');
var formSubmit = document.getElementById('addPost');
var input = document.getElementById('inputText').value;


getText.addEventListener('click',getTextFile);

function  getTextFile() {

// fetch('text.txt').
// then(function(res){
// 	// console.log(res.text())
// 	return res.text()
// }).then(function(data){
// 	console.log(data)
// })

//Arrow function

fetch('text.txt')
.then((response)=>response.text())
// .then((data)=>console.log(data))
.then((data)=>{
	document.getElementById('output').innerHTML=data;
})
.catch((error)=>console.log(error))

}

getJSON.addEventListener('click',getJSONFile);

function  getJSONFile() {
	// console.log(123)
	fetch('users.json')
	.then((response)=> response.json()) 
	// .then((data)=>console.log(data))
	.then((data)=>{
		let output ="<h2>Users</h2>";
		// console.log(data);
		data.forEach(function(user) {
			output+=`
			<ul>
			<li>Name : ${user.name}</li>
			<li>Age : ${user.age}</li>
			<li>Salary : ${user.salary}</li>
			</ul>
			`
		});
		document.getElementById('output').innerHTML=output;
	})


}
getAPI.addEventListener('click',getAPIData);
function  getAPIData() {
	// console.log(123)
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response)=> response.json()) 
	// .then((data)=>console.log(data))
	.then((data)=>{
		let output ="<h2>Users API</h2>";
		// console.log(data);
		data.forEach(function(user) {
			output+=`
			<div>
			<p>User Id : ${user.id}</p>
			<hr>
			<h5>Title : ${user.title}</h5>
			<p>Body : ${user.body}</p>
			</div>
			`
		});
		document.getElementById('output').innerHTML=output;
	})
}
formSubmit.addEventListener('submit',submitFunc);

function  submitFunc(e) {
	// console.log(input)
    e.preventDefault()
let title = document.getElementById('inputText').value;
let body = document.getElementById('message').value;

fetch('https://jsonplaceholder.typicode.com/posts',{
	method:'POST',
	headers:{
		'Accept':'application/json,text/plain, */* ',
		'Content-type':'application/json',
	
	},
	body:JSON.stringify({title:title,body:body})
})
	.then((response)=>response.json())
	.then((data)=>console.log(data)
	)}


