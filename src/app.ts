const collectData = require('./tasks/collector');
const schedule = require('node-schedule');

schedule.scheduleJob('0 15 * * *', () => {
    collectData();
});