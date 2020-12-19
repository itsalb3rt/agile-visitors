# Agile visitors :memo:

Application for registering employee entries with the possibility of generating reports, validating and storing users with minimal effort.

## Preview

<p align="center">
  <b>Desktop</b>
</p>

<div align="center">
  <a href="https://agile-visitors.netlify.app/">
    <img src="https://raw.githubusercontent.com/itsalb3rt/agile-visitors/master/src/assets/DEMO-image-desktop-1.PNG" title="Desktop" />
    <img src="https://raw.githubusercontent.com/itsalb3rt/agile-visitors/master/src/assets/DEMO-image-desktop-2.PNG" title="Desktop" />
  </a>
</div>

<br/>

<p align="center">
  <b>Mobile</b>
</p>

<div align="center">
  <a href="https://agile-visitors.netlify.app/">
    <img width="325" src="https://raw.githubusercontent.com/itsalb3rt/agile-visitors/master/src/assets/DEMO-image-mobile-1.PNG" title="iPhone X">
      &nbsp;&nbsp;
    <img width="325" src="https://raw.githubusercontent.com/itsalb3rt/agile-visitors/master/src/assets/DEMO-image-mobile-2.PNG" title="iPhone X">
  </a>
</div>

<br/>

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
      : 'https://agile-visitors-api.gibucket.xyz/api' // Production API
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
