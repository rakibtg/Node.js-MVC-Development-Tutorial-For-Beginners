const express = require( 'express' )
const app     = express()

app.get( '/', ( requests, response ) => {
  response.send( 'Hello World! Great! Test' )
} )

app.listen( 3200, () => {
  console.log( 'Works!' )
} )