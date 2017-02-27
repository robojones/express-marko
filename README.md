# express-marko

## Installation

```
npm install express-marko --save
```

## Usage

### Example

```javascript
const app = require('express')()
const marko = require('express-marko')

// tell express-marko where your templates are (default: process.cwd())
app.set('views', 'views/')

// add the marko middleware to your app
app.use(marko)

app.get('/', (req, res, next) => {

  // this will render the file views/home.marko
  res.render('home')
})

app.listen(8080)
```

__Note:__ If you set `process.env.NODE_ENV` to `'development'`, your templates will not be cached.

## res.render()

See [res.render](http://expressjs.com/en/api.html#res.render) in the express API.

## Example - add locals

__Express:__

```javascript
app.get('/profile', (req, res, next) => {

  res.render('profile', {
    name: 'Alfons',
    age: 24
  })
})
```

__Template:__

```html
<html>
  <head>
    <title>Profile of ${data.name}</title>
  </head>
  <body>
    Hi. I am ${data.name} and I am ${data.age} years old.
  </body>
</html>
```

__Output:__
```html
<html>
  <head>
    <title>Profile of Alfons</title>
  </head>
  <body>
    Hi. I am Alfons and I am 24 years old.
  </body>
</html>
```

## Example - $global

```javascript
app.get('/example', (req, res, next) => {

  res.global.name = 'Alfons'

  res.render('example', {
    $global: {
      age: 24
    },
    color: 'blue'
  })
})
```

You can access the name and age within you template:

```html
<h1>Hi ${out.global.name}</h1>

<h2>You are ${out.global.age}</h2>

<h2>You like the color ${data.color}</h2>
```
