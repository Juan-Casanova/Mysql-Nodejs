const dbconecction =require('../../config/dbconnection')


module.exports=app=>{

    const conecction=dbconecction();

    app.get('/',(req,res)=>{
        conecction.query('SELECT * FROM employe_register',(err,result)=>{
            res.render('curses/courses',{
                alumnos:result
            });
        });
        
    });

    app.get('/format',(req,res)=>{
        res.render('curses/format')
    })

    app.get('/course1',(req,res)=>{
        conecction.query('SELECT * FROM employe_register',(err,result)=>{
            console.log(result);
            res.render('curses/course1',{
                alumnos:result
            });
        });
    })

    app.get('/course2',(req,res)=>{
        conecction.query('SELECT * FROM employe_register',(err,result)=>{
            console.log(result);
            res.render('curses/course2',{
                alumnos:result
            });
        });
    })

    app.get('/course3',(req,res)=>{
        conecction.query('SELECT * FROM employe_register',(err,result)=>{
            console.log(result);
            res.render('curses/course3',{
                alumnos:result
            });
        });
    })
}