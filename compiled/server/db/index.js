const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true).connect('mongodb://127.0.0.1:27017/checkout', { useNewUrlParser: true }).catch(e => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9kYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJzZXQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImRiIiwiY29ubmVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQUQsU0FDR0UsR0FESCxDQUNPLG9CQURQLEVBQzZCLElBRDdCLEVBRUdDLE9BRkgsQ0FFVyxvQ0FGWCxFQUVpRCxFQUFDQyxpQkFBaUIsSUFBbEIsRUFGakQsRUFHR0MsS0FISCxDQUdTQyxLQUFLO0FBQ1ZDLFVBQVFDLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQ0YsRUFBRUcsT0FBcEM7QUFDRCxDQUxIOztBQU9BLE1BQU1DLEtBQUtWLFNBQVNXLFVBQXBCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCSCxFQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxubW9uZ29vc2VcbiAgLnNldCgndXNlVW5pZmllZFRvcG9sb2d5JywgdHJ1ZSlcbiAgLmNvbm5lY3QoJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MjcwMTcvY2hlY2tvdXQnLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlfSlcbiAgLmNhdGNoKGUgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InLCBlLm1lc3NhZ2UpXG4gIH0pXG5cbmNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcbiJdfQ==