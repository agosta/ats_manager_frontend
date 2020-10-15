import { config } from './config.js';
const Handlebars = window.Handlebars;
const axios = window.axios;

export function delt(key){
  console.log(key);
  axios.get('http://localhost:5001/delete', { params: { "key" : key } })
    .then(function(response) { list() });
};

export function list() {
  console.log("list");
  var page = `
<div class="block">
  <h1 id="add_button">Add</h1>
  <h1>Lista Misure</h1>
    {{#each data}}
    <h2>{{this.titolo}}</h2>
    <p>{{this.scadenza}}</p>
    <p onclick=delt("{{this.key}}")>Delete</p>
    {{/each}}
  </form>
</div>
`
  var template = Handlebars.compile(page);
  axios.get('http://localhost:5001/list')
   .then(function (response) {
     var data = response.data;
     console.log(data);
     var instanced = template(data);
     document.getElementById("main").innerHTML = instanced;
     document.getElementById("add_button").addEventListener("click",add);
  });
}

export function send(event){
  event.preventDefault();
  var data=document.forms["add_form"].getElementsByTagName("input");
  var formData = {}
  for (var i=0; i<data.length; i++){
    formData[data[i].id]=data[i].value
  }
  console.log(JSON.stringify(formData))
  axios.post('http://localhost:5001/add', JSON.stringify(formData))
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });
} 


export function add() {
  console.log("page");
  var page = `
<div class="block">
  <p>Put here the adder page</p>
  <form name="add_form"> 
    {{#each fields}}
    <p><label>{{this.id}}:</labe> <input type={{this.type}} id={{this.id}}></p>
    {{/each}}
  <input id="submit_button" type="submit"></input>
  </form>
</div>
`
  var template = Handlebars.compile(page);
  var instanced = template(config);
  document.getElementById("main").innerHTML = instanced;
  document.getElementById("submit_button").addEventListener("click",send);
  document.getElementById("submit_button").addEventListener("click",list);
}


window.addEventListener('load', list);
window.delt=delt
