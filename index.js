function writeCards(people, event) {
    const people = [];
    for( let i = 0; i <people.length; i++) {
        people.push('thank you:["Guadalupe", "Ole", "Aki"] ${people[i]}, for the wonderful ${event} gift!');
    
    }
    return people;
}
function countDown(num) {
    while (num>=0){
        console.log(num);
        num --;
    }
}