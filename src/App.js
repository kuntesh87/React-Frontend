import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
  books{
    name,
    genre
  }
}
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ name, genre }) => (
    <div key={name}>
      <p>
        {name}: {genre}
      </p>
    </div>
  ));
}