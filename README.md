# Personal Apple Health API

_PS: For detailed usage please read the [story](https://medium.com/better-programming/create-an-apple-health-api-with-shortcuts-and-firebase-a76d178319b7) on Medium._

A Firebase project to parse and store Apple Health data from your iPhone. Using a Firebase HTTP function to parse the data and Firestore to store the data. Use [Firebase JS SDK](https://firebase.google.com/docs/web/setup) to use it in your web applications.

See [Firestore](https://firebase.google.com/docs/firestore) and [Functions](https://firebase.google.com/docs/functions) documentations for further details.

Shortcuts app is use to export health data. Unfortunetely Apple doesn't provide any API to use Health app data outside of iOS platforms. A shortcut is provided to export data in JSON format. In order for Firebase HTTP function to parse data you need to provide its URL to provided shortcut.

See [Shurtcuts User Guide](https://support.apple.com/en-gb/guide/shortcuts/welcome/ios) for further details.

---

## Prerequisites

Before starting to use this project you need to do some manual work. Please see the below table.

|                    | Description                                             |
| ------------------ | ------------------------------------------------------- |
| [Shortcut]         | Download the shortcut to export Health app data         |
| [Firebase Project] | Setup a Firebase project with default location selected |
| [Firestore]        | Setup a Firestore database in native mode               |

[shortcut]: https://www.icloud.com/shortcuts/1617296a8c8546b49be47740be2550b3
[firebase project]: https://firebase.google.com/docs/projects/locations#view-settings
[firestore]: https://cloud.google.com/datastore/docs/firestore-or-datastore#choosing_a_database_mode

## Install

```bash
# Clone the project
git clone git@github.com:emreloper/apple-health-api.git

# Go to project folder
cd apple-health-app

# Login to Firebase
npx firebase-tools login

# Init the firebase project
npx firebase-tools init
```

After running the `init` command just follow the interactive CLI. You will se the URL of Firebase function after the initialization. You need this URL to use in Shortcuts.

## Deployment

```bash
npx firebase-tools deploy
```
