# Raspberry-CI

A simple express app for setting up continuous integration in a raspberry-pi project.

## Getting Set Up

Clone this repo onto your Raspberry Pi and install: 

```
git clone https://github.com/ian-antking/raspberry-ci.git
cd raspberry-ci
npm install
```

The express app requires a `.env` folder in the root of the repo: 
```
touch .env
```

Edit the file so that it contains the following key/value pairs:
```
PORT=8000
PROJECT_PATH=/Users/<YOUR_USER_NAME>/<PROJECTS_DIRECTORY>
GITHUB_USER=<USERNAME_OF_PROJECTS_OWNER>
```
The project path must point to the directory where you store your projects (e.g. /Users/pi/Projects). 

The `env.example` file has been included as an example.

The Raspberry Pi will also need a way to be accessible from the internet, this can be down with port-forwarding, ngrox or localtunnel.

## Usage

Run the app:

```
docker-compose up
```

POST requests to `/event` will trigger the app to perform a `git pull` for the repo specified in `PROJECT_PATH`.

This can be combined with a github webhook so that any push events to your repo will cause that code to be integrated into your raspberry pi.