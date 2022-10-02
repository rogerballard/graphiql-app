import GraphiQL from 'graphiql'
import 'graphiql/graphiql.min.css';
import './App.css';

export default function App() {
  return (
    <GraphiQL
      fetcher={async (graphQLParams) => {
        const data = await fetch(
          'https://swapi-graphql.netlify.app/.netlify/functions/index',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphQLParams),
            credentials: 'same-origin',
          },
        );
        return data.json().catch(() => data.text());
      }}
    />
  );
}
