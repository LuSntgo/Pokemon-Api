let result = document.getElementById("result")



//get axios
axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((res)=>{
    
    let imageURL = res.data.sprites.other["official-artwork"].front_default;
    let image = document.createElement('img');

    image.src = imageURL
    result.appendChild(image)
});
