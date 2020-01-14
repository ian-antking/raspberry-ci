const exec = require('child_process').exec;

exports.handleEvent = (req, res) => {
  const execCallback = (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error })
    }
    if (stderr || stdout) {
      return res.status(201).json({
        stdout: stdout,
        stderr: stderr,
      })
    }
  }

  let command;

  console.log(req.repoPath);

  if (req.actions.clone) {
    command = `git -C ${req.projectsPath} clone ${req.repoUrl}`;
  } else {
    command = `
      git -C ${req.repoPath} reset --hard &&
      git -C ${req.repoPath} clean -df &&
      git -C ${req.repoPath} pull
    `
  }
  exec(command, execCallback);
}
