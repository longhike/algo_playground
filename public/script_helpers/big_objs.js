function returnCodeText (algo) {
    if (algo === "reverse_string") {
        return `
        <p><strong>function reverseString</strong> (str_input) {</p>
        <p style="text-indent: 30px";>let result = ""</p>
        <p style="text-indent: 30px";>for (i = str_inp.length - 1; i >= 0; i--) {</p>
        <p style="text-indent: 60px";>result += str_inp[i]</p>
        <p style="text-indent: 30px";>}</p>
        <p style="text-indent: 30px";><strong>return</strong> result</p>
        <p>}</p>
        `
    }
    else if (algo === "floyd_triangle") {
        return `
        <p><strong>function floydTriangle</strong> (rows) {</p>
        <p style="text-indent: 30px";>let floyd_results = document.createElement('ul')</p>
        <p style="text-indent: 30px";>let rows_set = 0</p>
        <p style="text-indent: 30px";>let current_row = 1</p>
        <p style="text-indent: 30px";>let current_nums = []</p>
        <p style="text-indent: 30px";>let num = 0</p>
        <p style="text-indent: 30px";>while (rows_set < rows) {</p>
        <p style="text-indent: 60px";>while (current_nums.length < current_row) {</p>
        <p style="text-indent: 90px";>num++</p>
        <p style="text-indent: 90px";>if (current_nums[current_nums.length - 1] !== num) {</p>
        <p style="text-indent: 120px";>current_nums.push(displayHelper(num))</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 60px";>}</p>
        <p style="text-indent: 60px";>rows_set++</p>
        <p style="text-indent: 60px";>current_row++</p>
        <p style="text-indent: 60px";>floyd_results.innerHTML += &grave;&lt;li&gt;&dollar;{current_nums.join(", ")}&lt;/li&gt;&grave;</p>
        <p style="text-indent: 60px";>current_nums.length = 0</p>
        <p style="text-indent: 30px";>}</p>
        <p style="text-indent: 30px";><strong>return</strong> floyd_results.outerHTML</p>
        <p>}</p>
        `
    }
    else if (algo === "three_largest") {
        return `
        <p><strong>function threeLargest</strong> (size) {</p>
        <p style="text-indent: 30px";>let array = arrayMaker(size)</p>
        <p style="text-indent: 30px";>let result = [null, null, null]</p>
        <p style="text-indent: 30px";>if (array) {</p>
        <p style="text-indent: 60px";>for (el of array) {</p>
        <p style="text-indent: 90px";>if (result[2] === null) {</p>
        <p style="text-indent: 120px";>result[2] = el</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (result[1] === null && el <= result[2]) {</p>
        <p style="text-indent: 120px";>result[1] = el</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (result[0] === null && el <= result[1]) {</p>
        <p style="text-indent: 120px";>result[0] = el</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (el > result[2]) {</p>
        <p style="text-indent: 120px";>result[0] = result[1]</p>
        <p style="text-indent: 120px";>result[1] = result[2]</p>
        <p style="text-indent: 120px";>result[2] = el</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (el > result[1] && el <= result[2]) {</p>
        <p style="text-indent: 120px";>result[0] = result[1]</p>
        <p style="text-indent: 120px";>result[1] = el</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (result[0] < el && el <= result[1]) {</p>
        <p style="text-indent: 120px";>result[0] = el</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 60px";>}</p>
        <p style="text-indent: 30px";>}</p>
        <p style="text-indent: 30px";>return result.join(", ")</p>
        <p>}</p>
        `
    }
    else if (algo === "get_primes") {
        return `
        <p><strong>function getPrimes</strong> (num) {</p>
        <p style="text-indent: 30px";>const actual_num = parseInt(num)</p>
        <p style="text-indent: 30px";>let result = []</p>
        <p style="text-indent: 30px";>for (i = 1; i <= num; i++) {</p>
        <p style="text-indent: 60px";>if (i === 2 || i === 3 || i === 5 || i == 7) {</p>
        <p style="text-indent: 90px";>result.push(i)</p>
        <p style="text-indent: 60px";>}</p>
        <p style="text-indent: 60px";>if (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {</p>
        <p style="text-indent: 90px";>result.push(i)</p>
        <p style="text-indent: 60px";>}</p>
        <p style="text-indent: 30px";>}</p>
        <p style="text-indent: 30px";>return result.join(", ")</p>
        <p>}</p>
        `
    }
    else if (algo === "get_fibs") {
        return `
        <p><strong>function getFibs</strong> (n) {</p>
        <p style="text-indent: 30px";>let this_num = parseInt(n)</p>
        <p style="text-indent: 30px";>let count = 1</p>
        <p style="text-indent: 30px";>let result = 1</p>
        <p style="text-indent: 30px";>let previous = 0</p>
        <p style="text-indent: 30px";>if (this_num === 1) {</p>
        <p style="text-indent: 60px";>return 0</p>
        <p style="text-indent: 30px";>} else {</p>
        <p style="text-indent: 60px";>while (count < (this_num - 1)) {</p>
        <p style="text-indent: 90px";>result += previous</p>
        <p style="text-indent: 90px";>previous = result - previous</p>
        <p style="text-indent: 90px";>count++</p>
        <p style="text-indent: 60px";>}</p>
        <p style="text-indent: 60px";>return result</p>
        <p style="text-indent: 30px";>}</p>
        <p>}</p>
        `
    }
    else if (algo === "binary_search") {
        return `
        <p><strong>function binarySearch</strong> (size) {</p>
        <p style="text-indent: 30px";>let target = 255</p>
        <p style="text-indent: 30px";>let array = arrayMaker(size)</p>
        <p style="text-indent: 30px";>let sorted = array.sort(compare)</p>
        <p style="text-indent: 30px";>let min = 0</p>
        <p style="text-indent: 30px";>let max = sorted.length - 1</p>
        <p style="text-indent: 30px";>if (sorted) {</p>
        <p style="text-indent: 60px";>while (min <= max) {</p>
        <p style="text-indent: 90px";>let avg_ind = Math.floor((min + max) / 2)</p>
        <p style="text-indent: 90px";>if (sorted[avg_ind] === target) {</p>
        <p style="text-indent: 120px";>return true</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (sorted[avg_ind] < target) {</p>
        <p style="text-indent: 120px";>min = avg_ind + 1</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 90px";>else if (sorted[avg_ind] > target) {</p>
        <p style="text-indent: 120px";>max = avg_ind - 1</p>
        <p style="text-indent: 90px";>}</p>
        <p style="text-indent: 60px";>}</p>
        <p style="text-indent: 60px";>return false</p>
        <p style="text-indent: 30px";>}</p>
        <p>}</p>
        `
    }
}

