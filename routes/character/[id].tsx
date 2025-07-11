import Axios from "axios";
import { Character } from "../../types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterCard from "../../components/CharacterCard.tsx";

type Data = {
  character: Character;
}


export const handler: Handlers<Character> = {
  async GET(req: Request, ctx: FreshContext) {
    
    const id = 1;
    
    const response = await Axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);

    const character = response.data;

    return ctx.render({character})
  },
};

export default function Page(props: PageProps<Data>) {

  const character = props.data.character;

  return (
    <>
        <CharacterCard character={character}/>
    </>
  );
};