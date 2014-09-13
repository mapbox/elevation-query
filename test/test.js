var assert = require("assert");
var fs = require('fs');
var vtileQuery = require('../');

function readTile(tile,callback) {
    var tilepath = 'test/fixtures/tiles/'+tile.z+'/'+tile.x+'/'+tile.y+'.vector.pbf';
    fs.readFile(tilepath, function(err,data) {
        if (err) return callback(err)   
        return callback(null,data);
    });
}

describe('Load relevant tiles from list of coords', function() {
    it('should fail if tile does not exist', function(done) {
        var queryCoords = [[37.934205,-122.747147], [37.934721, -122.747461], [38.93512, -122.747993]];
        var validError = 'ENOENT';
        vtileQuery.loadTiles(queryCoords,14,readTile, function (err,data) {
            assert.equal(err.code,validError);
            done();
        });   
    });

    it('should load the right tiles', function(done) {
        var queryCoords = [[37.934205, -122.747147], [37.934721, -122.747461], [37.93512, -122.747993], [37.93506, -122.748709], [37.935234, -122.749312], [37.935546, -122.750159], [37.935894, -122.750594], [37.936557, -122.750439], [37.93656, -122.750462], [37.936002, -122.750741], [37.935606, -122.751546], [37.935812, -122.752409], [37.936026, -122.753302], [37.936215, -122.754136], [37.936643, -122.754303], [37.937244, -122.754266], [37.937347, -122.755063], [37.93673, -122.755503], [37.936698, -122.756236], [37.937185, -122.756789], [37.937292, -122.757571], [37.937364, -122.75846], [37.937493, -122.759332], [37.937704, -122.760114], [37.937719, -122.760961], [37.937744, -122.761823], [37.938412, -122.762233], [37.938802, -122.761544], [37.939453, -122.761287], [37.940038, -122.76108], [37.940512, -122.760558], [37.940814, -122.760748], [37.940734, -122.761635], [37.9404, -122.762359], [37.940558, -122.76321], [37.940853, -122.762554], [37.941432, -122.762198], [37.942043, -122.762171], [37.941981, -122.761293], [37.941974, -122.760452], [37.942193, -122.759771], [37.942337, -122.758972], [37.942743, -122.758441], [37.943383, -122.758257], [37.943988, -122.758076], [37.944504, -122.757763], [37.945121, -122.757577], [37.945726, -122.757553], [37.946318, -122.757227], [37.946864, -122.757527], [37.947456, -122.757942], [37.948024, -122.758279], [37.948632, -122.758635], [37.949265, -122.758966], [37.949915, -122.759106], [37.950492, -122.759479], [37.950941, -122.760067], [37.951215, -122.760815], [37.951578, -122.761415], [37.951896, -122.762157], [37.952153, -122.762932], [37.952442, -122.763748], [37.952776, -122.764412], [37.952847, -122.765231], [37.952777, -122.765999], [37.95278, -122.766792], [37.952557, -122.767549], [37.952103, -122.768163], [37.951776, -122.768943], [37.951553, -122.769685], [37.951474, -122.770538], [37.951724, -122.771298], [37.951671, -122.772078], [37.951991, -122.772766], [37.952297, -122.773451], [37.952767, -122.774026], [37.953112, -122.774712], [37.953416, -122.775509], [37.953757, -122.776302], [37.953935, -122.777151], [37.953783, -122.777784], [37.953939, -122.778466], [37.953951, -122.779258], [37.953904, -122.780054], [37.953587, -122.780721], [37.953211, -122.781183], [37.953102, -122.78168], [37.953587, -122.782147], [37.953966, -122.782534], [37.954111, -122.782941], [37.954276, -122.783372], [37.953846, -122.783475], [37.953644, -122.783326], [37.953621, -122.783398], [37.953681, -122.783544], [37.954105, -122.783562], [37.954226, -122.783516], [37.954254, -122.783074], [37.953984, -122.782659], [37.953602, -122.782163], [37.953114, -122.781791], [37.953117, -122.781327], [37.953415, -122.780743], [37.953781, -122.780134], [37.953927, -122.779349], [37.953886, -122.778524], [37.953677, -122.777823], [37.953875, -122.777067], [37.953655, -122.776238], [37.953358, -122.775504], [37.953087, -122.774773], [37.952679, -122.774108], [37.952302, -122.773557], [37.951953, -122.772919], [37.951635, -122.772297], [37.951596, -122.771431], [37.951411, -122.770604], [37.951504, -122.769747], [37.951776, -122.768976], [37.952164, -122.768202], [37.952476, -122.767518], [37.952763, -122.766621], [37.952732, -122.765792], [37.952766, -122.764923], [37.952519, -122.764178], [37.952318, -122.763427], [37.952071, -122.762665], [37.951814, -122.761881], [37.951351, -122.761266], [37.95112, -122.760513], [37.950772, -122.759853], [37.950268, -122.759352], [37.949636, -122.759099], [37.949022, -122.758908], [37.948447, -122.758599], [37.947872, -122.758223], [37.947285, -122.757863], [37.94674, -122.757396], [37.946155, -122.757408], [37.945536, -122.757739], [37.944906, -122.757692], [37.94427, -122.757796], [37.943794, -122.758157], [37.943206, -122.758344], [37.942573, -122.758502], [37.942226, -122.759097], [37.942267, -122.759883], [37.941923, -122.760535], [37.941999, -122.761339], [37.942067, -122.762112], [37.941445, -122.762181], [37.940877, -122.762627], [37.940519, -122.763137], [37.940412, -122.762323], [37.940734, -122.761654], [37.94079, -122.760792], [37.940642, -122.760698], [37.939988, -122.761018], [37.939442, -122.761309], [37.938876, -122.761669], [37.938437, -122.762262], [37.937793, -122.762014], [37.937658, -122.761213], [37.937791, -122.760384], [37.937563, -122.759635], [37.937416, -122.758828], [37.937373, -122.757993], [37.937236, -122.757185], [37.93696, -122.756559], [37.936586, -122.755909], [37.936975, -122.755324], [37.937421, -122.754787], [37.937061, -122.754159], [37.936462, -122.754386], [37.93617, -122.753863], [37.936102, -122.753075], [37.93584, -122.752369], [37.935665, -122.751606], [37.935953, -122.750863], [37.93655, -122.750492], [37.936421, -122.750252], [37.935773, -122.750244], [37.935306, -122.749549], [37.935092, -122.748769], [37.935162, -122.747942], [37.934677, -122.747453]];
        var validResponse = '[{"z":14,"x":2605,"y":6323},{"z":14,"x":2604,"y":6323},{"z":14,"x":2605,"y":6322},{"z":14,"x":2604,"y":6322},{"z":14,"x":2603,"y":6322}]';
        vtileQuery.loadTiles(queryCoords,14,readTile, function (err,data) {
            var tiles = data.map(function(tile) {
                return tile.zxy;
            });
            assert.equal(JSON.stringify(tiles),validResponse)
            done();
        });
    });
});

