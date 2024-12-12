import {loadJSONData} from "./modules/init.js"




// CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     ['Id', 'Name', 'Ext', 'Email', 'Department'],
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ]

 
// function toJSON(arrEmployees) {
//     let keys = arrEmployees[0]
//     let data = arrEmployees.slice(1)
//     return JSON.stringify(data.map(row => {
//         const obj = {}
//         keys.forEach((key, i) => obj[key] = row[i])
//         return obj
//     }))
// }
  
// const jsonArray = toJSON(arrEmployees)
// console.log(jsonArray)


// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    loadJSONData("data.json")
    .then(data => {
        for (let i = 0; i < data.length; i++){
            var obj = data[i]
            for (let key in obj){
                var value = obj[key]
            }
            tbody.innerHTML+= 
            `
                <td>${value}</td>
                <td>${value}</td>
                <td>${value}</td>
                <td><a href="mailto:${value}">${value}</a></td>
                <td>${value}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            `    
            }
    console.log("Loaded JSON data:", data)
  })


    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    // empCount.value = `(${data.length})`
}
