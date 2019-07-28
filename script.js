const search = document.getElementById("search").oninput = onValueChange
let arr
async function getcountries(){
    try{
        const respons = await axios.get('https://restcountries.eu/rest/v2/all');
        arr = respons.data
        console.log(arr)
        displayList(arr)

     

        
    } catch (error) {
        console.error(error);
    }
}

getcountries()

function displayList(arr){
    const html = arr.map(item =>` <li>
    <img
    src="${item.flag}">
    ${item.name} <br>
    <small style="color: gray">${item.region}</small>
    
    </li>` ).join('')
     document.querySelector('#id').innerHTML = html
}

function onValueChange(e) {
    console.log(e)
    let {value} = e.target
    value = value.toLowerCase()

    const filteredArr = arr.filter(item => item.name.toLowerCase().startsWith(value))

    displayList(filteredArr)
}