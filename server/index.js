const app = require('./src/app');

const port = process.env.PORT || 4000;

console.log(process.env.GIT_SERVER);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});