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
        result.push(Math.floor(Math.random() * (1000 - (-1000)) + (-1000)))
        i++
    }
    return result
}

function compare (a, b) {
    if (a > b) {
        return 1
    } 
    else if (a < b) {
        return -1
    }
    return 0
}