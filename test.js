const {pool} = require('./pgConfig')
pool.query('select * from книги;', (err, res) =>
	{
		if(err) console.log('Ошибка:', err)
		else
		{
			console.log(res.rows)
			pool.end()
		}
	}
)