const { Router } = require('express');
const router = new Router();
const orsersRouter = require('./orderRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/orders', orsersRouter);

module.exports = router