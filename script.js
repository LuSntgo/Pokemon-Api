let result = document.getElementById("result");
let input = document.getElementById("input");


//pressing enter in our input triggers an api call with axios
input.addEventListener('keyup',(event)=>{
    if (event.key === 'Enter') {
        getPokemon(input.value)
    }
})

const getPokemon = (pokemon) =>{



//get axios
axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res)=>{
    //remove the last result    
    result.innerHTML = ""; 

    let imageURL = res.data.sprites.other["official-artwork"].front_default;
    let image = document.createElement('img');

    image.src = imageURL
    result.appendChild(image)
});
};