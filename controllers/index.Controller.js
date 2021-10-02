
//export function what is getting app
module.exports = app => {
    app.get('/cities', (req, res) => res.send('You are at the page cities'));
}