import { gql } from "graphql-tag";

export const CREATE_PURCHASE = gql`
  mutation CREATE_PURCHASE($purchaseInput: PurchaseInput!) {
    createPurchase(purchase: $purchaseInput) {
      photoID
      photo {
        name
        imageURL
      }
      dateCreated
      customerEmail
      contributorUsername
    }
  }
`;