describe('Make sure layers and fields are specified', function() {
    var queryCoords = [[37.934205, -122.747147], [37.934721, -122.747461], [37.93512, -122.747993]];
    it('should fail if layer not specified', function(done) {
        vtileQuery.loadTiles(queryCoords,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,fields:['ele']}, function(err, queryData) {
                assert.equal(err.message,'No layer specified')
                done();
            });
        });
    });

    it('should fail if fields not specified', function(done) {
        vtileQuery.loadTiles(queryCoords,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'contour'}, function(err, queryData) {
                assert.equal(err.message,'Field(s) not specified')
                done();
            });
        });
    });

    it('should fail if fields are empty', function(done) {
        vtileQuery.loadTiles(queryCoords,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'contour',fields:[]}, function(err, queryData) {
                assert.equal(err.message,'Field array empty')
                done();
            });
        });
    });
});

describe('Tests for matching queries', function() {
    it('elevation (polyline) return should match', function(done) {
        var queryPoints = [[37.934205, -122.747147], [37.934721, -122.747461]];
        var validResponse = '[{"id":0,"latlng":{"lat":37.934205,"lng":-122.747147},"ele":81.3189156103434},{"id":1,"latlng":{"lat":37.934721,"lng":-122.747461},"ele":85.1838043599294}]'
        vtileQuery.loadTiles(queryPoints,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'contour',fields:['ele']}, function(err, queryData) {
                assert.equal(JSON.stringify(queryData),validResponse);
                done();
            });
        });
    });

    it('multiple field query should match', function(done) {
        var queryPoints = [[37.934205, -122.747147], [37.934721, -122.747461]];
        var validResponse = '[{"id":0,"latlng":{"lat":37.934205,"lng":-122.747147},"ele":81.3189156103434,"index":1.8681084389656604},{"id":1,"latlng":{"lat":37.934721,"lng":-122.747461},"ele":85.1838043599294,"index":1.48161956400706}]'
        vtileQuery.loadTiles(queryPoints,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'contour',fields:['ele','index']}, function(err, queryData) {
                assert.equal(JSON.stringify(queryData),validResponse);
                done();
            });
        });
    });

    it('should not interpolate when specified', function(done) {
        var queryPoints = [[37.934205, -122.747147], [37.934721, -122.747461]];
        var validResponse = '[{"id":0,"latlng":{"lat":37.934205,"lng":-122.747147},"ele":80,"index":2},{"id":1,"latlng":{"lat":37.934721,"lng":-122.747461},"ele":90,"index":1}]'
        vtileQuery.loadTiles(queryPoints,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'contour',fields:['ele','index'], interpolate: false}, function(err, queryData) {
                assert.equal(JSON.stringify(queryData),validResponse);
                done();
            });
        });
    });

    it('landcover (stackedpolygon) return should match', function(done) {
        var queryPoints = [[37.934205, -122.747147], [37.934721, -122.747461]];
        var validResponse = '[{"id":0,"latlng":{"lat":37.934205,"lng":-122.747147},"class":"scrub"},{"id":1,"latlng":{"lat":37.934721,"lng":-122.747461},"class":"wood"}]';
        vtileQuery.loadTiles(queryPoints,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'landcover',fields:['class']}, function(err, queryData) {
                assert.equal(JSON.stringify(queryData),validResponse);
                done();
            });
        });
    });

});

