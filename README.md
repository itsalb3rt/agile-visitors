# Agile visitors :memo:

Application for registering employee entries with the possibility of generating reports, validating and storing users with minimal effort.

<center>
<a href="https://github.com/itsalb3rt/agile-visitors">DEMO</a>
</center>

<br/>

<center>
<a href="https://github.com/itsalb3rt/agile-visitors">
<img src="https://i.imgur.com/nNqdlbi.png" alt="app_demo" />
</a>
</center>

# Get Started

The application consists of 2 parts, a **UI** and an **API**.

## API

Go to [API repository](https://github.com/itsalb3rt/agile-visitors-api).

## UI

```bash
$ git clone https://github.com/itsalb3rt/agile-visitors.git
$ cd agile-visitors
```

To set the API address you must open the file `quasar.conf.js` and modify the following object.

```javascript
build: {
  env: {
    API: ctx.dev
      ? 'http://localhost:5000/api' // Development API
      : 'http://localhost:5000/api' // Production API
  }
}
```

## Docker

```bash
$ docker build -t agile-visitors .
```

```bash
$ docker run -d --name agile-visitors -p 8081:80 --rm  agile-visitors
```

We should now be able to access the application on [http://localhost:8081](http://localhost:8081)

## Development

Install all dependencies.

```bash
$ npm install
```

Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
$ quasar dev
```

Build the app for production
```bash
$ quasar build
```

---

Created with :heart: by [Albert Hidalgo](https://github.com/itsalb3rt) and [Lewandy Dilone](https://github.com/lewandy)
