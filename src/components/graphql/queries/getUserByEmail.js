import gql from "graphql-tag";
export const getUserByEmail = gql`
  query getUserByEmail($email: String!) {
    User(email: $email) {
      createdAt
      email
      id
      image
      lastname
      name
      projects {
        createdAt
        description
        id
        name
        tasks {
          completed
          createdAt
          description
          id
          name
          works {
            completed
            createdAt
            date
            description
            endDate
            startDate
          }
        }
      }
    }
  }
`;
