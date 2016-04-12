# Box Cache
But a mere Javascript in-memory nested cache with DSL capabilities

### Usage

```javascript
var boxCache = require( "boxCache" );

// set item to DSL cache path with nesting
boxCache().set( 'user=>alice', { name: 'alice' } );

// get item from array cache path
boxCache().get( [ 'user', 'alice' ] ); // { name: 'alice' }

// meanwhile somewhere else in the code...

// override item located in array cache path
boxCache().set( [ 'user', 'alice' ], { name: 'alice', lastName: 'doe' } );

// get item from DSL cache path
boxCache().get( 'user=>alice' ); // { name: 'alice', lastName: 'doe' }

// delete item from array cache path
boxCache().delete( 'user=>alice' );
```

##### Options

* **seperator** [=>] DSL nesting path separator
