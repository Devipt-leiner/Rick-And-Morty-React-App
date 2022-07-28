import "./App.css";

import Character from "./components/Character";
import Header from "./components/Header";

import { useQuery, gql } from "@apollo/client";

function App() {
  return (
    <div className="App">
      <Header />
      <Character />
      <DisplayCharacters />
    </div>
  );
}

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        species
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        created
      }
    }
  }
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name, image }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${image}`} />
      <br />
      <b>About this location:</b>
      <p>{name}</p>
      <br />
    </div>
  ));
}

export default App;
