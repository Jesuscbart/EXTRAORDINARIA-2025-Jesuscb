import { FunctionComponent } from "preact/src/index.js";
import { Character } from "../types.ts";


type Props = {
    characters: Character[];
};

const CharactersList: FunctionComponent<Props> = ({characters}) => {

    return (
        <>
            <h1>Listado</h1>
            {characters.map((char) => (
                <div key={char.id}>
                    <li>Nombre: {char.name}</li>
                </div>
            ))}
        </> 
    );
};

export default CharactersList;
