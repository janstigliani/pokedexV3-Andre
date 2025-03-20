class PokemonCardComponent {


    constructor(pokemon, storageService, hasSave = true) {
        this.pokemon = pokemon;
        this.storageService = storageService
        this.hasSave = hasSave;
    }

    render() {
        const pokeContainer = document.createElement('a');
        pokeContainer.href = './detail.html?id=' + this.pokemon.id;
        const html = `
                <img src="${this.pokemon.image}" alt="">
                <h3>${this.pokemon.name}</h3>
                <span>${this.pokemon.type}</span>
            `
        pokeContainer.innerHTML = html;
        
        if(this.hasSave){
            const saveBtn = document.createElement('button');

            saveBtn.addEventListener('click', (event) => this.savePokemon(event))
    
            const node = document.createTextNode('salva');
    
            saveBtn.appendChild(node);
    
            pokeContainer.appendChild(saveBtn);
        }

        return pokeContainer;
    }

    savePokemon(event) {
        event.preventDefault();
        this.storageService.save(this.pokemon);
    }

}

export default PokemonCardComponent;