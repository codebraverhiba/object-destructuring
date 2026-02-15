const username=document.getElementById("name");
const usersage=document.getElementById("age");
const cityname=document.getElementById("city");
const user={
    name:"Alex",
    age:25,
    city:"New York"
};
const {name,age,city}=user;
username.textContent="Name: "+name;
usersage.textContent="Age: "+age;
cityname.textContent="City: "+city;