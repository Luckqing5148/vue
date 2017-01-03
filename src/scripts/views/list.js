
require('../lib/swiper.js')
var Vue = require('../lib/vue.js')
new Vue({
	el:'#list',
	data:{
		list:[],			
	},
	mounted:function(){
			fetch('/api/list').then(response => response.json())
			.then(res => {
				console.log(res)
				this.list = res
			})
		}
})