# Spendbase test task
## Installation

Clone this repo
```bash
git clone git@github.com:Tverdik/Spendbase-test-task.git
```

Select the repository with the command
```bash
cd [project name]
```

Install the node modules with the command
```bash
npm install
```

Create the `.env` file
```
touch .env
```

Add the variables in the env file according to example

To launch API using docker use commands

```
docker build -t spendbase-test-task:latest .
docker-compose up
```

Additional things to implement:
* unit-test
* improve typescript typing
* add validation for max and min values for lat and lon
* improve error handling
* add documentation using swagger
