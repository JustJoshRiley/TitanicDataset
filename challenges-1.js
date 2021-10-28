// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Returns a number.

const getTotalPassengers = (data) => {
	let count = 0;
	data.forEach(person => count += 1);
	return count;
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
	let count = 0;
	data.forEach(person => {
		if (person.fields['survived'] === 'Yes') {
			count += 1;
		}
	})
	return count;
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
	let count = 0;
	data.forEach(person => {
		if (person.fields['survived'] === 'No') {
			count += 1;
		}
	})
	return count;
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
	let count = 0;
	data.forEach(person => {
		if (person.fields.pclass === pclass) {
			count += 1;
		}
	})
	return count;
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. 
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
	let count = 0;
	data.filter(people => {
		if (people.fields.pclass === pclass) {
			if (people.fields.survived === 'Yes') {
				count += 1;
			}
		}
	})
	return count	
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
	let count = 0;
	data.filter(people => {
		if (people.fields.pclass === pclass) {
			if (people.fields.survived === 'No') {
				count += 1;
			}
		}
	})
	return count	
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
	let minAge = 10;
	data.filter(people => {
		if (typeof people.fields.age != "undefined") {
			return people
		}
	}).forEach(person => {
		if (person.fields.age < minAge) {
			minAge = person.fields.age 
		} 
	})
	return minAge;
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where 
// age is missing.

const getMaxAge = (data) => {
	let maxAge = 0;
	data.filter(people => {
		if (typeof people.fields.age != "undefined") {
			return people
		}
	}).forEach(person => {
		if (person.fields.age > maxAge) {
			maxAge = person.fields.age 
		} 
	})
	return maxAge;
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the 
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
	let count = 0;
	data.filter(people => {
		if (people.fields.embarked === embarked) {
			count += 1;
		}
	})
	return count	
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
	let minFare = 10;
	data.filter(people => {
		if (typeof people.fields.fare != "undefined") {
			return people
		}
	}).forEach(person => {
		if (person.fields.fare < minFare) {
			minFare = person.fields.fare 
		} 
	})
	return minFare;
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare. Be sure to filter these! 

const getMaxFare = (data) => {
	let maxFare = 0;
	data.filter(people => {
		if (typeof people.fields.fare != "undefined") {
			return people
		}
	}).forEach(person => {
		if (person.fields.fare > maxFare) {
			maxFare = person.fields.fare 
		} 
	})
	return maxFare;
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
	let count = 0;
	data.forEach(person => {
		if (person.fields.sex === gender) {
			count += 1;
		}
	})
	return count
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This 
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property. 

const getSurvivorsByGender = (data, gender) => {
	let count = 0;
	data.filter(people => {
		if (people.fields.sex === gender) {
			if (people.fields.survived === "Yes") {
				count += 1;
			}
		}
	})
	return count;
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
	let count = 0;
	data.filter(people => {
		if (people.fields.sex === gender) {
			if (people.fields.survived === "No") {
				count += 1;
			}
		}
	})
	return count;
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and 
// return that number. Be sure to filter the passengers records 
// where the fare is missing! 

const getTotalFare = (data) => {
	let totalFare = 0;
	data.filter(people => {
		if (people.fields.fare != "undefined") {
			return people;
		}
	}).forEach(person => {
		totalFare += person.fields.fare;
	})
	return totalFare;
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide 
// by the number of passengers. Be sure to filter passengers who are
// missing a fare! 

const getAverageFare = (data) => {
	let totalFare = 0;
	let count = 0
	data.filter(people => {
		if (people.fields.fare != "undefined") {
			return people;
		}
	}).forEach(person => {
		count += 1;
		totalFare += person.fields.fare;
	})
	return (totalFare / count);
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are 
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items 
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
	all_fares = []
	data.forEach(person => {
		if (typeof person.fields.fare != "undefined") {
			all_fares.push(person.fields.fare)
		}
	})
	all_fares=all_fares.sort(function(a, b){return a - b})

	middle_fare = (all_fares.length - 1) / 2
	if (all_fares.length % 2 === 0) {
		return ( all_fares[middle_fare] + all_fares[ middle_fare + 1] ) / 2 ;
	} else {
		return all_fares[ middle_fare ];
	}
}
// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide 
// by the number of passenegers. Be sure to filter where ages are not 
// available. 

const getAverageAge = (data) => {
	let age = 0;
	let count = 0;
	data.forEach(person => {
		if (typeof person.fields.age != "undefined") {
			age += person.fields.age;
			count += 1;
		}
	})
	return age / count;
}

// 19 --------------------------------------------------------------
// Return the median age from passengers. Do that median thing of 
// finding the middle value. 

const getMedianAge = (data) => {
	all_ages = [];
	data.forEach(person => {
		if (typeof person.fields.age != "undefined") {
			all_ages.push(person.fields.age)
		}
	})
	all_ages.sort(function(a, b){return a - b})
	middle_age = Math.round((all_ages.length - 1) / 2);
	if ( all_ages.length % 2 === 0) {
		return ( all_ages[middle_age] + all_ages[middle_age + 1] ) / 2;
	} else {
		return all_ages[ middle_age ];
	}
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the 
// the total number. 

const getAverageAgeByGender = (data, gender) => {
	let age = 0;
	let count = 0;
	data.filter(people => {
		if (people.fields.sex === gender) {
			if ( typeof people.fields.age != "undefined") {
				return people;
			}
		}
	}).forEach(person => {
		age += person.fields.age;
		count += 1
	})
	return (age / count)
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getTotalPassengers,
	getSurvivorCount,
	getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
	getCasualityCountForClass,
	getMinAge,
	getMaxAge,
	getEmbarkedCount,
	getMaxFare,
	getMinFare,
	getPassengersByGender,
	getSurvivorsByGender,
	getCasualitiesByGender,
	getTotalFare,
	getAverageFare,
	getMedianFare,
	getAverageAge,
	getMedianAge,
	getAverageAgeByGender
}