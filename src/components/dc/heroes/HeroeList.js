import React, { useMemo } from 'react'
import getHeroesByPublisher from '../../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__backInLeft">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}/>
                    
                ))
            }
        </div>
    )
}

export default HeroeList