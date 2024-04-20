// //15
// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary
//  and benefits, adds them to find the gross salary then uses  
// the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using THIS LINK:
let basic_salary=Number(prompt("enter basic salary"))
let benefits=Number(prompt("enter benefits"))

function calc_gross(a,b){
    let gross_salary= a+b
    return gross_salary
}
let Gross_salary=calc_gross(basic_salary,benefits)
console.log(Gross_salary)


//Calculate NHIF

function calc_Nhif(gross){
    let nhif_contribution=0
    if (gross>=0 && gross<=5999){
        nhif_contribution=150
    }
    else if(gross>=6000 && gross<=7999){
        nhif_contribution=300
    }
    else if (gross >= 8000 && gross <= 11999) {
        nhif_contribution = 400
    }
    else if (gross >= 12000 && gross <= 14999) {
        nhif_contribution = 500
    }
    else if (gross >= 15000 && gross <= 19999) {
        nhif_contribution = 600
    }
    else if (gross >= 20000 && gross <= 24999) {
        nhif_contribution = 750
    }
    else if (gross >= 25000 && gross <= 29999) {
        nhif_contribution = 850
    }
    else if (gross >= 30000 && gross <= 34999) {
        nhif_contribution = 900
    }
    else if (gross >= 35000 && gross <= 39999) {
        nhif_contribution = 950
    }
    else if (gross >= 40000 && gross <= 44999) {
        nhif_contribution = 1000
    }
    else if (gross >= 45000 && gross <= 49999) {
        nhif_contribution = 1100
    }
    else if (gross >= 50000 && gross <= 59999) {
        nhif_contribution = 1200
    }
    else if (gross >= 60000 && gross <= 69999) {
        nhif_contribution = 1300
    }
    else if (gross >= 70000 && gross <= 79999) {
        nhif_contribution = 1400
    }
    else if (gross >= 80000 && gross <= 89999) {
        nhif_contribution = 1500
    } else if (gross >= 90000 && gross <= 99999) {
        nhif_contribution = 1600
    }else{
        nhif_contribution=1700
    }
    return nhif_contribution
}

let NHIF = calc_Nhif(Gross_salary)
console.log("NHIF",NHIF)
//Write a normal program but use functions if you feel comfortable.

// TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the program above, then use  the gross salary
//  to find the NSSF. To find the Kenya NSSF Rate  using 6 % of
//   the Gross Salary.BUT ONLY A MAXIMUM
// OF 18,000 Gross Salary CAN BE USED IN NSSF.

function calc_nssf(x,rate=0.06){
    let nssf_contribution=0
    //check the gross
    if (x>0 && x<=18000){
        nssf_contribution=x * rate
    }else{
        nssf_contribution=18000*rate
    }
    return nssf_contribution
}

let NSSF=calc_nssf(Gross_salary)
console.log("NSSF", NSSF)

// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s
//  NHDF using:
// i.e NHDF = gross_salary * 0.015

function calc_nhdf(gross,rate=0.015){
    let nhdf_contribution=gross*rate
    return nhdf_contribution
}

let NHDF=calc_nhdf(Gross_salary)
console.log("NHDF",NHDF)

// Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF) 

function calc_taxable_income(a,b,c){
    let taxable_income=a-(b+c)
    return taxable_income
}
let taxable_income= calc_taxable_income(Gross_salary,NSSF,NHDF)
console.log("taxable_income",taxable_income)

// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person
// 's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK

function calc_payee(tax){
    let payee=0
    let relief=2400
    if (tax>=0 && tax<=24000){
        payee=(24000*0.01)-relief
    }
    else if(tax>24000 && tax<=32333){
        payee=(24000*0.01)+((tax-24000)*0.25)-relief
    }
    else if(tax>32333 && tax<=500000){
        payee=(24000*0.01)+(8333*0.25)+((tax-32333)*0.3)-relief
    }
    else if(tax>500000 && tax <=800000){
        payee=(24000*0.1)+(8333*0.25)+(467667*0.3)+((tax-500000)*0.325)-relief
    }else{
        payee=(24000*0.1)+(8333*0.25)+(467667*0.3)+(300000*0.325)+((tax-800000)*0.35)-relief
    }
    return payee
}

let PAYEE=calc_payee(taxable_income)
console.log("payee",PAYEE)

// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s 
// Net Salary using:
// net_salary = gross_salary - (nhif + nhdf + nssf + payee)

function calc_netsalary(a,b,c,d,e){
    let net_salary=a-(b+c+d+e)
    return net_salary
}
let Net_pay=calc_netsalary(Gross_salary,NHIF,NSSF,NHDF,PAYEE)

console.log("net pay",Net_pay)