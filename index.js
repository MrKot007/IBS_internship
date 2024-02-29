async function getAllGrades(url = "") {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data
        }else{
            console.log("fetch grades failed")
        }
        
    }catch(error) {
        console.error({error})
    }   
}

async function getAllPersons(url = "") {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data
        }else{
            console.log("fetch persons failed")
        }
        
    }catch(error) {
        console.error({error})
    }   
}

async function getAllUsers(url = "") {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data
        }else{
            console.log("fetch users failed")
        }
        
    }catch(error) {
        console.error({error})
    }   
}

async function getGradeById(url = "", id = {id: 0}) {
    let response = {};

    try {
        response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
        }
    } catch (error) {
        console.error({ error });
    }

    return parseReceivedGrade(response);
}

async function getPersonById(url = "", id = {id: 0}) {
    let response = {};

    try {
        response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
        }
    } catch (error) {
        console.error({ error });
    }

    return parseReceivedPerson(response);
}

async function getUserById(url = "", id = {id: 0}) {
    let response = {};

    try {
        response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
        }
    } catch (error) {
        console.error({ error });
    }

    return parseReceivedUser(response);
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
    return {id, second, first, patronymic, gradeId, specsId}
}

