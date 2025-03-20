import PokemonCardComponent from "./pokemon-card-component";

class StarredPageComponent {


    constructor( storageService) {

        this.storageService = storageService;
    }

    async start(){

        this.pokemons = await this.storageService.getStarredPokemonData();
        this.render(this.pokemons)
    }
    

    render(pokemons) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';

        for (let i = 0; i < pokemons.length; i++) {

            const pokemon = pokemons[i]

            const cardComponent = new PokemonCardComponent(pokemon, this.storageService, false);

            const card = cardComponent.render();
            
            mainContainer.appendChild(card);
            
        }
    }


}

export default StarredPageComponent;