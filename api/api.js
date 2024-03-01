async function getAllGrades(url = "") {
    let grades = []
    try {
        const response = await fetch(url)
        if (response.ok) {
            grades = await response.json()
        }else{
            console.log("fetch grades failed")
        }
        
    }catch(error) {
        console.error({error})
    }  
    return grades 
}

async function getAllPersons(url = "") {
    let persons = []
    try {
        const response = await fetch(url)
        if (response.ok) {
            persons = await response.json()
        }else{
            console.log("fetch persons failed")
        }
        
    }catch(error) {
        console.error({error})
    }  
    return persons 
}

async function getAllUsers(url = "") {
    let users = []
    try {
        const response = await fetch(url)
        if (response.ok) {
            users = await response.json()
        }else{
            console.log("fetch users failed")
        }
        
    }catch(error) {
        console.error({error})
    }   
    return users
}

async function getGradeById(url = "", id = {id: 0}) {
    let grade = {};

    try {
        const response = await fetch(`${url}/${id}`);

        if (response.ok) {
            grade = await response.json();
        }
    } catch (error) {
        console.error({ error });
    }

    return parseReceivedGrade(grade);
}

async function getPersonById(url = "", id = "") {
    let person = {};

    try {
        const response = await fetch(`${url}/${id}`);

        if (response.ok) {
            person = await response.json();
        }
    } catch (error) {
        console.error({ error });
    }

    return parseReceivedPerson(person);
}

async function getUserById(url = "", id = '') {
    let user = {};

    try {
        const response = await fetch(`${url}/${id}`);

        if (response.ok) {
            user = await response.json();
            console.log(user)
        }
    } catch (error) {
        console.error({ error });
    }
    console.log(user)
    return parseReceivedUser(user);
}

async function addGrade(url = "", grade = {}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(grade)
        })
        const result = response.json()
        return result

    }catch(error) {
        console.error({error})
    }
}

async function addPerson(url = "", person = {}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })
        const result = response.json()
        return result

    }catch(error) {
        console.error({error})
    }
}

async function addUser(url = "", user = {}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const result = response.json()
        return result

    }catch(error) {
        console.error({error})
    }
}

function parseGrade(persons = []) {
    return {
        persons
    }
}

function parseReceivedGrade(response) {
    const {id = 0, name = "", persons = []} = response
    return {
        id,
        name,
        persons
    }
}

function parsePerson(gradeId = 0, grade = {}) {
    return {
        gradeId,
        grade
    }
}

function parseReceivedPerson(response) {
    const {id = 0, name = "", gradeId = 0, grade = {}} = response;
    return {
        id,
        name,
        gradeId,
        grade
    }
}

function parseUser(second = "", first = "", patronymic = "", gradeId = 0, specsId = 0) {
    return {
        second,
        first,
        patronymic,
        gradeId,
        specsId
    }
}

function parseReceivedUser(response) {
    const {
        id = 0,
        second = "",
        first = "",
        patronymic = "",
        gradeId = 0,
        specsId = 0
    } = response
    return {
        id,
        second : "surname",
        first,
        patronymic,
        gradeId,
        specsId
    }
}



