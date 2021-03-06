const express = require('express');

const UserCtrl = require('../controller/user-ctrl');

const router = express.Router();

router.post('/account', UserCtrl.createAccount);
router.post('/shipping', UserCtrl.addShipping);
router.post('/billing', UserCtrl.addBilling);

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvdXNlci1yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJVc2VyQ3RybCIsInJvdXRlciIsIlJvdXRlciIsInBvc3QiLCJjcmVhdGVBY2NvdW50IiwiYWRkU2hpcHBpbmciLCJhZGRCaWxsaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVUMsUUFBUSxTQUFSLENBQWhCOztBQUVBLE1BQU1DLFdBQVdELFFBQVEseUJBQVIsQ0FBakI7O0FBRUEsTUFBTUUsU0FBU0gsUUFBUUksTUFBUixFQUFmOztBQUVBRCxPQUFPRSxJQUFQLENBQVksVUFBWixFQUF3QkgsU0FBU0ksYUFBakM7QUFDQUgsT0FBT0UsSUFBUCxDQUFZLFdBQVosRUFBeUJILFNBQVNLLFdBQWxDO0FBQ0FKLE9BQU9FLElBQVAsQ0FBWSxVQUFaLEVBQXdCSCxTQUFTTSxVQUFqQzs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQlAsTUFBakIiLCJmaWxlIjoidXNlci1yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuXG5jb25zdCBVc2VyQ3RybCA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXIvdXNlci1jdHJsJyk7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvYWNjb3VudCcsIFVzZXJDdHJsLmNyZWF0ZUFjY291bnQpO1xucm91dGVyLnBvc3QoJy9zaGlwcGluZycsIFVzZXJDdHJsLmFkZFNoaXBwaW5nKTtcbnJvdXRlci5wb3N0KCcvYmlsbGluZycsIFVzZXJDdHJsLmFkZEJpbGxpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiJdfQ==