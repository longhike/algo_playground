window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault() 
    run()
})

document.addEventListener('click', (e) => {
    e.preventDefault()
    // this handles the function submit on any given algorithm
    if (e.target.id in algo_reference && e.target.type === "submit") {
        result_planet.innerHTML = ""
        let this_value =  { 
            "input" : document.getElementById(`${e.target.id}_input`).value 
        }
        result_planet.innerHTML = `<h5 style='font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;'>Here's the output</h5>`
        result_planet.innerHTML += algo_reference[e.target.id].call(this_value)
        showCode(e.target.id)
        document.getElementById(`${e.target.id}_input`).value = ""
        results_row.style.display = "flex"

    }
    // this handles the original algorithm choice
    else if (e.target.id === 'select_algorithm_button') {
        run_content.style.display = "none"
        home_planet.style.display = "block"
        section_header.textContent = ""
        section_header.textContent = section_headers[select_algorithm.value]
        return function_getters[select_algorithm.value].call()
    }
    else if (e.target.id === 'home') {
        run()
    }
    else if (e.target.id === 'clear') {
        results_row.style.display = "none"
        code_planet.textContent = ""
        result_planet.textContent = ""
    }
})

function run() {
    section_header.textContent = ""
    section_header.textContent="A place to test some algorithms!"
    home_planet.style.display = "none"
    results_row.style.display = "none"
    run_content.style.display = "block"
}