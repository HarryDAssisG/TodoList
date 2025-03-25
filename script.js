const button = document.getElementById("button")
const input = document.getElementById("input")
const list = document.getElementById("list")

let listarray = []

function createtaks(){
    listarray.push(input.value)

    showtaks()
}

function showtaks(){

    let newli = ''

    listarray.forEach((task, index) => {    
        newli = newli + `<li class="bg-white w-178 h-12 rounded-xl text-black mt-5 p-3 flex items-center">
        <div class="w-150" id="notes">${task}</div>
        <input type="button" value="Excluir" class="bg-red-500 h-10 w-25 rounded-r-lg hover:cursor-pointer text-black font-bold" onclick="del(${index})">
        </div>
        </li>`})

    list.innerHTML = newli

    input.value = ''

 
}

button.addEventListener('click', createtaks)

function del(index){
    listarray.splice(index, 1 )
    showtaks()
    console.log(index)
}