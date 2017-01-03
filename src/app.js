require('./styles/usage/app.scss');
var common = require('./scripts/utils/util.common.js');
var home = require('./scripts/tpls/home.html');
var list = require('./scripts/tpls/list.html');
// require('./scripts/views/home.js');
// common.render(home);
common.render(list);
require('./scripts/views/list.js');
