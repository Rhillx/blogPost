const express= require ('express');
const serveStatic = require('serve-static');

const blogPostApi = require('./apiRoutes');

const app = express();

// html serve up
app.use ('/', serveStatic('public', {
  'index': ['index.html']
}));

app.use('/api', blogPostApi);

app.listen(3000, ()=>{
  console.log('WE Live!');
});
