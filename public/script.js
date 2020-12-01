const home_planet = document.getElementById('home_planet')
const result_planet = document.getElementById('result_planet')
const select_algorithm = document.getElementById('select_algorithm')
const select_algorithm_button = document.getElementById('select_algorithm_button')

// SHOW THE FUNCTION CARDS
let function_getters = {
    reverse_string : () => {
       return showReverseString()
    },
    floyd_triangle : () => {
        return showFloydTriange()
    },
    three_largest : () => {
        return showThreeLargest()
    },
    get_primes : () => {
        return showGetPrimes()
    },
    get_fibs : () => {
        return showGetFibs()
    }
}

// DO THE FUNCTIONS
let algo_reference = {
    reverse_string : function () {
        return reverseString(this.input)
    },
    floyd_triangle : function () {
        return floydTriangle(this.input)
    },
    three_largest : function () {
        return threeLargest(this.input)
    },
    get_primes : function () {
        return getPrimes(this.input)
    },
    get_fibs : function () {
        return getFibs(this.input)
    }
}

// This is the function shower; it calls as a return the function located in function_getters to show that functions input form
select_algorithm_button.addEventListener('click', (e) => {
    e.preventDefault()
    return function_getters[select_algorithm.value].call()
})

// This is the function submit handler
document.addEventListener('click', (e) => {
    e.preventDefault()
    // if the id of the clicked button is in the algo_reference object and the type is submit (so we can ensure it's a button), it'll call the algorithm 
    if (e.target.id in algo_reference && e.target.type === "submit") {
        result_planet.innerHTML = ""
        let this_value =  { 
            "input" : document.getElementById(`${e.target.id}_input`).value 
        }
        result_planet.innerHTML = algo_reference[e.target.id].call(this_value)
        document.getElementById(`${e.target.id}_input`).textContent = ''
    }
    else if (e.target.id === 'home') {
        window.location.reload()
    }
    else if (e.target.id === 'clear') {
        result_planet.textContent = ""
    }
})

// SHOWERS

function showReverseString() {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the string you'd like to reverse:</div>
    <form>
        <div class='form-group'>
            <input id='reverse_string_input' class='form-control' type='text' placeholder="string here"></input>
        </div>
        <div class='form-group'>
            <button id='reverse_string' class='btn btn-sm btn-info'>Go</button>
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
            <button id='floyd_triangle' class='btn btn-sm btn-info'>Go</button>
        </div>
    </form>
    `
}

function showThreeLargest() {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the size of the search set, then hit "Go" to see the largest numbers in that set:</div>
    <form>
        <div class='form-group'>
            <input id='three_largest_input' class='form-control' type='number' placeholder="size here"></input>
        </div>
        <div class='form-group'>
            <button id='three_largest' class='btn btn-sm btn-info'>Go</button>
        </div>
    </form>
    `
}

function showGetPrimes() {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter a positive integer and click "Go" to see all the prime numbers between 1 and that number:</div>
    <form>
        <div class='form-group'>
            <input id='get_primes_input' class='form-control' type='number' placeholder="positive integer here"></input>
        </div>
        <div class='form-group'>
            <button id='get_primes' class='btn btn-sm btn-info'>Go</button>
        </div>
    </form>
    `
}

function showGetFibs() {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the number of iterations through which the algorithm F(n) = F(n-1) + F(n-2), where F(1) = 0 and F(2) = 1, should run:</div>
    <form>
        <div class='form-group'>
            <input id='get_fibs_input' class='form-control' type='number' placeholder="positive integer here"></input>
        </div>
        <div class='form-group'>
            <button id='get_fibs' class='btn btn-sm btn-info'>Go</button>
        </div>
    </form>
    `
}

// DO-ERS

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
        current_nums.length = 0
    }
    return floyd_results.outerHTML
}

function threeLargest (size) {
    let array = arrayMaker(size)
    let result = [null, null, null]
    if (array) {
        for (el of array) {
            if (result[2] === null) {
                result[2] = el
            }
            else if (result[1] === null && el <= result[2]) {
                result[1] = el
            }
            else if (result[0] === null && el <= result[1]) {
                result[0] = el
            }
            else if (el > result[2]) {
                result[0] = result[1]
                result[1] = result[2]
                result[2] = el
            }
            else if (el > result[1] && el <= result[2]) {
                result[0] = result[1]
                result[1] = el
            }
            else if (result[0] < el && el <= result[1]) {
                result[0] = el
            } 
        }
    }
    return result.join(", ")
    
}

function getPrimes (num) {
    const actual_num = parseInt(num)
    let result = []
    for (i = 1; i <= num; i++) {
        if (i === 2 || i === 3 || i === 5 || i == 7) {
            result.push(i)
        }
        if (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            result.push(i)
        }
    }
        return result.join(", ")
}

function getFibs (n) {
    let count = 1
    let result = 1
    let previous = 0
    if (n === 1) {
        return previous
    } else {
        while (count < (n - 1)) {
            result += previous
            previous = result - previous
            count++
        }
        return result
    }
}

// HELPERS

function displayHelper (num) {
    if (num < 10) {
        return '00' + num.toString()
    } 
    else if (10 <= num && num < 100) {
        return '0' + num.toString()
    }   
    else {
        return num.toString()
    }
}

function arrayMaker (length_input) {
    let result = []
    let i = 0
    while (i < length_input) {
        result.push(Math.floor(Math.random() * (10000 - (-10000)) + (-10000)))
        i++
    }
    return result
}