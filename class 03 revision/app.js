let Students = [{
    id: 1,
    name : "Owais raza",
    Batch :  "Mern Stack",
    City : "Karachi",
    Marks: "80",
    grade : "",
    percent : ""
},
{
    id: 2,
    name : "Muzammil",
    Batch :  "ASP.Net",
    City : "Karachi",
    Marks: "70",
    grade : "",
    percent : ""
},
{
    id: 3,
    name : "Salman Ali",
    Batch :  "Pyhton",
    City : "Hyderabad",
    Marks: "75",
    grade : "",
    percent : ""
},
{
    id: 4,
    name : "M Asad",
    Batch :  "Laravel",
    City : "Karachi",
    Marks: "65",
    grade : "",
    percent : ""
},
{
    id: 5,
    name : "Ammar",
    Batch :  "SQL",
    City : "Karachi",
    Marks: "68",
    grade : "",
    percent : ""
},
]
const Student_detail = document.getElementById("std_data")

const check_grade = (Marks) => {
    return Marks >= 80 ? "A" : Marks >= 70 ? "B" : Marks >= 60 ? "C" : "Fail";
}
const check_percentage = (Marks) => {
    return `${Marks / 100 * 100}%`
}

// const num1 = Students[0];
const [num1,num2,num3,num4,num5] = Students


num1.grade = check_grade(num1.Marks);
num1.percent = check_percentage(num1.Marks);

num2.grade = check_grade(num2.Marks);
num2.percent = check_percentage(num2.Marks);

num3.grade = check_grade(num3.Marks);
num3.percent = check_percentage(num3.Marks);

num4.grade = check_grade(num4.Marks);
num4.percent = check_percentage(num4.Marks);

num5.grade = check_grade(num5.Marks);
num5.percent = check_percentage(num5.Marks);

Students.forEach((Data,index) => {
    return Student_detail.innerHTML += `<tbody>
<tr>
  <th scope="row">${Data.id}</th>
  <td>${Data.name}</td>
  <td>${Data.Batch}</td>
  <td>${Data.City}</td>
  <td>${Data.Marks}</td>
  <td>${Data.grade}</td>
  <td>${Data.percent}</td>
</tr>
</tbody>
</table>

`
});
console.log(Students);

