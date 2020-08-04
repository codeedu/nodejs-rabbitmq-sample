import express from 'express';
const router = express.Router();

router.post('/express', function(req, res, next) {
  console.log(req.body);
  res.send('respond with a resource');
});

export default router;
