import gql from "graphql-tag";
export const createProject = gql`
  mutation createProject($description: String, $name: String!, $userId: [ID!]) {
    createProject(description: $description, name: $name, usersIds: $userId) {
      description
      id
      name
    }
  }
`;

export const getProjectByUserId = gql`
  query getProjectByUserId($id: ID!) {
    allProjects(filter: { users_some: { id: $id } }) {
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
          id
          startDate
          updatedAt
        }
      }
    }
  }
`;
