import express from 'express';
const router = express.Router();

router.post('/express', async function(req, res, next) {
  res.send(req.body);
});

export default router;
