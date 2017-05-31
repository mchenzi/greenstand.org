var GreenCtrl = require('./controllers/green-control');


module.exports = (app) => {

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public'});
  });

  // app.get('/api/musician', GreenCtrl.get);
  // app.get('/api/musician/:id', GreenCtrl.get);
  // app.get('/api/me', GreenCtrl.loggedIn);
  // app.post('/api/musician', GreenCtrl.create);
  // app.post('/api/login', GreenCtrl.login);
  // app.put('/api/musician/:id', GreenoCtrl.update);
  // app.put('/api/remove/:id', )

}
