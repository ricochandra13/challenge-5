const fetch = require('node-fetch');
const { question } = require('readline-sync');

const gitUser = (username) => new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`,{})
    .then(res => res.json())
    .then(res => {
        resolve(res);
    })
    .catch(err => {
        reject(err)
    })
});

(async() => {
    try{
        console.log('|-------------------------------------------------|')
        console.log('|          Github Detail Profile Checker          |')
        console.log('|-------------------------------------------------|')
        console.log('|                                                 |')
        const username = question('| Input Username Github : ');
        const getUser = await gitUser(username);
        console.log('|                                                 |')
        if(getUser.login == undefined){
            console.log('|-------------------------------------------------|')
            console.log('|                                                 |')
            console.log('| Account Github Not Found...')
            console.log('|                                                 |')
            console.log('|-------------------------------------------------|')
        }else{
            console.log('|-------------------------------------------------|')
            console.log('|                                                 |')
            console.log(`| Username\t: ${getUser.login}`)
            console.log(`| Nama\t\t: ${getUser.name}`)
            console.log(`| Following\t: ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(getUser.following)}`)
            console.log(`| Followers\t: ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(getUser.followers)}`)
            console.log('|                                                 |')
            console.log('|-------------------------------------------------|')
        }
    }catch(err){
        console.log(`| error_msg : ${err}`)
    }
})();