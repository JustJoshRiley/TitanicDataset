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

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of 
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

const getAllValuesForProperty = (data, property) => {
	let all_properties = [] ;
	data.filter(people => {
		if (people.fields[property] != 'undefined') {
			return people;
		}
	}).forEach(person => {
		all_properties.push(person.fields[property])
	})
	return all_properties;
}

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an 
// array of all the male passengers [{...}, {...}, {...}, ...]

const filterByProperty = (data, property, value) => {
	let all_properties = [];
	data.filter( people => {
		if (people.fields[property] != "undefined") {
			return people
		}
	}).forEach(person => {
		if (person.fields[property] === value) {
			all_properties.push(person)
		}
	})
	return all_properties
}

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a 
// given property have been removed

const filterNullForProperty = (data, property) => {
	let all_properties = [] ;
	data.forEach(person => {
		if (person.fields[property] != undefined) {
			all_properties.push(person)
		}
	})
	return all_properties;
}

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum 
// for any (numeric) property
// Return the total of all values for a given property. This

const sumAllProperty = (data, property) => {
	let sum = 0;
	data.forEach(person => {
		if (person.fields[property] != undefined) {
			sum += person.fields[property]
		}
	})
	return sum
}


// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an 
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C, 
// and Q, and a couple passengers have undefined for this property. 
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked 
// at Cherbourg, 77 emabrked at Queenstown, and 2 are undedfined

const countAllProperty = (data, property) => {
	let all = {}
	data.forEach(person => {
		// if the property is not in the dictionary
		// add one to the dictionary
		if ( all[person.fields[property]] === undefined) {
			all[person.fields[property]] = 1
		} else {
			all[person.fields[property]] += 1		
		}
	})
	return all

}


// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values 
// of a properties divided into buckets and counting the number
// of items in each bucket.

const makeHistogram = (data, property, step) => {
	list = []
	let bucket = 0
	data.forEach(person => {
		if (person.fields[property] !== undefined) {
			bucket = Math.floor(person.fields[property] / step)
			if ( list[bucket] === undefined ) {
				list[bucket] = 1;
			} else {
				list[bucket] += 1;
			}
			
		}
	})
	for (let i = 0; i < list.length; i++) { 
		if (list[i] === undefined) {
			list[i] = 0;
		}
	  }
	return list
	// return a list of values (vals) where vals[i] == the number
	// of passengers in the i-th "bucket"

	// example. data = [{'age': 12}, {'age': 17}, {'age':25}], step = 10
	// return [0,2,1]
	// example. data = [{'age': 12}, {'age': 17}, {'age':25}], step = 5
	// return [0,0,1,1,0, 1]
}

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an 
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

const normalizeProperty = (data, property) => {
	let list = []
	data.forEach(person => {
		if (person.fields[property] !== undefined) {
			list.push(person.fields[property])
		}
	})
	maxNum = Math.max(...list)
	// imagine list = [1,2,3]
	// Math.max(list) == Math.max([1,2,3]) X
	// but
	// Math.max(...list) == Math.max(1,2,3)
	let newList = list.map(number => {
		return (number / maxNum)
	})
	return newList
}

// 8 ------------------------------------------------------------
// Write a function that gets all unique values for a property. 
// Given the array of data and a property string it should return
// an array of all of the unique values under that property. 
// For example if the property string were "sex" this function 
// would return ['male', 'female']

const getUniqueValues = (data, property) => {
	list = []
	data.forEach(person => {
		// if item  value is not in list
		// add item value to the list
		if (list.includes(person.fields[property]) === false) {
			list.push(person.fields[property])
		}
	})
	return list
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getAllValuesForProperty,
	filterByProperty,
	filterNullForProperty,
	sumAllProperty,
	countAllProperty,
	makeHistogram,
	normalizeProperty,
	getUniqueValues
}