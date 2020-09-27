# Agile visitors :memo:

Application for registering employee entries with the possibility of generating reports, validating and storing users with minimal effort.

![App preview](https://i.imgur.com/aL7IlLR.png)

# Get Started

The application consists of 2 parts, a UI and an API.

**UI**

```bash
$ git clone https://github.com/itsalb3rt/agile-visitors.git
```

Install all dependencies.

```bash
$ npm install
```


Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

Build the app for production
```bash
quasar build
```

To set the API address you must open the file `quasar.conf.js` and modify the following object.

```javascript
build: {
  env: {
    API: ctx.dev
      ? 'http://localhost:5000/api'
      : 'https://prod.api.com'
  }
}
```

**API**

Go to [API repository](https://github.com/itsalb3rt/agile-visitors-api).

---

Created with :heart: by [Albert Hidalgo](https://github.com/itsalb3rt) and [Lewandy Dilone](https://github.com/lewandy)
