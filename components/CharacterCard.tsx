import { FunctionComponent } from "preact/src/index.js";
import { Character } from "../types.ts";


type Props = {
    character: Character;
};

const CharacterCard: FunctionComponent<Props> = ({character}) => {

    return (
        <>
            <div class="container">
                <a href="/" class="back-link">Volver</a>
                <div class="character-detail">
                    <img src={character.image} alt={character.name} width="200"/>
                    <div class="character-info">
                        <h1 class="title">{character.name}</h1>
                        <ul>
                            <li><strong>Status:</strong> {character.status}</li>
                            <li><strong>Species:</strong> {character.species}</li>
                            <li><strong>Origin:</strong> {character.origin.name}</li>
                            <li><strong>Location:</strong> {character.origin.name}</li>
                        </ul>
                    </div>
                

                </div>


            </div>
            
        </> 
    );
};

export default CharacterCard;
