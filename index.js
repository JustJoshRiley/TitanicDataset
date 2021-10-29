import data from './titanic-passengers.js'
const titanic = document.querySelector('#titanic')

// titanic.style.display = 'grid';
// titanic.style.gridTemplateColumns = 'repeat(20, 30px)';
// titanic.style.gridGap = '30px';
titanic.style.display ='flex';
titanic.style.flexWrap = 'wrap';

const passengers = data.map(passenger => {
    return document.createElement('div');
});

passengers.forEach(passenger => {
    titanic.appendChild(passenger)
});

passengers.forEach((passenger, index) => {
    passenger.style.width = '20px';
    passenger.style.height = '20px';
    passenger.style.margin = '10px';
    if (data[index].fields.sex === 'female') {
        passenger.style.backgroundColor = 'pink';
    } else if(data[index].fields.sex === 'male') {
        passenger.style.backgroundColor = 'black';
    } 
    if (data[index].fields.survived == 'No') {
        passenger.style.borderRadius = '50%';
        passenger.style.opacity = '0.3';
    }
    if (data[index].fields.fare > 10) {
        passenger.style.border = '3px solid blue'
    } else if (data[index].fields.fare < 10) {
        passenger.style.border = '3px solid red';
    }
    if (data[index].fields.embarked == 'S') {
        // passenger.style.height = '30px';
        // passenger.style.width = '30px';
    }
})