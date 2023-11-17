const bill = document.getElementById("bill");
const tip = document.getElementById("tip")
const button = document.getElementById("calculate")
const total = document.getElementById("total")


function calculateNum(){
    const billVal = bill.value
    const tipVal = tip.value
    const totalVal = billVal * (1 + tipVal/100);
    total.innerHTML = totalVal.toFixed(2)

}

button.addEventListener("click", calculateNum)


