// SHOWERS
function showCode (algo) {
    code_planet.textContent = ""
    code_planet.innerHTML = "<h5>Here's the code</h5>"
    code_planet.innerHTML += returnCodeText(algo)
}

function showReverseString () {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the string you'd like to reverse (max 240 characters):</div>
    <form>
        <div class='form-group'>
            <input id='reverse_string_input' class='form-control' type='text' placeholder="string here"></input>
        </div>
        <div class='form-group'>
            <button id='reverse_string' class='btn btn-info'>Go</button>
        </div>
    </form>
    `
}

function showFloydTriange () {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the number of rows you'd like to show (max 50 rows):</div>
    <form>
        <div class='form-group'>
            <input id='floyd_triangle_input' class='form-control' type='number' placeholder="number here"></input>
        </div>
        <div class='form-group'>
            <button id='floyd_triangle' class='btn btn-info'>Go</button>
        </div>
    </form>
    `
}

function showThreeLargest () {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the size of the search set, then hit "Go" to see the largest numbers in that set (max set size is 5,000):</div>
    <form>
        <div class='form-group'>
            <input id='three_largest_input' class='form-control' type='number' placeholder="size here"></input>
        </div>
        <div class='form-group'>
            <button id='three_largest' class='btn btn-info'>Go</button>
        </div>
    </form>
    `
}

function showGetPrimes () {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter a positive integer and click "Go" to see all the prime numbers between 1 and that number (max is 100,000):</div>
    <form>
        <div class='form-group'>
            <input id='get_primes_input' class='form-control' type='number' placeholder="positive integer here"></input>
        </div>
        <div class='form-group'>
            <button id='get_primes' class='btn btn-info'>Go</button>
        </div>
    </form>
    `
}

function showGetFibs () {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the number of iterations through which the algorithm F(n) = F(n-1) + F(n-2), where F(1) = 0 and F(2) = 1, should run (max cycles is 1,250):</div>
    <form>
        <div class='form-group'>
            <input id='get_fibs_input' class='form-control' type='number' placeholder="positive integer here"></input>
        </div>
        <div class='form-group'>
            <button id='get_fibs' class='btn btn-info'>Go</button>
        </div>
    </form>
    `
}

function showBinarySearch () {
    home_planet.textContent = ""
    home_planet.innerHTML = `
    <div class='card-header'>Enter the size of the array you'd like to search, then hit "Go" - a search will be performed to see whether the value 255 is included (max size is 150,000).</div>
    <form>
        <div class='form-group'>
            <input id='binary_search_input' class='form-control' type='number' placeholder="length of array here (must be positive)"></input>
        </div>
        <div class='form-group'>
            <button id='binary_search' class='btn btn-info'>Go</button>
        </div>
    </form>
    `
}
