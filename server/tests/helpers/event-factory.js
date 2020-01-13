exports.createEvent = (repo) => {
  return {
      action: "opened",
      dryRun: "true",
      issue: {
        url: "https://api.github.com/repos/octocat/Hello-World/issues/1347",
        number: 1347
      },
      repository: {
        id: 1296269,
        full_name: `test-user/${repo}`,
        owner: {
          login: "octocat",
          id: 1
        }
      },
      sender: {
        login: "octocat",
        id: 1
      }
    }
}