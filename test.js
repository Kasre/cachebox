var assert = require( 'assert' );

var boxCache = require( './box-cache' )();

describe( 'set item', function () {
    it( 'should set item with a single key', function () {
        boxCache.set( 'foo', 'bob' );

        assert.equal( boxCache.get( 'foo' ), 'bob' );
    } );

    it( 'should set item with string path', function () {
        boxCache.set( 'foo=>bar=>baz', 'alice' );

        assert.equal( boxCache.get( 'foo=>bar=>baz' ), 'alice' );
    } );

    it( 'should set item with single item array path', function () {
        boxCache.set( [ 'foo' ], 'jimmy' );

        assert.equal( boxCache.get( [ 'foo' ] ), 'jimmy' );
    } );

    it( 'should set item with array path', function () {
        boxCache.set( [ 'foo', 'bar', 'baz' ], 'joe' );

        assert.equal( boxCache.get( [ 'foo', 'bar', 'baz' ] ), 'joe' );
    } );

    it( 'should override existing keys', function () {
        boxCache.set( 'foo=>bar=>baz', 'tim' );

        assert.equal( boxCache.get( [ 'foo', 'bar', 'baz' ] ), 'tim' );

        boxCache.set( [ 'foo', 'bar', 'baz' ], 'jim' );

        assert.equal( boxCache.get( [ 'foo', 'bar', 'baz' ] ), 'jim' );
    } );
} );

describe( 'delete item', function () {
    it( 'should delete item from single key path', function () {
        boxCache.set( 'foo', 'jimmy' );

        assert.equal( boxCache.get( 'foo' ), 'jimmy' );

        boxCache.delete( 'foo' );

        assert.equal( boxCache.get( 'foo' ), null );
    } );

    it( 'should delete item from string path', function () {
        boxCache.set( 'foo=>bar', 'jimmy' );

        assert.equal( boxCache.get( 'foo=>bar' ), 'jimmy' );

        boxCache.delete( 'foo=>bar' );

        assert.equal( boxCache.get( 'foo=>bar' ), null );
    } );

    it( 'should delete item from array path', function () {
        boxCache.set( [ 'foo', 'bar' ], 'jimmy' );

        assert.equal( boxCache.get( [ 'foo', 'bar' ] ), 'jimmy' );

        boxCache.delete( [ 'foo', 'bar' ] );

        assert.equal( boxCache.get( [ 'foo', 'bar' ] ), null );
    } );
} );
