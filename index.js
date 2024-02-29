async function getAll(url = "") {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data
        }else{
            alert('Something went wrong')
        }
        
    }catch(error) {
        alert(`${error.message}`)
    }   
}

async function getSomethingById(url = "", id = {id: 0}) {
    let response = {};

    try {
        response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
        }
    } catch (error) {
        console.error({ error });
    }

    return parseSomethig(response);
}


async function getDataById(url = "", id = {id: 0}) {
    try {
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify(id)
        })
        if (response.ok) {
            return 
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


function parseGrade(persons = []) {
    return {
        persons
    }
}

function createReceivedGrade(response) {
    const {id = 0, name = "", persons = []} = response
    return {
        id,
        name,
        persons
    }
}

function createPerson(gradeId = 0, grade = {}) {
    return {
        gradeId,
        grade
    }
}

function createReceivedPerson(response) {
    const {id = 0, name = "", gradeId = 0, grade = {}} = response;
    return {
        id,
        name,
        gradeId,
        grade
    }
}

function createUser(second = "", first = "", patronymic = "", gradeId = 0, specsId = 0) {
    return {
        second,
        first,
        patronymic,
        gradeId,
        specsId
    }
}

function createReceivedUser(response) {
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

