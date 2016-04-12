# Cache Box
But a mere Javascript in-memory nested cache with DSL capabilities

### Usage

```javascript
var cacheBox = require( "cacheBox" );

// set item to DSL cache path with nesting
cacheBox().set( 'user=>alice', { name: 'alice' } );

// get item from array cache path
cacheBox().get( [ 'user', 'alice' ] ); // { name: 'alice' }

// meanwhile somewhere else in the code...

// override item located in array cache path
cacheBox().set( [ 'user', 'alice' ], { name: 'alice', lastName: 'doe' } );

// get item from DSL cache path
cacheBox().get( 'user=>alice' ); // { name: 'alice', lastName: 'doe' }

// delete item from array cache path
cacheBox().delete( 'user=>alice' );
```

##### Options

* **seperator** [=>] DSL nesting path separator
