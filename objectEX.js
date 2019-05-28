let codeImmersives = {};
codeImmersives.name = "Code Immersives";
codeImmersives.address = "630 9th Avenue Suite #901, New York, NY 10036";
codeImmersives.phone = "646-215-2200";
codeImmersives.website = "https://www.codeimmersives.com/";
codeImmersives.term2 = new Term('Term 2', 'Yury', 'Ginny');
codeImmersives.term2.students.mintae = new Student('Lee', 'Mintae', 'Male')


function Term(name, instructor, assistant) {
    this.name = name;
    this.instructor = instructor;
    this.assistant = assistant;
    this.students = {};
}

function Student(lastName, firstName, gender){
    this.lastName = lastName;
    this.firstName = firstName;
    this.gender = gender;
}

