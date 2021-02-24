import { ApolloClient, InMemoryCache } from "@apollo/client";
export const purchaseClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_PURCHASE_URL,
  cache: new InMemoryCache(),
});

export const usersClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_USERS_URL,
  cache: new InMemoryCache(),
});
