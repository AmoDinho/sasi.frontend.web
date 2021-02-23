import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log("process.env.NEXT_PURCHASE_URL", process.env.NEXT_PURCHASE_URL);
export const purchaseClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_PURCHASE_URL,
  cache: new InMemoryCache(),
});
