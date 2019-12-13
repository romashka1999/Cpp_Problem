const fs = require('fs');

function createTest(num){
    function getRandomBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function makeStr(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    let teams = []; //sufta masivi sadac chaiwereba gindis saxelebi
    const n = getRandomBetween(10, 100);//gundebis raodenoba
    const e = getRandomBetween(10, 100);//etapebis raodenoba

    const fn = `./tests/file.I${num}`;

    fs.appendFileSync(fn, `${n} ${e} `);

    for(let i=1; i<=n; i++){
        let teamName = makeStr(getRandomBetween(3,10));
        while(teams.includes(teamName)){
            teamName = makeStr(getRandomBetween(3,10));
        }
        teams.push(teamName);
    }

    for(let i=1; i<=e; i++) {
        for(team of teams) {
            const point = getRandomBetween(1,20);
            const fine = getRandomBetween(1,20);
            fs.appendFileSync(fn, `\n${team} ${point} ${fine} `);
            console.log(team + ' ' + point + ' ' + fine);
        }
    }
}


for( let i=1; i<=10; i++) {
    createTest(i);
}


