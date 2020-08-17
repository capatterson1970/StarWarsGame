'use strict';
const assert = require('assert');

// window.onload = function() {preRun(); newGame();}

let name = '';
let homeIndex = 0;
let planet = '';
let peopleCount = 82;
let planetCount = 60;
let p1Answer = '';
let p2Answer = '';
let p1Score = 0;
let p2Score = 0;



const fetchPeopleData = (index) => {
    fetch(`https://swapi.dev/api/people/${index}/`)
        .then(res => res.json())
        .then(data => {name=data.name; homeIndex=correctHome(data.homeworld.substr(-3,2));})
}

const fetchPlanetsData = (index) => {
    fetch(`https://swapi.dev/api/planets/${index}/`)
        .then(res => res.json())
        .then(data => {planet=data.name;})
}

const correctHome = (home) => {
    if(isNaN(parseInt(home))){
        return parseInt(home.substr(-1,1));
    }else{ return parseInt(home); }
}

const randomPeople = () => {
    return Math.floor(Math.random() * (peopleCount-1) + 1);
}

const randomPlanet = () => {
    return Math.floor(Math.random() * (planetCount-1) + 1);
}

const randomMatch = () => {
    return Math.floor(Math.random() * 2);
}

const checkStatement = (home, ans) => {
    if(home == ans){
        return true;
    }else {
        return false;
    }
}

const checkAnswer = (st) => {
    if(st == p1Answer){
        p1Score++;
    }
    if(st == p2Answer) {
        p2Score++ ;
    }
}

const genSen = (per, plan) => {
    const ques = document.getElementById("question");
    const sen = "Is "+per+" from "+plan+"?";
    ques.innerHTML = sen;
    console.log(sen);
}

const genScore = () => {
    const p1 = document.getElementById("p1s");
    const p2 = document.getElementById("p2s");
    p1.innerHTML = p1Score;
    p2.innerHTML = p2Score;
    console.log(p1score, p2score);
}

const p1True = () => {
    p1Answer = true;
}

const p1False = () => {
    p1Answer = false;
}

const p2True = () => {
    p2Answer = true;
}

const p2False = () => {
    p2Answer = false;
}

const preRun = () => {
    let nIndex = randomPeople();
    let pIndex = randomPlanet();
    
    fetchPeopleData(nIndex);
    fetchPlanetsData(pIndex);
}

const runGame = () => {
    let nIndex = randomPeople();
    let pIndex = randomPlanet();
    
    fetchPeopleData(nIndex);
    fetchPlanetsData(pIndex);        

    genSen(name, planet);
    checkAnswer(checkStatement(homeIndex, pIndex));
    genScore();

    console.log('Button clicked');
    console.log(nIndex);
    console.log(name);
    console.log(homeIndex);
    console.log(pIndex);
    console.log(planet);

}

const newGame = () => {
    p1Score = 0;
    p2Score = 0;
    genScore();
    runGame();
}

describe('fetchPeopleData', () => {
    it('calls fetch with correct url', () => {
        const fakeFetch = url => {
            assert(
                url ===
                `https://swapi.dev/api/people/1/`
            )
            return new Promise(function (resolve) {

            })
        }
        fetchPeopleData(1);
    })

    it('parses the response of fetch correctly', (done) => {
        const fakeFetch2 = url => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {
                            name: "Luke Skywalker"
                        }
                    ]

                })
            })
        }
        fetchPeopleData(1)
            .then(results => {
                assert(results.name == "Luke Skywalker")

                done();


            })
    })

    it('calls fetch with correct key url', () => {
        
        const fakeFetch = url => {
            assert(
                url ===
                `https://swapi.dev/api/people/1/`
            )
            return new Promise(function (resolve) {

            })
        }
        fetchPeopleData(1)


    })

    it('calls fetch with correct key word search', () => {
        const fakeFetch = url => {
            assert(
                url ===
                `https://swapi.dev/api/people/1/`
            )
            return new Promise(function (resolve) {

            })
        }
        fetchPeopleData(1)


    })
    it('finds first card name correctly', (done) => {
        const fakeFetch2 = url => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        {
                            name: "Luke Skywalker"
                        }
                    ]

                })
            })
        }
        fetchPeopleData(1)
            .then(results => {
                assert(results.name == 'Luke Skywalker')

                done();


            })
    })


})