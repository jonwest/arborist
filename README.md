# Arborist
Arborist is a node based application to print out the author's favourite tree.  It is built using Express, and uses Jest for tests.

## Development
Arborist can be developed in two ways:

- For traditional "local" development, a development container configuration has been included.  When the folder is loaded into VS Code, a prompt will be visible asking the user if they would like to run the project in a container, clicking "Run in container" will build the project's container alongside helpful development utilities.
- For development against a more "production-like" environment, Kubernetes manifests will be included for each environment under the `.k8s` folder.
