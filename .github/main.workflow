workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Build" {
  uses = "actions/npm@e7aaefe"
  args = "run build"
  needs = ["Install"]
}

action "Deploy" {
  uses = "JamesIves/github-pages-deploy-action@master"
  secrets = [
    "ACCESS_TOKEN",
  ]
  needs = ["Build"]
  env = {
    BASE_BRANCH = "master"
    BRANCH = "gh-pages"
    FOLDER = "build"
    BUILD_SCRIPT = "yarn install && yarn predeploy && yarn deploy"
  }
}