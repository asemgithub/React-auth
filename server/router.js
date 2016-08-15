
module.exports = function(app)
{

    //req-request res-response next-error handling
    app.get('/', function(req, res, next)
    {
      rest.send([ { message: 'This is some secret code - ABC' }, 'waterbottle', 'phone', 'paper'])
    });

    app.post('/', function()
    {

    });
}