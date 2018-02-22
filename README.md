# Node Express API

## [Express](https://expressjs.com/)

Framework -
Web apps

### Features

- Middleware for HTTP Requests
  - Request
  - Response
- Router for HTTP METHODS and URLS
- Template HTML
  - Jade
  - Handlebars

### Install

`$ npm i -s express`

Extra Plugins

- body-parser --> Form data parser
- cookie-parse --> decorator of request in req.cookies
- multer --> Para MultipartFormData (files, photos)


### Routing



### [HTTP Methonds](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

- #### GET
``` js
  app.get('/', function (req, res) {
    res.send('hello world')
    })
```
  - URL parameters
  ``` js
    app.get('user/:id', function (req, res) {
      let id = res.params.id
      res.send('id: '  + id)
      })
  ```
- #### POST
- #### PUT
- #### DELETE

### REST API


### [Express Generator](https://expressjs.com/en/starter/generator.html)

- install `$ npm i -g express-generator`
- use `$ express <option> <project-name>`

### [Nodemon](https://nodemon.io/)
Features
- Autorefresh on save
- Debug in chrome

- Install `$ npm i -g nodemon`
- Use
