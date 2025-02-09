import { useMemo } from "react";
import { HeroCards } from "./";
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( hero => (
                <HeroCards 
                    key={ hero.id }
                    { ...hero }
                />
            ))
        }
    </div>
  )
}
