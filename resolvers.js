const employees = [
    { id: "1", role: "dev", yearsAtCompany: 5, address: "AS15" },
    { id: "2", role: "QA", yearsAtCompany: 8, address: "ONS50" },
    { id: "3", role: "dev", yearsAtCompany: 2, address: "TLS55" }
]

const address = [
    { id: "AS15", street: "Sukhumvit 15", area: "Asok" },
    { id: "TLS55", street: "Sukhumvit 55", area: "Thonglo" },
    { id: "ONS50", street: "Sukhumvit 50", area: "On Nut" }
]

const Query = {
    hallo: () => "Halli und hallo",
    listEmployees: () => employees,
    getByRole: (parent, args) => employees.filter(employee => employee.role === args.role)
}

const Employee = {
    id: (parent) => parent.id,
    role: (parent) => parent.role,
    yearsAtCompany: (parent) => parent.yearsAtCompany,
    address: (parent) => address.find(element => element.id == parent.address)
}

const Address = {
    id: (parent) => parent.id,
    street: (parent) => parent.street,
    area: (parent) => parent.area
}


module.exports = {
    Query,
    Employee,
    Address
}
