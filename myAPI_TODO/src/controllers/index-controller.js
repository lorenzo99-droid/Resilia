module.exports = (app) =>
    {
        app.get('/', 
            (req, res) =>
                {res.send('Esse é o index')}
        );
    };
    