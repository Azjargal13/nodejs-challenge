const profiles = new Map()
profiles.set('insta', 'testUser')
profiles.set('googleplus', 'testUserGP')
profiles.set('fb', 'testUserFB')
profiles.set('twitter', 'testUserTW')

console.log(profiles.size)
console.log(profiles.has('youtube'))
console.log(profiles.has('fb'))

for (const iterator of profiles) {
    console.log(iterator)
}

// map key assign to function or object
const tests = new Map()

// key is assigned as a function
tests.set(()=> 2+2, 4)
tests.set(()=> 2*2, 4)
tests.set(()=> 2/2, 1)

for (const i of tests) {
    console.log( (i[0]() === i[1]) ? "correct" : "incorrect" );
}

// set 
const s = new Set([0, 1, 2, 3])
console.log(s.size)
