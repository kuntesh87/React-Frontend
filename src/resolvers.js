import gql from "graphql-tag";

export const typeDefs = gql`
 extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
 extend type Book {
  title: String
  author: Author
}

extend type Author {
  name: String
  books: [Book]
}
`;

export const resolvers = {};