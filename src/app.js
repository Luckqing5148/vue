require('./styles/usage/app.scss')

var layout = require('./scripts/tpls/layout.html')
var common = require('./scripts/utils/util.common.js')
common.render(layout)

//components
import index from "./scripts/components/index.vue"
import home from "./scripts/components/home.vue"
import my from "./scripts/components/my.vue"

//router

const routes=[
{
	path:'/',
	component:index,
	children:[{
		path:'/',
		component:home
	},
	{
		path:'/my',
		component:my
	}]
}]

const router = new VueRouter({
	routes
})

const app = new Vue({
	/*router:router,
	render:h => h(home)*/
	router
}).$mount('#app')














/*var common = require('./scripts/utils/util.common.js');
var home = require('./scripts/tpls/home.html');
var list = require('./scripts/tpls/list.html');
var my =require('./scripts/tpls/my.html');
var register=require('./scripts/tpls/register.html');
// common.render(home);
common.render(home);
// require('./scripts/views/home.js');
// require('./scripts/views/list.js');
require('./scripts/views/home.js');
*/