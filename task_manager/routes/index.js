var express = require('express');
var router = express.Router();

var pool = require('./connectDb');

//thêm đoạn dưới vào để xử lý lỗi CORS PROXY
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//params => http://localhost:3000/users:id => req.params
//query paramater  http://localhost:3000/users/?q=henry = req.query
router.get('/tasks', async (req, res) => {
  pool.connect(async (error) => {
    try {
      const { q } = req.query;

      // search:  title và description => %{}%
      // "Học reactjs bài 1"     => %bài%
      // || => OR SQL || => Concat
      if(q){
        const users = await pool.query(
          "SELECT * FROM tasks WHERE title || ' ' || description ILIKE $1",[`%${q}%`]
        );
        res.json(users.rows);
      } else {
        const usersDefault = await pool.query(
          "SELECT * FROM tasks"
        );
        res.json(usersDefault.rows);
      }
    } catch (err) {
      console.error(err.message);
    }
  })
});


/* GET product page. */
// router.get('/tasks', function (req, res) {
//   pool.connect(function (error) {
//     pool.query('SELECT * FROM tasks', (err, response) => {
//       if (error) {  // nếu lỗi thì trả về error
//         return console.error('error running query', error);
//       } else {   // Nếu thành công trả về response
//         res.send(response.rows);  //send dữ liệu phía api
//       }
//       // pool.end(); // đóng cổng kết nói csdl
//     })
//   })
// });


// var sql = 'INSERT INTO users(password_hash, email) VALUES($1, $2) RETURNING id'
// client.query(sql, ['841l14yah', 'test@te.st'], function (err, result) {
//   if (err) //handle error
//   else {
//     var newlyCreatedUserId = result.rows[0].id;
//   }
// });

/* ADD a product. */
router.post('/tasks', function (req, res, next) {
  pool.connect(function (error) {   // phải có pool.connect ở đây thì mới được
    var title = req.body.title,
      description = req.body.description,
      status = req.body.status;
    sql = "insert into tasks (title,description,status) values ($1,$2,$3) RETURNING id,title,description,status";
    pool.query(sql, [title, description, status], (error, response) => {
      if (error) {  // nếu lỗi thì trả về error
        return console.error('error running query', error);
      } else {   // Nếu thành công trả về response
        res.send(response.rows[0]);  //send dữ liệu phía api
        // console.log(response.rows[0]);
      }
    })
  })
});

/* DELETE a product. */
router.delete('/tasks/:id', (req, res) => {
  //lấy id ở đường dẫn req.params.id
  pool.connect(function (error) {
    var sql = "DELETE FROM tasks " + "WHERE id='" + req.params.id + "'";
    pool.query(sql, function (err, response) {
      if (err) {
        return res.send(error.message);
      } else {
        return res.json({ response });
      }
    });
  })
});

// /* GET product page hiển thị data lên form. */
router.get('/tasks/:id', function (req, res) {
  pool.connect(function (error) {
    var sql = "SELECT * FROM tasks " + "WHERE id='" + req.params.id + "'";
    pool.query(sql, (err, response) => {
      if (error) {  // nếu lỗi thì trả về error
        return console.error('error running query', err.message);
      } else {   // Nếu thành công trả về response
        console.log(response.rows); //console chỉ xem được trên backend thôi
        return res.send(response.rows);
      }
      // pool.end(); // đóng cổng kết nói csdl
    })
  })
});

//Tiến hành update vào api
router.put('/tasks/:id', function (req, res) {
  pool.connect(function (error) {
    var sql = "UPDATE tasks SET " +
      "title = '" + req.body.title + "'," +
      "description = '" + req.body.description + "'," +
      "status = '" + req.body.status + "'" +
      "WHERE id='" + req.params.id + "'" +
      "RETURNING id,title,description,status";
    pool.query(sql, function (error, results) {
      const upContent = req.params.id
      if (!upContent) return res.status(404).json({})
      upContent.name = req.body
      res.send(results.rows[0]);
    });
  })

});

module.exports = router;
