import gql from "graphql-tag";

export const Get_Project = gql`
  query MyQuery {
    projects {
      id
      title
      description
      linkImage
      projectWebsite
      githubRepository
      usedLanguages
    }
  }
`;
