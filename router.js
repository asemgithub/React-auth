
module.exports = function(app)
{

    //req-request res-response next-error handling
    app.get('/', function(req, res, next)
    {
      rest.send(['waterbottle', 'phone', 'paper'])
    });

    app.post('/', function()
    {

    });
}