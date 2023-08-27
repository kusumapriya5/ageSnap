const dayInput = document.getElementById('dayInput')
const monthInput = document.getElementById('monthInput')
const yearInput = document.getElementById('yearInput')

const resultYears = document.getElementById('result-years')
const resultMonths = document.getElementById('result-months')
const resultDays = document.getElementById('result-days')

const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', function () {
    const today = new Date()
    if (yearInput.value > today.getFullYear() || yearInput.value === "") {
        alert("Enter a valid year")
        return
    }
    if (monthInput.value > 12 || monthInput.value === "") {
        alert("Enter a vaild a month")
        return
    }
    if (dayInput.value > 31 || dayInput.value === "") {
        alert("Enter a valid day")
        return
    }

    const dob = new Date(yearInput.value, monthInput.value - 1, dayInput.value)

    let years = today.getFullYear() - dob.getFullYear()
    let months = today.getMonth() - dob.getMonth()
    let days = today.getDate() - dob.getDate()

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultYears.innerText = years
    resultMonths.innerText = months
    resultDays.innerText = days

    console.log(years, months, days);
})