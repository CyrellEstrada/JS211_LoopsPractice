// let num = 1

// while (num < 1000) {
//     console.log(num++);
// }


const person = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
};

const logObjectKeys = (obj) => {
    const keys = Object.keys(obj);
    console.log(keys);
}

// logObjectKeys(person)

const logObjectEntries = (obj) => {
    const keys = Object.entries(obj);
    console.log(keys);
}
// logObjectEntries(person)

const arrayOfPersons = [
{name: "Jane",  birthDate: "1985", gender: "female"},
{name: "Will", birthDate: "2003", gender: "male"},
{name: "Bill", birthDate: "2014", gender: "male"},
{name: "Jeese", birthDate: "1997", gender: "female"},
{name: "Walter", birthDate: "1965", gender: "male"}
];

const oddsOnly = (array) => {
    for (let person of array) {
        const birthYear = parseInt(person.birthDate);
        if (birthYear % 2 !== 0) {
            console.log(person.birthDate);
        }
    }
};
//  oddsOnly(arrayOfPersons)

//  const map1 = arrayOfPersons.map(person => {
//     console.log(person);
//     return person;
//  });

//  console.log(map1)

const maleOnly = (array) => {
    for (let person of array) {
        const sex = person.gender
            if (sex === "male") {
                console.log(person)
        }
    }
};

// maleOnly(arrayOfPersons)

const before90 = (array) => {
    for (let person of array) {
        const dateOfBirth = parseInt(person.birthDate);
        if (dateOfBirth < 1990) {
            console.log(person)
            return true
        }
    }
};

// before90(arrayOfPersons)


const cutoffDate = new Date("1990");

const bornBefore1990 = arrayOfPersons.filter(person => {
    const birthDate = new Date(person.birthDate);
    return birthDate < cutoffDate;
});

console.log(bornBefore1990)