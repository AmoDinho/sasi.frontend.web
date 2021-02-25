import gql from "graphql-tag";

export const GET_A_USER = gql`
  query GET_A_USER($ID: String!) {
    getAUser(ID: $ID) {
      ID
      username
      name
      surname
      email
      type
      socialAccounts {
        name
        url
      }
    }
  }
`;
