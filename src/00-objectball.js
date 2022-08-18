let gameObject = function() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
};
console.log(gameObject());
let game = gameObject();

function isOnTeam(name, team) {
    // return(team[name] === )
    const homeTeamPlayers = game.home.players;
    playerNames = Object.keys(homeTeamPlayers);
    let test = 0;
    for (const player of playerNames) {
        if (player === name) {
            test = 1;
        }
    }
    return test;
}

function numPointsScored(name) {
    if (isOnTeam(name, "home")) {
        return game.home.players[name].points;
    } else {
        return game.away.players[name].points;
    }
}
// console.log(numPointsScored('Mason Plumlee'))

function shoeSize(name) {
    if (isOnTeam(name, "home")) {
        return game.home.players[name].shoe;
    } else {
        return game.away.players[name].shoe;
    }
}
// console.log(shoeSize('Mason Plumlee'))
function teamColors(team) {
    let homeAway;
    if (game.home.teamName === team) {
        return game.home.colors;
    } else if (game.away.teamName === team) {
        return game.away.colors;
    }
}
//console.log(teamColors('Brooklyn Nets'))
const teamNames = () => [game.home.teamName, game.away.teamName];
//console.log(teamNames())
function teamNumbers(team) {
    let numbers = [];
    if (game.home.teamName === team) {
        for (player in game.home.players) {
            numbers.push(game.home.players[player].number);
        }
    } else if (game.away.teamName === team) {
        for (player in game.away.players) {
            numbers.push(game.away.players[player].number);
        }
    }
    return numbers;
}
//console.log(teamNumbers('Charlotte Hornets'))
function playerStats(player) {
    if (isOnTeam(player, "home")) {
        return game.home.players[player];
    } else if (isOnTeam(player, "away")) {
        return game.away.players[player];
    }
}
//console.log(playerStats('Mason Plumlee'))
function bigShoeRebounds() {
    let playerMaxShoe = { name: "", shoeSize: 0 };

    for (const player in game.home.players) {
        if (game.home.players[player].shoe > playerMaxShoe.shoeSize) {
            playerMaxShoe.name = player;
            playerMaxShoe.shoeSize = game.home.players[player].shoe;
        }
    }
    for (const player in game.away.players) {
        if (game.away.players[player].shoe > playerMaxShoe.shoeSize) {
            playerMaxShoe.name = player;
            playerMaxShoe.shoeSize = game.away.players[player].shoe;
        }
    }
    console.log(playerMaxShoe);
    if (isOnTeam(playerMaxShoe.name, "home")) {
        return game.home.players[playerMaxShoe.name].rebounds;
    } else {
        return game.away.players[playerMaxShoe.name].rebounds;
    }
}
// console.log(bigShoeRebounds())
function winningTeam() {
    let winner;
    let homeTotal;
    let awayTotal;
    for (const player in game.home.players) {
        homeTotal = +game.home.players[player].points;
    }
    for (const player in game.away.players) {
        awayTotal = +game.away.players[player].points;
    }
    if (homeTotal > awayTotal) {
        winner = "home";
    } else {
        winner = "away";
    }
    return game[winner].teamName;
}

// console.log(winningTeam())
// function playerWithLongestName(){
//     let allNames = []
//     allNames += Object.keys(game.home.players)
//     allNames += Object.keys(game.away.players)
//     return allNames

// }
// players = playerWithLongestName()
// console.log(players.split(','))
function playerWithLongestName() {
    const homeTeam = game.home.players;
    const awayTeam = game.away.players;
    let nameLength = 0;
    let longName = "";
    for (playerName in homeTeam) {
        if (playerName.length > nameLength) {
            nameLength = playerName.length;
            longName = playerName;
        }
    }
    for (playerName in awayTeam) {
        if (playerName.length > nameLength) {
            nameLength = playerName.length;
            longName = playerName;
        }
    }
    console.log(nameLength);
    return longName;
}
playerWithLongestName();

function doesLongNameStealATon() {
    function playerWithMostSteals() {
        let mostSteals = 0;
        let playerMostSteals = "";
        for (player in game.home.players) {
            if (game.home.players[player].steals > mostSteals) {
                mostSteals = game.home.players[player].steals;
                playerMostSteals = player;
            }
        }
        for (player in game.away.players) {
            if (game.away.players[player].steals > mostSteals) {
                mostSteals = game.away.players[player].steals;
                playerMostSteals = player;
            }
        }
        return playerMostSteals;
    }
    if (playerWithMostSteals() === playerWithLongestName()) {
        return true;
    } else {
        return false;
    }
}
console.log(doesLongNameStealATon());