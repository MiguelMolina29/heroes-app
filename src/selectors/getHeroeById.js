import heroes from "../data/heroes";

const getHeroeById = (id) => {
    
    return heroes.find( hero => hero.id === id);

}

export default getHeroeById
