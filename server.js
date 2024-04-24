const express =require('express');
const {Pool}=require('pg');

const app=express();
const port=2001;

const pool= new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: 'root',
    port: 5432,
});

app.use(express.json());


//GET all todos
app.get('/todos',(req,res)=>{
    pool.query('SELECT * FROM todos',(err,result)=>{
        if(err){
            console.error('Error fetching todos',err);
            res.status(500).json({err: 'Internal server error'});
        }else{
            res.json(result.rows);
        }
    })
})

//POST a new todo
app.post('/todos',(req,res)=>{
    const { title, completed} =req.body;
    pool.query('INSERT INTO todos(title,completed) VALUES ($1,$2)',[title,completed],(err)=>{
        if(err){
            console.error('error creating todo',err);
            res.status(500).json({err:'Internal server error'});
        }else{
            res.status(201).json({message:'todo created succesfully'});
        }
    })
})


//PUT update todo
app.put('/todos/:id',(req,res)=>{
    const {id}= req.params;
    const {title,completed}= req.body;
    pool.query('UPDATE todos SET title =$1, completed =$2 WHERE id=$3',[title,completed,id],(error)=>{
        if(error){
            console.error('Error updating todo',error);
            res.status(500).json({error:'Internal server error'});
            
        }else{
            res.json({message:'todo updated succesfully'});
        }
    });
});

app.delete('/todos/:id',(req,res)=>{
    const {id}= req.params;
    const {title,completed}= req.body;
    pool.query('DELETE FROM todos WHERE ID =$1',[id],(error)=>{
        if(error){
            console.error('Error updating todo',error);
            res.status(500).json({error:'Internal server error'});
            
        }else{
            res.json({message:'message deleted succesfully'});
        }
    });
});

app.listen(port);