import gql from "graphql-tag";

export const GET_A_USER = gql`
  query GET_A_USER($ID: String!) {
    getAUser(ID: $ID) {
      ID
      contributorID
      contributorUsername
      createdAt
      updatedAt
      s3URL
      fileSize
      dimensions
    }
  }
`;
