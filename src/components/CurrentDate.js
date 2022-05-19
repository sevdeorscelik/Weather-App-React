

// calculate current day

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();

const currentDay = days[date.getDay()];
let firstDay = days[date.getDay() + 1];
let secondDay = days[date.getDay() + 2];
let thirdDay = days[date.getDay() + 3];

if(currentDay === 'Thursday') {
    thirdDay = 'Sunday'

} else if(currentDay === 'Friday'){
    secondDay = 'Sunday';
    thirdDay = 'Monday'

}else if(currentDay === 'Saturday'){
    firstDay = 'Sunday';
    secondDay = 'Monday';
    thirdDay = 'Tuesday'
}

export const daysName = [
    firstDay,
    secondDay,
    thirdDay
]






