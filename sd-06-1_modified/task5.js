

// Type your code below this line!
function FriendsList(names) {
    this.friends = names;
}

if (process.argv[2] === '5') {
    const count = parseInt(process.argv[3]);
    const names = process.argv.slice(4, 4 + count);
    const list = new FriendsList(names);
    console.log(list.friends);
}



// Type your code above this line!

