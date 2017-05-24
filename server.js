var connect  = require('connect');
var compiler = require('connect-compiler');
var static = require('serve-static');

var server = connect();

server.use(
  compiler({
      enabled : [ 'coffee', 'uglify' ],
      src     : 'src',
      dest    : 'public'
  })
);

server.use(  static(__dirname + '/public'));

server.listen(3000);

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");
