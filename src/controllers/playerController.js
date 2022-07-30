const controller = {}

controller.list = function(req, res){
    req.getConnection((err,conn)=>{
        const query = ['SELECT * FROM player', 'SELECT max(id) FROM player;']
        conn.query(query.join(';'), (err, players, fields)=>{
            if(err){
                console.log(err)
                // res.json(err);
            }
            res.render('player',{
                myid: Object.values(players[1][0]),
                data: players[0],
            })
        })
        if(err){
            console.log(err)
        }
    })
}
controller.save = (req,res)=>{
    data = req.body
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO player set ?', [data], (error,player)=>{
            if(err){console.log(error)}
            res.redirect('/')
        })
        
    })
}
controller.delete = (req, res)=>{
    const {id} = req.params
    req.getConnection((err, conn)=>{
        conn.query('Delete from player where id = ?', [id])
        res.redirect('/')
    })
}

controller.edit = (req, res)=>{
    const {id} = req.params
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM player WHERE id = ?', [id], (err, player)=>{

            res.render('player_edit', {data:player[0]})
        })
        
    })
}

controller.update = (req, res)=>{
    const changes = req.body
    const {id} = req.params
    req.getConnection((err, conn)=>{
        conn.query('UPDATE player SET ? WHERE id = ?', [changes, id], (err, updateInfo)=>{
            res.redirect('/')
        })
    })
}

module.exports = controller