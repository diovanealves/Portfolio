export function projectQuery(language: string) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query project {
        projects(orderBy: createdAt_DESC, locales: ${language}) {
          description
          usedLanguages
          title
          projectWebsite
          linkImage
          githubRepository
        }
      }
      `,
    }),
  };
}
