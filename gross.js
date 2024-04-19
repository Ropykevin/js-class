let form=document.getElementById("form")

form.addEventListener('submit',function(e){
    //prevent page from refreshing
    e.preventDefault()

    //GET FORM INPUT to js
    let basic_salary=document.getElementById("basic").value;
    let benefits=document.getElementById("benefit").value;

    // check if all field have values

    if ( basic_salary=="" || benefits==""){
        document.getElementById("gross").innerHTML="check input fields"
    }else{
        let gross_salary = Number(basic_salary) + Number(benefits)
        document.getElementById("gross").innerHTML = gross_salary
    }
    
    
})