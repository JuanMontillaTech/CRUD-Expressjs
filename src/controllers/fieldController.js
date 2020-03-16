const controlle={};
controlle.list = (req,res) =>{
 req.getConnection((erro,conn)=>{
     conn.query('SELECT * FROM field',(Error, fields)=>{
        if (Error) {
            res.json(Error);
                        
        }
        console.log(fields);
     
        res.render('field',{
            data: fields 
        });

     });
 });
};


controlle.edit = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM field WHERE id = ?',[id],(Error, fields)=>{
           if (Error) {
               res.json(Error);
                           
           }
          
        
           res.render('fieldedit',{
               data: fields[0]
           });
   
        });
    });
   };
   
controlle.data = (req,res) =>{
    req.getConnection((erro,conn)=>{
        const {id} = req.params;
        conn.query('SELECT * FROM field WHERE group = ?',[id],(Error, fields)=>{
           if (Error) {
               res.json(Error);
                           
           }
          
        res.send(fields)
   
        });
    });
   };




controlle.save=(req, res)=>{
     const data = req.body;
    req.getConnection((erro,conn)=>{
        conn.query('INSERT INTO field SET ?',[data],(Error, fields)=>{
           if (Error) {
               res.json(Error);
                           
           }
           res.redirect('/');
            
   
        });
    });
   };

   controlle.update=(req, res)=>{
    const data = req.body;
    const {id} = req.params;
   req.getConnection((erro,conn)=>{
       conn.query('UPDATE field SET ? WHERE id = ?',[data, id],(Error, fields)=>{
          if (Error) {
              res.json(Error);
                          
          }
          res.redirect('/');
           
  
       });
   });
  };


   controlle.delete=(req, res)=>{
    const data = req.params.id;
   req.getConnection((erro,conn)=>{
       conn.query('DELETE FROM field WHERE ID= ?',[data],(Error, fields)=>{
          if (Error) {
              res.json(Error);
                          
          }
          res.redirect('/');
           
  
       });
   });
  };


module.exports = controlle;