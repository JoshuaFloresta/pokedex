import React, { useEffect, useState } from 'react';
import './Pokelist.css';
import PokemonCard from './Pokemoncard';
import Rotate from './Rotate'

export default function Pokelist() {
    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0");
        const data = await res.json();

        function createPokemonObject(results) {
            results.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();

                // Check if a Pokémon with the same ID already exists
                if (!allPokemons.some(p => p.id === data.id)) {
                    setAllPokemons((currentList) => [...currentList, data]);
                }
            });
        }
        createPokemonObject(data.results);
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div>
            <div id="rotate">
                <Rotate/>
            </div>
        
        <div className='app-container'>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats) => (
                        <PokemonCard
                            key={pokemonStats.id}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            image={pokemonStats.sprites.other["official-artwork"].front_default}
                            name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                            types={pokemonStats.types.map((type) => type.type.name)}
                            weight={pokemonStats.weight}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats.map((stat) => stat.base_stat).slice(0, 3)}
                            statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0, 3)}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}
