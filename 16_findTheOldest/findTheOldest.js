const findTheOldest = function(people) {
    function getAge(person) {
        if (!("yearOfDeath" in person)) {
            return 2025 - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    }

    console.table(people);
    people.sort( (a, b) =>
        getAge(a) > getAge(b) ? -1 : 1
    );
    console.table(people);
    return people[0];
    
};

// Do not edit below this line
module.exports = findTheOldest;
