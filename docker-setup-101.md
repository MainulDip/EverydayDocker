### Mac Setup:
For docker desktop `brew install --cask docker` (not the engine only). And to uninstall `brew uninstall --cask docker`

Launch the installed app to start/stop, etc. Maybe sh script can be used, start the docker engine by `launchctl start com.docker.docker` and to stop `sudo launchctl stop com.docker.docker`
```sh
# systemctl enable docker # for linux
sudo launchctl stop com.docker.docker
# systemctl restart docker # for linux
sudo launchctl stop com.docker.docker
```