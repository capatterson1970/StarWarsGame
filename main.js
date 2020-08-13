
// window.onload = function() {fetchPeopleData(1); fetchPlanetsData(1); fetchPeopleCount(); fetchPlanetsCount();}
window.onload = function() {fetchAllPeopleData(peopleCount); fetchAllPlanetsData(planetCount);}

let nameArr = [''];
let homeArr = [''];
let homeIndex = [''];
let planetArr = [''];
let peopleCount = 82;
let planetCount = 60;

const fetchPeopleData = (index) => {
    fetch(`https://swapi.dev/api/people/${index}/`)
        .then(res => res.json())
        .then(data => {nameArr[index]=data.name; homeArr[index]=data.homeworld.substr(-3,2); correctHome(index);})
}

const fetchPlanetsData = (index) => {
    fetch(`https://swapi.dev/api/planets/${index}/`)
        .then(res => res.json())
        .then(data => {planetArr[index]=data.name;})
}

const fetchPeopleCount = () => {
    fetch(`https://swapi.dev/api/people/`)
        .then(res => res.json())
        .then(data => {peopleCount=data.count;})
}

const fetchPlanetsCount = () => {
    fetch(`https://swapi.dev/api/planets/`)
        .then(res => res.json())
        .then(data => {planetCount=data.count;})
}

const fetchAllPeopleData = (num) => {
    for(let i = 1; i <= num; i++){
        if(i == 17){i++;}
        fetchPeopleData(i);
    }
}

const fetchAllPlanetsData = (num) => {
    for(let i = 1; i <= num; i++){
        fetchPlanetsData(i);
    }
}

const correctHome = (i) => {
    if(isNaN(parseInt(homeArr[i]))){
        homeIndex[i]=parseInt(homeArr[i].substr(-1,1));
    }else{ homeIndex[i]=parseInt(homeArr[i]);}
}

const randomPeople = () => {
    return Math.floor(Math.random() * (peopleCount-1) + 1);
}

const randomPlanet = () => {
    return Math.floor(Math.random() * (planetCount-1) + 1);
}

const checkStatement = (home, ans) => {
    if(home == ans){
        return true;
    }else {
        return false;
    }
}

const genSen = (per, plan) => {
    const ques = document.getElementById("question");
    const sen = "Is "+per+" from "+plan+"?";
    ques.innerHTML = sen;
    console.log(`Is ${nameArr[per]} from ${planetArr[plan]}?`);
}

const runGame = () => {
    const getPerson = parseInt(randomPeople());
    const getHome = homeIndex[getPerson];
    const getPlanet = randomPlanet();
    const answer = checkStatement(homeIndex[getPerson], getPlanet);
    
    genSen(1, 1);

    console.log(getPerson);
    console.log(nameArr[12]);
    console.log(homeArr);
    console.log(homeIndex);
    console.log(homeIndex[12]);
    console.log(getPlanet);
    console.log(answer);
}

// console.log(nameArr);
// console.log(homeArr);
// console.log(peopleCount);
// console.log(planetArr);
// console.log(planetCount);
// console.log(randomPeople());
// console.log(randomPlanet());
// console.log(checkAnswer(1, 1));
// console.log(checkAnswer(1, 12));


runGame();