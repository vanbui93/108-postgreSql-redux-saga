var express = require('express');
var router = express.Router();
var pool = require('./connectDb');

//thêm đoạn dưới vào để xử lý lỗi CORS PROXY
// router.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

router.get('/', function(req, res) {
  pool.connect(function(error){
    pool.query('select * from tasks', (err, response) => {
      if(error) {  // nếu lỗi thì trả về error
        return res.send(err.message);
      } else {   // Nếu thành công trả về response
        // console.log(response.rows); //console chỉ xem được trên backend thôi
        return res.send(response.rows);
      }
      // pool.end(); // đóng cổng kết nói csdl
    })
  })
});
