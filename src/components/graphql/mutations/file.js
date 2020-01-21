import gql from "graphql-tag";
export const deleteFile = gql`
  mutation deleteFile($id: ID!) {
    deleteFile(id: $id) {
      id
      secret
    }
  }
`;
