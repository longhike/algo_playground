const run_content = document.getElementById("run_content")
const main_container = document.querySelector('.main')
const home_planet = document.getElementById('home_planet')
const results_row = document.getElementById("results_row")
const result_planet = document.getElementById('result_planet')
const code_header = document.getElementById('code_header')
const code_planet = document.getElementById('code_planet')
const select_algorithm = document.getElementById('select_algorithm')
const select_algorithm_button = document.getElementById('select_algorithm_button')
const header_text = document.getElementById('section_header')
// SECTION HEADERS
const section_headers = {
    reverse_string : "Reverse a String",
    floyd_triangle : "Make a Floyd's Triangle",
    three_largest : "Find Three Largest Integers",
    get_primes : "Find Prime Numbers",
    get_fibs : "Find Fibonacci Number",
    binary_search : "Perform a Binary Search"
}
// SHOW THE FUNCTION CARDS
const function_getters = {
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
    },
    binary_search : () => {
        return showBinarySearch()
    }
}
// DO THE FUNCTIONS
const algo_reference = {
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
    },
    binary_search : function () {
        return binarySearch(this.input)
    }
}