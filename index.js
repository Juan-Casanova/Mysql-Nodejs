const app=require('./src/config/server')


require('./src/app/routes/courses')(app);

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})