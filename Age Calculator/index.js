const btnEl = document.getElementById("btn")

btnEl.addEventListener("click", calculateAge)


const result = document.getElementById("result")
const DOB = document.getElementById("DOB")

function calculateAge(){
    const DOBvalue = DOB.value 
    if(DOBvalue == ""){
        alert("Please Enter You Date Of Birth")
    }else{
        const age = getAge(DOBvalue)
        result.innerHTML = `You are ${age} years old`
        
    }
}

function getAge(value){
    const currentDate = new Date()
    const selectedDate = new Date(value)
    const year = currentDate.getFullYear() - selectedDate.getFullYear()
    const month = currentDate.getMonth() - selectedDate.getMonth()
      if(month <= 0 && currentDate.getDate() < selectedDate.getDate()){
          year--;
        }else{
           return year;
           }
   }

//    const btnEl = document.getElementById("btn")
//    btnEl.addEventListener("click", calculateAge)

//    const result = document.getElementById("result")
//    const DOB = document.getElementById("DOB")

//    function calculateAge() {
//        const DOBvalue = DOB.value
//        if (DOBvalue === "") {
//            alert("Please Enter Your Date Of Birth")
//        } else {
//            const age = getAge(DOBvalue)
//            result.innerHTML = `You are ${age} years old`
//        }
//    }

//    function getAge(DOBvalue) {
//        const currentDate = new Date()
//        const selectedDate = new Date(DOBvalue)
//        const year = currentDate.getFullYear() - selectedDate.getFullYear()
//        const month = currentDate.getMonth() - selectedDate.getMonth()
//        if (month < 0 || (month === 0 && currentDate.getDate() < selectedDate.getDate())) {
//            year--;
//        }
//        return year;
//    }