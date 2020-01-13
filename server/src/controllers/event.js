const exec = require('child_process').exec;

exports.handleEvent = (req, res) => {
  const execCallback = (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error })
    }
    if (stderr.includes('warning')) {
      return res.status(201).json({ message: stderr })
    }
    if (stderr) {
      return res.status(500).json({ error: stderr })
    }
    if (stdout) {
      return res.status(201).json({ message: stdout })
    }
  }

  let command;

  if (req.actions.clone) {
    command = `git -C ${req.projectsPath} clone ${req.repoUrl}`;
  } else {
    conmmand = `
      git -C ${req.repo} reset --hard &&
      git -C ${req.repo} clean -df &&
      git -C ${req.repo} pull
    `
  }
  exec(command, execCallback);
}
