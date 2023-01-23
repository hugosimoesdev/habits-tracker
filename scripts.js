const form = document.querySelector('.form')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button') 

// quando clicar vai acionar a função
button.addEventListener('click', add)
// quando houver uma "mudança" vai acionar a função
form.addEventListener("change", save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)
    if(dayExists){
        alert('Dia já incluso ❌')
    } else {
        nlwSetup.addDay(today)
        alert('Dia incluido com sucesso ✅')
    }
}

function save(){
    // salvando o conte´údo no storage do navegador
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
const data = {
    run: ['01-23', '01-22', '01-20',],
    water: ['01-17', '01-18', '01-19'],
    healthFood: ['01-15', '01-16', '01-21']   
}

nlwSetup.setData(data)
nlwSetup.load()