// let code_texts = {
//     reverse_string : `
//     <p><strong>function reverseString</strong> (str_inp) {</p>
//     <p style="text-indent: 30px";>let result = ""</p>
//     <p style="text-indent: 30px";>for (i = str_inp.length - 1; i >= 0; i--) {</p>
//     <p style="text-indent: 60px";>result += str_inp[i]</p>
//     <p style="text-indent: 30px";>}</p>
//     <p style="text-indent: 30px";><strong>return</strong> result</p>
//     <p>}</p>
//     `,
//     floyd_triangle : `
//     <p><strong>function floydTriangle</strong> (rows) {</p>
//     <p style="text-indent: 30px";>let floyd_results = document.createElement('ul')</p>
//     <p style="text-indent: 30px";>let rows_set = 0</p>
//     <p style="text-indent: 30px";>let current_row = 1</p>
//     <p style="text-indent: 30px";>let current_nums = []</p>
//     <p style="text-indent: 30px";>let num = 0</p>
//     <p style="text-indent: 30px";>while (rows_set < rows) {</p>
//     <p style="text-indent: 60px";>while (current_nums.length < current_row) {</p>
//     <p style="text-indent: 90px";>num++</p>
//     <p style="text-indent: 90px";>if (current_nums[current_nums.length - 1] !== num) {</p>
//     <p style="text-indent: 120px";>current_nums.push(displayHelper(num))</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 60px";>}</p>
//     <p style="text-indent: 60px";>rows_set++</p>
//     <p style="text-indent: 60px";>current_row++</p>
//     <p style="text-indent: 60px";>floyd_results.innerHTML += &grave;&lt;li&gt;&dollar;{current_nums.join(", ")}&lt;/li&gt;&grave;</p>
//     <p style="text-indent: 60px";>current_nums.length = 0</p>
//     <p style="text-indent: 30px";>}</p>
//     <p style="text-indent: 30px";><strong>return</strong> floyd_results.outerHTML</p>
//     <p>}</p>
//     `,
//     three_largest : `
//     <p><strong>function threeLargest</strong> (size) {</p>
//     <p style="text-indent: 30px";>let array = arrayMaker(size)</p>
//     <p style="text-indent: 30px";>let result = [null, null, null]</p>
//     <p style="text-indent: 30px";>if (array) {</p>
//     <p style="text-indent: 60px";>for (el of array) {</p>
//     <p style="text-indent: 90px";>if (result[2] === null) {</p>
//     <p style="text-indent: 120px";>result[2] = el</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (result[1] === null && el <= result[2]) {</p>
//     <p style="text-indent: 120px";>result[1] = el</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (result[0] === null && el <= result[1]) {</p>
//     <p style="text-indent: 120px";>result[0] = el</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (el > result[2]) {</p>
//     <p style="text-indent: 120px";>result[0] = result[1]</p>
//     <p style="text-indent: 120px";>result[1] = result[2]</p>
//     <p style="text-indent: 120px";>result[2] = el</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (el > result[1] && el <= result[2]) {</p>
//     <p style="text-indent: 120px";>result[0] = result[1]</p>
//     <p style="text-indent: 120px";>result[1] = el</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (result[0] < el && el <= result[1]) {</p>
//     <p style="text-indent: 120px";>result[0] = el</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 60px";>}</p>
//     <p style="text-indent: 30px";>}</p>
//     <p style="text-indent: 30px";>return result.join(", ")</p>
//     <p>}</p>
//     `,
//     get_primes : `
//     <p><strong>function getPrimes</strong> (num) {</p>
//     <p style="text-indent: 30px";>const actual_num = parseInt(num)</p>
//     <p style="text-indent: 30px";>let result = []</p>
//     <p style="text-indent: 30px";>for (i = 1; i <= num; i++) {</p>
//     <p style="text-indent: 60px";>if (i === 2 || i === 3 || i === 5 || i == 7) {</p>
//     <p style="text-indent: 90px";>result.push(i)</p>
//     <p style="text-indent: 60px";>}</p>
//     <p style="text-indent: 60px";>if (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {</p>
//     <p style="text-indent: 90px";>result.push(i)</p>
//     <p style="text-indent: 60px";>}</p>
//     <p style="text-indent: 30px";>}</p>
//     <p style="text-indent: 30px";>return result.join(", ")</p>
//     <p>}</p>
//     `,
//     get_fibs : `
//     <p><strong>function getFibs</strong> (n) {</p>
//     <p style="text-indent: 30px";>let this_num = parseInt(n)</p>
//     <p style="text-indent: 30px";>let count = 1</p>
//     <p style="text-indent: 30px";>let result = 1</p>
//     <p style="text-indent: 30px";>let previous = 0</p>
//     <p style="text-indent: 30px";>if (this_num === 1) {</p>
//     <p style="text-indent: 60px";>return 0</p>
//     <p style="text-indent: 30px";>} else {</p>
//     <p style="text-indent: 60px";>while (count < (this_num - 1)) {</p>
//     <p style="text-indent: 90px";>result += previous</p>
//     <p style="text-indent: 90px";>previous = result - previous</p>
//     <p style="text-indent: 90px";>count++</p>
//     <p style="text-indent: 60px";>}</p>
//     <p style="text-indent: 60px";>return result</p>
//     <p style="text-indent: 30px";>}</p>
//     <p>}</p>
//     `,
//     binary_search : `
//     <p><strong>function binarySearch</strong> (size) {</p>
//     <p style="text-indent: 30px";>let target = 255</p>
//     <p style="text-indent: 30px";>let array = arrayMaker(size)</p>
//     <p style="text-indent: 30px";>let sorted = array.sort(compare)</p>
//     <p style="text-indent: 30px";>let min = 0</p>
//     <p style="text-indent: 30px";>let max = sorted.length - 1</p>
//     <p style="text-indent: 30px";>if (sorted) {</p>
//     <p style="text-indent: 60px";>while (min <= max) {</p>
//     <p style="text-indent: 90px";>let avg_ind = Math.floor((min + max) / 2)</p>
//     <p style="text-indent: 90px";>if (sorted[avg_ind] === target) {</p>
//     <p style="text-indent: 120px";>return true</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (sorted[avg_ind] < target) {</p>
//     <p style="text-indent: 120px";>min = avg_ind + 1</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 90px";>else if (sorted[avg_ind] > target) {</p>
//     <p style="text-indent: 120px";>max = avg_ind - 1</p>
//     <p style="text-indent: 90px";>}</p>
//     <p style="text-indent: 60px";>}</p>
//     <p style="text-indent: 60px";>return false</p>
//     <p style="text-indent: 30px";>}</p>
//     <p>}</p>
//     `
// }

// SECTION HEADERS
let section_headers = {
    reverse_string : "Reverse a String",
    floyd_triangle : "Make a Floyd's Triangle",
    three_largest : "Find Three Largest Integers",
    get_primes : "Find Prime Numbers",
    get_fibs : "Find Fibonacci Number",
    binary_search : "Perform a Binary Search"
}