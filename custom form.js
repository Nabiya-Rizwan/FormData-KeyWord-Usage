let form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
  event.preventDefault(); 

  let formData = new FormData(form);

let setData ={
  Username :(formData.get("username")),
  Useremail :(formData.get("email")),
  Userprof :(formData.get("profile"))
}
console.log(setData);

 
  for(let [key, value] of formData){
    console.log(key, value);
  }
form.reset()
});
