import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Pages from '../src/pages';
import Login from "../src/pages/login";


const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  console.log(data)
  return data.isLoggedIn ? <Pages /> : <Login />;
}

export default function ExchangeRates() {
    return(<IsLoggedIn />)
}