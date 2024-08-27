import React, {FC} from 'react';
import {IPokemonById} from "../../models/IPokemonById";
import cl from './Pokemon.module.css';

interface IProps {
    pokemonById: IPokemonById,
}

const PokemonInfoComponent: FC<IProps> = ({pokemonById}) => {
    const {
        abilities,
        name,
        types,
        sprites,
    } = pokemonById

    return (
        <main className={cl.main}>
            <div className={cl.wrapper}>
                <div className={cl.divImg}>
                    <div className={cl.wrapperImgName}>
                        <div>
                            <img src={sprites.other.dream_world.front_default} alt={name} className={cl.img}/>
                            <img src={sprites.other.showdown.back_default} alt={name} className={cl.smallImg}/>
                            <img src={sprites.other.showdown.front_default} alt={name} className={cl.smallImg}/>
                        </div>
                        <h2 className={cl.h2}>{name}</h2>
                    </div>

                </div>
            </div>

            <hr/>

            <div className={cl.type}>
                <h3>Type</h3>
                <ul className={cl.typeUl}>
                    {
                        types.map((item, index) => <li key={index} className={cl.typeLi}>{item.type.name}</li>)
                    }
                </ul>
            </div>

            <div className={cl.abilities}>
                <h3>Abilities</h3>
                <ul className={cl.abilitiesUl}>
                    {
                        abilities.map((item, index) => <li key={index}>{item.ability.name}</li>)
                    }
                </ul>
            </div>

            <hr/>

        </main>
    );
};

export default PokemonInfoComponent;