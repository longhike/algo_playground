// DO-ERS
function reverseString (str_inp) {
    if (str_inp.length > 240) {
        return "240 characters or fewer (including spaces), please"
    }
    let result = ""
    for (i = str_inp.length - 1; i >= 0; i--) {
        result += str_inp[i]
    }
    return result
}

function floydTriangle (rows) {
    if (rows > 50) {
        return "50 rows or fewer, please"
    }
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
    if (size > 5000) {
        return "5000 or smaller, please"
    }
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
    if (num > 100000) {
        return "100,000 or less, please"
    }
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
    if (n > 1250) {
        return "1,250 or less, please"
    }
    let this_num = parseInt(n)
    let count = 1
    let result = 1
    let previous = 0
    if (this_num === 1) {
        return 0
    } else {
        while (count < (this_num - 1)) {
            result += previous
            previous = result - previous
            count++
        }
        return result
    }
}

function binarySearch (size) {
    if (size > 150000) {
        return "150,000 or smaller, please"
    }
    let target = 255
    let array = arrayMaker(size)
    let sorted = array.sort(compare)
    let min = 0
    let max = sorted.length - 1
    if (sorted) {
        while (min <= max) {
            let avg_ind = Math.floor((min + max) / 2)
            if (sorted[avg_ind] === target) {
                return true
            }
            else if (sorted[avg_ind] < target) {
                min = avg_ind + 1
            }
            else if (sorted[avg_ind] > target) {
                max = avg_ind - 1
            }
        }
        return false
    }
}