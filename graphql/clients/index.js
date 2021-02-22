import { ApolloClient, InMemoryCache } from "@apollo/client";

export const purchaseClient = new ApolloClient({
  uri: process.env.NEXT_PURCHASE_URL,
  cache: new InMemoryCache(),
});
