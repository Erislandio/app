import gql from "graphql-tag";

const login = gql`
  mutation login($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        id
        image
        lastname
        name
        projects {
          id
          name
          description
          tasks {
            completed
            id
            name
            description
          }
        }
        email
      }
    }
  }
`;

export { login };
