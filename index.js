// Code your solution in this file!

const testDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = function returnFirstTwoDrivers(drivers) {
    const firstTwo = drivers.slice(0,2);
    return firstTwo;
};

const returnFirstTwoDrivers = (drivers) => {
    const firstTwo = drivers.slice(0,2);
    return firstTwo;
};

const returnLastTwoDrivers = (drivers) => {
    const lastTwo = drivers.slice(drivers.length-2);
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(mult){
    const multiplyFare = (fare) => mult*fare;
    return multiplyFare;
};

const fareDoubler = (fare) => createFareMultiplier(2)(fare);
const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, fx) {
if (fx === returnFirstTwoDrivers) {
    console.log(fx);
    return returnFirstTwoDrivers(drivers);
} else if (fx === returnLastTwoDrivers){
    console.log(fx);
    return returnLastTwoDrivers(drivers);
}};

// console.log(firstTwoDrivers(['Tim','Tom','Ted','Thad']));
// console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(selectingDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

// console.log(createFareMultiplier(4));
// console.log(createFareMultiplier(4)(2));
// console.log(fareDoubler(5));
// console.log(fareTrippler(5));

// console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// console.log(selectDifferentDrivers(['Tim','Tom','Ted','Thad']));
// console.log(selectDifferentDrivers(['Abe', 'Caleb', 'Dale', 'Mo']));

// console.log(selectingDrivers[1]);

console.log(selectDifferentDrivers(testDrivers, returnLastTwoDrivers));