let input = document.getElementById("input");
let btn = document.querySelectorAll(".btn");
let sale = document.getElementById("sale");
let gift = document.getElementById("gift");

let output = document.getElementById("output");

let market_rate = document.getElementById("market_rate");
let stamp_rate = document.getElementById("stamp_rate");
let fee_rate = document.getElementById("fee_rate");
let copy_rate = document.getElementById("copy_rate");
let office_rate = document.getElementById("office_rate");
let e_pay_rate = document.getElementById("e_pay_rate");
let totol_rate = document.getElementById("totol_rate");

let stamp;
let fee;
let copy;
let office;
let computer = 150;
let e_pay = 150;
let serestha = 350;
let law_clerk = 500;



btn.forEach((btn) => {
    btn.addEventListener("click", () => {

        
        let inputValue = parseFloat(input.value);

        if(inputValue >= 100){
            output.style.display = "block";
            input.style.border = "1px solid green";
        } else if(inputValue < 100){
            input.style.border = "1px solid red";
        }

        // // copy 
        if (0 <= inputValue && inputValue <= 30000) {
            copy = 400;
        } else if (30001 <= inputValue && inputValue <= 100000) {
            copy = 500;
        } else if (100001 <= inputValue && inputValue <= 500000) {
            copy = 600;
        } else if (500001 <= inputValue && inputValue <= 999999) {
            copy = 800;
        } else {
            copy = 2500;
        };

        // // office
        if (inputValue <= 100000) {
            office = 350;
            e_pay = 0;
        } else if (100001 <= inputValue && inputValue <= 500000) {
            office = 600;
        } else {
            office = 700;
            e_pay = 150;
        };

        // stamp 
        if (btn.classList.contains("sale")) {
            stamp = Math.round((inputValue * 3) / 100);
        } else if (btn.classList.contains("gift")) {
            stamp = Math.round((inputValue * 0.5) / 100);
        }
        // fee 
        fee = Math.round(inputValue / 100)

        // e-pay 
        if ((stamp + fee) > 10000 && (stamp + fee) <= 20000) {
            e_pay = 200;
        } else if ((stamp + fee) > 20000 && (stamp + fee) <= 30000) {
            e_pay = 250;
        }
        else if ((stamp + fee) > 30000) {
            e_pay = 350;
        }


        market_rate.innerText = inputValue;
        stamp_rate.innerText = stamp;
        fee_rate.innerText = fee;
        copy_rate.innerText = copy;
        office_rate.innerText = office;
        e_pay_rate.innerText = e_pay;
        totol_rate.innerText = stamp + Math.round(inputValue / 100) + copy + office + computer + e_pay + serestha + law_clerk;

    })
});
