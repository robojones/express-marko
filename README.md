# express-marko - express middleware for marko template engine

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [res.render](#resrenderview-locals-callback)

## Installation

```
npm install express-marko --save
```

## Usage

```javascript
const app = require('express')()
const marko = require('express-marko')

// tell express-marko where your templates are (default: process.cwd())
app.set('views', 'views/')

// add the marko middleware to your app
app.use(marko)

app.get('/', (req, res, next) => {

  // this will render the file marko/home.marko
  res.render('home')
})

app.listen(8080)
```

__Note:__ If you set process.env.NODE_ENV to `'development'`, your templates will not be cached.

## res.render()

See [res.render](http://expressjs.com/en/api.html#res.render) in the express API.

