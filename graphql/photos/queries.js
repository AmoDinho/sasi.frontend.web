import gql from "graphql-tag";

export const GET_ALL_PHOTOS = gql`
  query GET_ALL_PHOTOS {
    getAllPhotos {
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
