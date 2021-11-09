import data from './titanic-passengers.js';

const titanic = document.querySelector('#titanic');
titanic.style.display ='flex';
titanic.style.flexWrap = 'wrap';

const passengers = data.map(p => {
    return document.createElement('div')
})

passengers.forEach(passenger => {
    titanic.appendChild(passenger)
})

data.sort((a,b) => {
    if (a.fields.sex === 'female') {
        return 1
    }
    return -1
})

data.sort((a,b) => {
    if (a.fields.survived === 'Yes') {
        return -1
    }
    return 1
})

data.sort((a,b) => {
    if (a.fields.embarked < b.fields.embarked) {
        return -1
    } else if (a.fields.embarked > b.fields.embarked) {
        return 1
    }
    return 0

})

passengers.forEach((passenger, index) => {
    passenger.classList.add('passenger');
    passenger.dataset.id = index;
    passenger.style.width = '20px';
    passenger.style.height = '20px';
    passenger.style.margin = '5px';
    passenger.style.opacity =  data[index].fields.survived === 'Yes' ? '1.0' : '0.5';
    passenger.style.borderRadius = data[index].fields.sex === 'female' ? '50%' : '0';
    passenger.style.border = data[index].fields.pclass === 0 ? '2.5px solid black' : data[index].fields.pclass === 1 ? '2.5px solid green' : data[index].fields.pclass === 2 ? '2.5px solid purple' : data[index].fields.pclass === 3 ? '2.5px solid yellow' : '2.5px solid white';
    const portColor = { S: 'tomato', C: 'cornflowerblue', Q: 'orange', undefined: 'black'};
    passenger.style.backgroundColor = portColor[data[index].fields.embarked]
})


const passengerDetails = document.querySelector('#passenger-details');

document.body.addEventListener('mouseover', (e) => {
    if (e.target.matches('.passenger')) {
        const id = e.target.dataset.id;
        passengerDetails.style.display = 'block';
        passengerDetails.style.position = 'absolute';
        passengerDetails.style.left = `${e.pageX + 3}px`;
        passengerDetails.style.top = `${e.pageY + 3}px`;
        passengerDetails.style.backgroundColor = '#ffff';
        passengerDetails.style.padding = '1.5%';

        passengerDetails.innerHTML = `
        <strong>${data[id].fields.name}</strong>
        <ul>
            <li>Age: ${data[id].fields.age}</li>
            <li>Fare: ${data[id].fields.fare}</li>
            <li>Embarked: ${data[id].fields.embarked}</li>
            <li>Pclass: ${data[id].fields.pclass}</li>
            <li>sibsp: ${data[id].fields.sibsp}</li>
        </ul>
        `
    }
})

document.body.addEventListener('mouseout', (e) => {
    if (e.target.matches('.passenger')) {
        passengerDetails.style.display = 'none';
    }
})