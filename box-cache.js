CacheBox.PATH_SEPARATOR = '=>';

CacheBox.getInstance = function () {
    if ( !(CacheBox.instance instanceof CacheBox) ) {
        CacheBox.instance = new CacheBox();
    }

    return CacheBox.instance;
};

/**
 * But a mere in-memory caching module with DSL capabilities
 * DSL usage example: CacheBox.set('foo=>bar', 'baz') -> foo: {bar: 'baz'}
 * Path usage example: CacheBox.set(['foo', 'bar'], 'baz') -> foo: {bar: 'baz'}
 * @constructor
 */
function CacheBox () {
    this._cacheMap = {};
}

CacheBox.prototype.get = function ( path ) {
    var splitPath = this._parsePath( path );

    var mapRef = this._cacheMap;

    for ( var i = 0; i < splitPath.length; i++ ) {
        var part = splitPath[ i ];

        if ( !mapRef[ part ] ) {
            return null;
        }

        mapRef = mapRef[ part ];
    }

    return mapRef;
};

CacheBox.prototype.set = function ( path, item ) {
    var splitPath = this._parsePath( path );

    var mapRef = this._cacheMap;

    for ( var i = 0; i < splitPath.length; i++ ) {
        var part = splitPath[ i ];

        if ( typeof mapRef[ part ] !== 'object' || !mapRef[ part ] ) {
            mapRef[ part ] = {};
        }

        if ( splitPath.length === ( i + 1 ) ) {
            mapRef[ part ] = item;
        }

        mapRef = mapRef[ part ];
    }
};

CacheBox.prototype.delete = function ( path ) {
    var splitPath = this._parsePath( path );

    var mapRef = this._cacheMap;

    for ( var i = 0; i < splitPath.length; i++ ) {
        var part = splitPath[ i ];

        if ( !mapRef[ part ] ) {
            return null;
        }

        if ( splitPath.length === ( i + 1 ) ) {
            delete mapRef[ part ];
        }

        mapRef = mapRef[ part ];
    }
};

CacheBox.prototype._parsePath = function ( path ) {
    var parsedPath = path;

    if ( !Array.isArray( path ) ) {
        parsedPath = path.split( CacheBox.PATH_SEPARATOR );
    }

    return parsedPath;
};

module.exports = function ( options ) {
    if ( typeof options === 'object' ) {
        CacheBox.PATH_SEPARATOR = options.separator || CacheBox.PATH_SEPARATOR;
    }

    return CacheBox.getInstance();
};
