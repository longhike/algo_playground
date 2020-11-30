const home_planet = document.getElementById('home_planet')
const result_planet = document.getElementById('result_planet')
const select_algorithm = document.getElementById('select_algorithm')
const select_algorithm_button = document.getElementById('select_algorithm_button')

let function_getters = {
    reverse_string : () => {
       return showReverseString()
    },
    floyd_triangle : () => {
        return showFloydTriange()
    }
}

let algo_reference = {
    reverse_string : function () {
        return reverseString(this.input)
    },
    floyd_triangle : function () {
        return floydTriangle(this.input)
    }
}


select_algorithm_button.addEventListener('click', (e) => {
    e.preventDefault()
    return function_getters[select_algorithm.value].call()
})

// This is the function submit handler
document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.id in algo_reference && e.target.type === "submit") {
        result_planet.innerHTML = ""
        let this_value =  { 
            "input" : document.getElementById(`${e.target.id}_input`).value 
        }
        console.log(this_value);
        result_planet.innerHTML = algo_reference[e.target.id].call(this_value)
    }
})

function showReverseString() {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the string you'd like to reverse:</div>
    <form>
        <div class='form-group'>
            <input id='reverse_string_input' class='form-control' placeholder="string here"></input>
        </div>
        <div class='form-group'>
            <button id='reverse_string' class='form-control btn btn-sm btn-info'>Go</button>
        </div>
    </form>
    `
}

function showFloydTriange() {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the number of rows you'd like to input:</div>
    <form>
        <div class='form-group'>
            <input id='floyd_triangle_input' class='form-control' type='number' placeholder="number here"></input>
        </div>
        <div class='form-group'>
            <button id='floyd_triangle' class='form-control btn btn-sm btn-info'>Go</button>
        </div>
    </form>
    `
}

function reverseString (str_inp) {
    let result = ""
    for (i = str_inp.length - 1; i >= 0; i--) {
        result += str_inp[i]
    }
    return result
}

function floydTriangle (rows) {
    let floyd_results = document.createElement('ul')
    // keep track of rendered rows; start at 0
    let rows_set = 0
    // keep track of current iteration, starting at 1
    let current_row = 1
    // keep track of numbers in that row
    let current_nums = []
    let num = 0
    while (rows_set < rows) {
        while (current_nums.length < current_row) {
            num++
            if (current_nums[current_nums.length - 1] !== num) {
                current_nums.push(displayHelper(num))
            }
        } 
        rows_set++
        current_row++
        floyd_results.innerHTML += `<li>${current_nums.join(", ")}</li>`
        // floyd_results.innerHTML += `<li>${current_nums.join(", ")}`
        current_nums.length = 0
    }
    return floyd_results.outerHTML
}

function displayHelper (num) {
    if (num < 10) {
        return '00' + num.toString()
    } 
    else if (10 <= num < 100) {
        return '0' + num.toString()
    }   
    else {
        return num.toString()
    }
}