import PokemonCardComponent from "./pokemon-card-component";


class TypePageComponent {


    constructor(pokeService, storageService) {
        this.pokeService = pokeService;
        this.storageService = storageService;
    }

    async start(){

        const params = new URLSearchParams(window.location.search);

        const type = params.get('name');

        const pokemons = await this.pokeService.getPokemonDataByType(type);

        this.render(pokemons)
    }
    

    render(pokemons) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';

        for (const pokemon of pokemons) {
            
            const cardComponent = new PokemonCardComponent(pokemon, this.storageService);

            const card = cardComponent.render();
            
            mainContainer.appendChild(card);

        }
    }

}

export default TypePageComponent;