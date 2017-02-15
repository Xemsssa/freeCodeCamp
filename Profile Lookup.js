// didnot work
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop){
//;
    var i = 0;
    var j = 0;
    var length = contacts.length;

    for ( i; i < length; i++ ) {
        // alert(contacts[i].firstName);
        if (contacts[i].firstName == firstName) {
          
          if (contacts[i].hasOwnProperty(prop)) {
            
              return contacts[i][prop];
            
            } else {
              
              return "No such property";
              
            }
          
        }
        return "No such contact";
    }
}
      
// Only change code above this line

// Change these values to test your function
lookUpProfile("Kristian", "lastName");