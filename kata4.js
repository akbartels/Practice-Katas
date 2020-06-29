
// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. 
// If there are two instructors with the longest name, return the first one.


const instructorWithLongestName = function(instructors) {
  let result = {};
  let nameLength = 0;

  for (const instructor of instructors) {

    if (instructor.name.length > nameLength) {
      nameLength = instructor.name.length;
      result = instructor;
    }
  }
    
  return result;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


// Expected Output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}