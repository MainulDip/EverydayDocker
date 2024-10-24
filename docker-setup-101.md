### Mac Setup:
For docker engine `brew install docker` (not desktop). Uninstall by `brew uninstall docker`

start the docker engine by `systemctl start docker` or `sudo dockerd`
```sh
systemctl enable docker
systemctl restart docker
```

For docker desktop use `brew install --cask docker` and `brew uninstall --cask docker`. It's not fully open-sourced, rather preparatory but has free community version.