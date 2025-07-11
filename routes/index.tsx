import Axios from "axios";
import { Character } from "../types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharactersList from "../components/CharactersList.tsx";

type Data = {
  characters: Character[];
}

export const handler: Handlers<Character[]> = {
  async GET(_req: Request, ctx: FreshContext) {
    
    const response = await Axios.get<Data>("https://rickandmortyapi.com/api/character/?page=1");

    const characters = response.data.characters;

    return ctx.render({characters})
  },
};

export default function Page(props: PageProps<Data>) {

  const characters = props.data.characters;

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <CharactersList characters={characters}/>
    </>
  );
};