/**
 * Created by conorocallaghan on 06/04/2016.
 */

module.exports.index = function (req, res) {
    var message = "hello"
    res.render('index', {message: 'Hello'});
}