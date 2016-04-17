var assert = require( 'assert' );

var cacheBox = require( './index' )();

describe( 'set item', function () {
    it( 'should set item with a single key', function () {
        cacheBox.set( 'foo', 'bob' );

        assert.equal( cacheBox.get( 'foo' ), 'bob' );
    } );

    it( 'should set item with string path', function () {
        cacheBox.set( 'foo=>bar=>baz', 'alice' );

        assert.equal( cacheBox.get( 'foo=>bar=>baz' ), 'alice' );
    } );

    it( 'should set item with single item array path', function () {
        cacheBox.set( [ 'foo' ], 'jimmy' );

        assert.equal( cacheBox.get( [ 'foo' ] ), 'jimmy' );
    } );

    it( 'should set item with array path', function () {
        cacheBox.set( [ 'foo', 'bar', 'baz' ], 'joe' );

        assert.equal( cacheBox.get( [ 'foo', 'bar', 'baz' ] ), 'joe' );
    } );

    it( 'should override existing keys', function () {
        cacheBox.set( 'foo=>bar=>baz', 'tim' );

        assert.equal( cacheBox.get( [ 'foo', 'bar', 'baz' ] ), 'tim' );

        cacheBox.set( [ 'foo', 'bar', 'baz' ], 'jim' );

        assert.equal( cacheBox.get( [ 'foo', 'bar', 'baz' ] ), 'jim' );
    } );
} );

describe( 'delete item', function () {
    it( 'should delete item from single key path', function () {
        cacheBox.set( 'foo', 'jimmy' );

        assert.equal( cacheBox.get( 'foo' ), 'jimmy' );

        cacheBox.delete( 'foo' );

        assert.equal( cacheBox.get( 'foo' ), null );
    } );

    it( 'should delete item from string path', function () {
        cacheBox.set( 'foo=>bar', 'jimmy' );

        assert.equal( cacheBox.get( 'foo=>bar' ), 'jimmy' );

        cacheBox.delete( 'foo=>bar' );

        assert.equal( cacheBox.get( 'foo=>bar' ), null );
    } );

    it( 'should delete item from array path', function () {
        cacheBox.set( [ 'foo', 'bar' ], 'jimmy' );

        assert.equal( cacheBox.get( [ 'foo', 'bar' ] ), 'jimmy' );

        cacheBox.delete( [ 'foo', 'bar' ] );

        assert.equal( cacheBox.get( [ 'foo', 'bar' ] ), null );
    } );
} );
