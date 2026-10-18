const findTheOldest = function(people) {
    return people.reduce((curBest, cur) => {
        let curAge;
        if (cur.hasOwnProperty("yearOfDeath")) {
            curAge = cur.yearOfDeath - cur.yearOfBirth;
        }
        else {
            curAge = (new Date().getFullYear()) - cur.yearOfBirth;
        }

        let curBestAge;
        if (curBest.hasOwnProperty("yearOfDeath")) {
            curBestAge = curBest.yearOfDeath - curBest.yearOfBirth;
        }
        else {
            curBestAge = (new Date().getFullYear()) - curBest.yearOfBirth;
        }

        return curBestAge < curAge ? cur : curBest;

    })
};

// Do not edit below this line
module.exports = findTheOldest;
