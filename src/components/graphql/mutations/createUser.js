import gql from "graphql-tag";
export const createUser = gql`
  mutation crateUser(
    $email: String!
    $password: String!
    $name: String!
    $lastname: String
  ) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
      name: $name
      lastname: $lastname
    ) {
      email
      image
      lastname
      name
      projects {
        tasks {
          completed
          createdAt
          description
          id
          name
          works {
            completed
            date
            createdAt
            description
            endDate
            id
            startDate
          }
        }
        description
        name
        id
        createdAt
      }
    }
  }
`;

export const updateProfilePicture = gql`
  mutation updateProfilePicture($id: ID!, $image: String) {
    updateUser(id: $id, image: $image) {
      image
    }
  }
`;
