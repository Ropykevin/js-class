let form=document.getElementById("myform")


form.addEventListener('submit',function(e){
    e.preventDefault()
    let first_name=document.getElementById("first_name").value;
    console.log(first_name)
    let second_name=document.getElementById("second_name").value;
    let full_name= first_name+" "+second_name
    document.getElementById("full_name").innerHTML=full_name

})

//new html file and new js file gross.html,gross.js
//take the users input from a form of basic salary and benefit(html)
//inside js file find gross salary by adding basic and benefits 