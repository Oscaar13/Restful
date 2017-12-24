var Http = require( 'http' ),
    Router = require( 'router' ),
    server,
    router;
router = new Router();

var counter = 0,
    todoList = {};

function createItem(request, response) {
	var id = counter += 1;
	console.log('Create item', id);
	response.writeHead(201, {'Content-Type' : 'text/plain'});
	response.end('Item ' + id + '\n');
}
router.post('/todo', createItem);

function deleteItem(request, response) {
	var idd = counter;
	console.log('Delete item', idd);
	response.writeHead(201, {'Content-Type' : 'text/plain'});
        response.end('Del: Item ' + idd + '\n');
	counter -=1;
}
router.post('/tode', deleteItem);

function readItem(request, response) {
	var tmp = counter;
	console.log('Now item is ', tmp);
	response.writeHead(201, {'Content-Type' : 'text/plain'});
        response.end('Item ' + tmp + '\n');
}
router.post('/toRe', readItem);

server = Http.createServer( function( request, response ) {
  router( request, response, function( error ) {
    if ( !error ) {
      response.writeHead( 404 );
    } else {
      // Handle errors
      console.log( error.message, error.stack );
      response.writeHead( 400 );
    }
    response.end( 'RESTful API Server is running!' );
  });
});
 
server.listen( 3000, function() {
  console.log( 'Listening on port 3000' );
});
