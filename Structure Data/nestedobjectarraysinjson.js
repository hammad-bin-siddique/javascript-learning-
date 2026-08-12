//! Topic 5: Nested Objects & Arrays in JSON (Deep Dive)

//? Nested Object ka Example

const company =
  '{"name": "Expand More", "address": {"city": "Abbottabad", "zip": "22010"}, "ceo": {"name": "Hammad Siddique", "age": 23}}';

// let convert into parse so we can access

const parsedCompany = JSON.parse(company);
console.log("===Simple Nested Object Example===");
console.log(parsedCompany.ceo.age); // 23
console.log(parsedCompany);
console.log(parsedCompany.ceo.name); // Hammad
console.log(parsedCompany.address.zip); // 22010

//? Nested Array Example

const classRoom =
  '{"teacher": "Sohail Jadoon", "students": ["Hammad", "Bilal", "Fahad", "Farhan"]}';

const parsedClass = JSON.parse(classRoom);

console.log("===Nested Array in Object===");
console.log(parsedClass.teacher); // sohail jaddon
console.log(parsedClass.students[2]); // Fahad
console.log(parsedClass.students.length); // 4
console.log(parsedClass.students[4]); // undefined keuke sirf 4 student hain 5 nahi

//? Complex Nesting — Array of Objects

const mall =
  '{"storeName": "Hamali Store","products": [{ "name": "Bed Sheet", "price": 2999, "size": ["M", "L", "XL", "S", "XS"] },{"name": "Bed","price": 50000,"size": ["Single", "Medium"] }]}';

const parsedMall = JSON.parse(mall);

console.log("====Complex Nesting===");

console.log(parsedMall);
console.log(parsedMall.products[1].price); // 50000
console.log(parsedMall.products[0].size[4]); // XS
console.log(parsedMall.products[1].name); // Bed

//? Multi-Level Nesting (3-4 Levels Deep)

const university =
  '{"name": "AUST", "departments": [{"deptName": "CS", "courses":[{"title": "JavaScript", "teacher": {"name": "Claude", "experience": 2}}]},{"deptName": "Physic", "courses":[{"title": "Astronomy", "teacher": {"name":"Waisb","experience": "5 Years"}}]}]}';

const parseUni = JSON.parse(university);

console.log("===Multi Level Nesting===");

console.log(parseUni.departments[0].courses[0].title); // Javascript
console.log(parseUni.departments[1].courses[0].teacher.name); // Wasib
console.log(parseUni.departments[0].courses[0].teacher.name); // claude
console.log(parseUni.departments[1].courses[0].title); // Astronomy

//! Mini Task

const learning =
  '{"language": "Javascript","topics": [{"subtopics": {"variables": ["Hoisting", "Scope", "Tdz", "variable Shadowing"],"dsa": ["Stack","Map","Set","Queue","Linked List","Object","Array"]}}]}';

const parsedLearning = JSON.parse(learning);

console.log("===Mini Task===");
console.log(parsedLearning.topics[0].subtopics.variables[0]); // hoisting
console.log(parsedLearning.topics[0].subtopics.dsa[3]); // queue
console.log(parsedLearning.topics.length); // 1
console.log(parsedLearning.topics[0].subtopics.variables.length); // 4
console.log(parsedLearning.topics[0].subtopics.dsa); //  whola dsa subtopic print
console.log(parsedLearning.topics[0].subtopics.variables); // whole variable subtopic print
console.log(parsedLearning.topics[0].subtopics.dsa.length); //7
