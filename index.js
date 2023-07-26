/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payRate]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payRate,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArrays) {
    let arrayOfObjects = arrayOfArrays.map(array => createEmployeeRecord(array))
    return arrayOfObjects

}

function createTimeInEvent(dateStamp) {
    const dateTime = dateStamp.split(' ')
    const hour = parseInt(dateTime[1])
    const date = dateTime[0]

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: hour,
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateTime = dateStamp.split(' ')
    const hour = parseInt(dateTime[1])
    const date = dateTime[0]

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: hour,
        date: date
    })
    return this
}

function hoursWorkedOnDate(date) {
    const listTimeIn = this.timeInEvents
    const listTimeOut = this.timeOutEvents
    const timeIn = []
    listTimeIn.forEach(timeEvent => { if (timeEvent.date === date) { timeIn.push(timeEvent.hour) } })

    const timeOut = []
    listTimeOut.forEach(timeEvent => { if (timeEvent.date === date) { timeOut.push(timeEvent.hour) } })

    const hours = timeOut - timeIn

    return hours / 100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    const payRate = this.payPerHour

    const payOwed = hours * payRate

    return payOwed

}

// (function allWagesFor() {
//     let datesWorked = []
//     datesWorked = this.timeInEvents.map(timeEvent => timeEvent.date)

//     let allWages = datesWorked.reduce((accumulator, date) => accumulator + wagesEarnedOnDate(object, date), 0)

//     return allWages
// }).bind(this)

function findEmployeeByFirstName(srcArray, firstName) {
    for (let i = 0; i < srcArray.length; i++) {
        if (firstName === srcArray[i].firstName) { return srcArray[i] }
    }
}

function calculatePayroll(arrayOfEmployees) {
    let sumOfAllPayOwed = arrayOfEmployees.reduce((accumulator, employeeRecord) => accumulator + allWagesFor.call(employeeRecord), 0)

    return sumOfAllPayOwed
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

