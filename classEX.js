class classAtDFA {
    constructor(name, instructor){
        this.name = name
        this.instructor = instructor
        this.assistant = null
        this.students = []
    }

    addTA(name) {
        this.assistant = name
    }

    addStudent(lastName, firstName, gender) {
        let student = new Student(lastName, firstName, gender)
        this.students.push(student)
    }

    classToString() {
        if (!this.assistant && this.students.length === 0){
            console.log(`${this.name} is taught by ${this.instructor}, but there is no students yet.`)
        } else if (!this.assistant){
            console.log(`${this.name} is taught by ${this.instructor}, and there is(are) currently ${this.students.length} student(s).`)
        } else {
            console.log(`${this.name} is taught by ${this.instructor} and ${this.assistant}, and there is(are) currently ${this.students.length} student(s).`)
        }
    }
    
}

class Student {
    constructor(lastName, firstName, gender){
        this.lastName = lastName
        this.firstName = firstName
        this.gender = gender
    }
}

let term2 = new classAtDFA('Term 2', 'Yury')

term2.classToString()
term2.addStudent('Lee', 'Mintae', 'Male')
term2.addStudent('ABC', 'ABBB', 'Female')
term2.addStudent('BBC', 'BBEE', 'Male')
term2.addTA('Ginny')
term2.classToString()