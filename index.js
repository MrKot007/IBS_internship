async function getAll(url = "") {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const grades = await response.json()
            return grades
        }else{
            alert('Something went wrong')
        }
        
    }catch(error) {
        alert(`${error.message}`)
    }   
}

async function getDataById(url = "", id = {id: 0}) {
    try {
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify(id)
        })
        if (response.ok) {
            return response.json()
        }else{
            alert('Something went wrong')
        }
        

    }catch(error) {
        alert(`${error.message}`)
    }
}

async function addData(url = "", data = {}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = response.json()
        return result

    }catch(error) {
        alert(`${error.message}`)
    }
}

class Grade {
    constructor(persons) {
        this.persons = persons
    }
}

class GradeReceived {
    constructor(id, name, persons) {
        this.id = id
        this.name = name
        this.persons = persons
    }
}

class Person {
    constructor(gradeId, grade) {
        this.gradeId = gradeId
        this.grade = grade
    }
}

class PersonReceived {
    constructor(id, name, gradeId, grade) {
        this.id = id
        this.name = name
        this.gradeId = gradeId
        this.grade = grade
    }
}

class User {
    constructor(second, first, patronymic, gradeId, specsId) {
        this.second = second
        this.first = first
        this.patronymic = patronymic
        this.gradeId = gradeId
        this.specsId = specsId
    }
}

class UserReceived {
    constructor(id, second, first, patronymic, gradeId, specsId) {
        this.id = id
        this.second = second
        this.first = first
        this.patronymic = patronymic
        this.gradeId = gradeId
        this.specsId = specsId
    }
}

