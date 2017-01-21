# flock-live-help README

This is the README for your extension "flockc". After writing up a brief description, we recommend including the following sections.

## How to set this up

### Installing the extension
1. Open this project in Visual Studio Code.
2. Go to debug option - (4th icon on the left hand panel)
3. Click on `Start Debugging` - It will start a new instance of Visual Studio Code with extension installed.

### Configuring the extension
For easy usage add a key binding in `File > Preferences > Keyboard Shortcuts`
```json
// Place your key bindings in this file to overwrite the defaults
[
    {"key": "ctrl+shift+t", "command": "extension.flocklive", "when": "editorTextFocus"}
]
```

This will make sure extension is triggered when you press `ctrl + shift + t`

#### Configuration - File > Preferences > User setting in VSCode

Assuming your bot is hosted at: `flockbot.minhaz.com`

```
"flocklive.flockBot": {
    "APIToken": "<LEAVE BLANK>",
    "EndPoint": "http://flockbot.minhaz.com/flocklive",
    "EndPointPoll": "http://flockbot.minhaz.com/flocklivepocpoll",
    "Channel": "<leave blank>",
    "Team": "<leave blank>"
}
```