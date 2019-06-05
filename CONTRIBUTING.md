# Contributing

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. You'll also find information
on making a pull request.

## Overview

[Prerequisites](#prerequisites)  
[Installing](#installing)  
[Making Changes](#making-changes)  
[Documentation](#documentation)  
[Testing](#testing)  
[Making a Pull Request](#making-a-pull-request)  

## Prerequisites

For this project, you'll need to have Node, Git, and Firebase set up on your
local machine.

- [Install Node](https://nodejs.org/en/download/)
- [Install Git](https://git-scm.com/downloads)

## Installing

Follow the steps below to get your development enviroment set up.

1. Open the terminal and and run the following: `git clone  https://github.com/The-Diamondback-Lab/ltcollinstimeline.git`.

2. Run `npm install` to install the project dependencies.

## Making Changes

**Attention: This section is under construction.**

## Documentation

Following [JSDoc](http://usejsdoc.org/) standards, be sure to document any functions, classes, and other
code you write. It will be reviewed by a reviewer during your code review, and
your pull request will be denied if any code is improperly documeted.

For an overview of our JavaScript style guide, go to https://standardjs.com.

## Testing

When you're ready to test your changes, you have two options:

1. Run `npm test` in your project directory. This run your tests, as well as all
  the tests in the tests in the `tests` directory.

2. Run `jest tests/<PATH_TO_YOUR_TEST>`. This will run your test file alone.  

**Creating a Production Build**  
Run `npm start`. This will start a production version of the project on your local machine.

When the server is ready, navigate to `http://localhost:8080` in view the project.

## Making a Pull Request

**
Note: Before creating a new branch and pull request for your
changes, your build must pass all the tests and must work locally. If you need help, please create a
test file and leave a comment in the test body, making note of any issues in
their respective files. Make sure to label your pull request "help wanted."
**

If you're ready to have your changes reviewed, make sure your code is well
documented, and create a branch for your changes. 

Make sure to name the branch
appropriately, prefixing it with `<your_initials>/`, then `feature-`, `issue-`, `hotfix-`, or `release-`.

To do this, run the following in your terminal:  

1. `git checkout -b <BRANCH_NAME>`
2. `git commit -am "<DESCRIPTIVE_COMMIT_MESSAGE>"`
3. `git push`

For example:

```bash
git checkout -b `ld/feature-docs`
git commit -am "added documentation"
git push
```

If you need to make additional changes, checkout your branch again, and then
commit and push your changes.

When you're ready to make pull request, make sure to use the [this
template][1].

[1]: .github/PULL_REQUEST_TEMPLATE/pull_request_template.md
