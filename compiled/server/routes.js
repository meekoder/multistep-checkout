const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {
    res.sendFile(publicDir + '/index.html');
});

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJwYXRoIiwiZ2V0IiwicmVxIiwicmVzIiwibmV4dCIsInNlbmRGaWxlIiwicHVibGljRGlyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVUMsUUFBUSxTQUFSLENBQWhCO0FBQ0EsTUFBTUMsTUFBTUYsU0FBWjtBQUNBLE1BQU1HLFNBQVNILFFBQVFJLE1BQVIsRUFBZjtBQUNBLE1BQU1DLE9BQU9KLFFBQVEsTUFBUixDQUFiOztBQUdBRSxPQUFPRyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ3JDRCxRQUFJRSxRQUFKLENBQWFDLFlBQVksYUFBekI7QUFDSCxDQUZEOztBQUlBQyxPQUFPQyxPQUFQLEdBQWlCVixNQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cblxucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLnNlbmRGaWxlKHB1YmxpY0RpciArICcvaW5kZXguaHRtbCcpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIl19