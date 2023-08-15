import React, { useEffect, useState } from 'react';
import './Pokelist.css';
import PokemonCard from './Pokemoncard';
import axios from 'axios';

export default function Pokelist() {
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        const getAllPokemons = async () => {
            try {
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0");
                const data = res.data;

                const pokemonPromises = data.results.map(async (pokemon) => {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    return res.data;
                });

                const pokemonData = await Promise.all(pokemonPromises);
                const sortedPokemons = pokemonData.sort((a, b) => a.id - b.id);
                setAllPokemons(sortedPokemons);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getAllPokemons();
    }, []);

    return (
        <div className='app-container'>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats) => (
                        <PokemonCard key={pokemonStats.name}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            image={pokemonStats.sprites.other["official-artwork"].front_default}
                            name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                            type={pokemonStats.types[0].type.name}
                            weight={pokemonStats.weight}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats.map((stat) => stat.base_stat).slice(0, 3)}
                            statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0, 3)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
