const momentTimeZone = require("moment-timezone");
const moment = require("moment");

function stringToDate(strTime, type) {
  // console.log(momentTimeZone.tz(strTime, type).toDate());
  return moment(strTime, type).toDate();
}

module.exports = {
  stringToDate,
};
