const employees = [
    { id: "1", role: "dev", yearsAtCompany: 5},
    { id: "2", role: "QA", yearsAtCompany: 8 },
    { id: "3", role: "dev", yearsAtCompany: 2 }
]

const Query = {
    hallo: () => "Halli und hallo",
    listEmployees: () => employees
}

const Employee = {
    id: (parent) => parent.id,
    role: (parent) => parent.role,
    yearsAtCompany: (parent) => parent.yearsAtCompany
}


module.exports = {
    Query
}