describe('Test for invalid points', function() {
    it('should not work for invalid points', function(done) {
        var queryPoints = [37.775718243274575,-122.4242377281189];
        vtileQuery.loadTiles(queryPoints,15,readTile, function (err,data) {
            assert.equal(err.message,"Invalid query points")
            done();
        });
    });
});

describe('Test for string queries', function() {
    it('should not interpolate if the field is a string', function(done) {
        var queryPoints = [[40.41970,-78.44625]];
        var validResponse = '[{"id":0,"latlng":{"lat":40.4197,"lng":-78.44625},"class":"street"}]';
        vtileQuery.loadTiles(queryPoints,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {tolerance:10,layer:'road',fields:['class']}, function(err, queryData) {
                assert.equal(JSON.stringify(queryData),validResponse);
                done();
            });
        });
    });
});

describe('Test for invalid data', function() {
    it('return nulls from an empty protobuf', function(done) {
        var queryPoints = [[40.41970,-78.44625]];
        var pointIDs = [1,2];
        var validResponse = '[{"id":1,"latlng":{"lat":-78.44625,"lng":40.4197},"class":null}]';
        vtileQuery.queryTile({}, { z: 14, x: 4621, y: 6177 }, queryPoints, pointIDs, {layer:'road',fields:['class']}, function (err, queryData) {
            assert.equal(JSON.stringify(queryData),validResponse);
            done();
        })
    });

    it('return nulls from a tile without the query layer', function(done) {
        var queryPoints = [[52.00517345957198,4.427490234375,],[52.00517345957198,4.427490234375]];
        var validResponse = '[{"id":0,"latlng":{"lat":52.00517345957198,"lng":4.427490234375},"ele":null},{"id":1,"latlng":{"lat":52.00517345957198,"lng":4.427490234375},"ele":null}]';
        vtileQuery.loadTiles(queryPoints,14,readTile, function (err,data) {
            vtileQuery.multiQuery(data, {layer:'contour',fields:['ele']}, function(err, queryData) {
                assert.equal(JSON.stringify(queryData),validResponse);
                done();
            });
        });
    });

});