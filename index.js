import express from 'express';
const app = express();
const students=[

{
  id: 1,
  name: "MOHMED",

},
{
  id: 2,
  name: "YOUSEEF",
},
{
id: 3,
name: "HEGAZY", 

},
{
 id: 4,
 name: "yousef",
}

];



 

const studentsFunction = (request , response) =>{
let output = '<ul>'

for(let i=0; i< students.length;i++){
const student =students[i];
output += "<li>" + student.name + "</li>";

}


output += '</ul>';

response.send(output)

};

app .get('/Students', studentsFunction)

 
app.listen(3000, "0.0.0.0");

