<<<<<<< HEAD
<template>
  <div class="index">
    <router-view></router-view>
  <footer>
    <ul>
     <li @click="changeNav(i)" :class="{active: i==navIndex}" v-for="(fn,i) in footerNav">
          <router-link :to="fn.router">
            <i class="yo-ico" v-html="fn.ico"></i>
            <b>{{fn.title}}</b>
          </router-link>
        </li>
    </ul>
  </footer>
</div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        navIndex: 0,
        footerNav: [
          {
            router: '/',
            ico: '&#xe7ae;',
            title: '首页'
          },
          {
            router: '/sort',
            ico: '&#xe65b;',
            title: '分类'
          },
           {
            router: '/cart',
            ico: '&#xe611;',
            title: '购物车'
          },
          {
            router: '/my',
            ico: '&#xe609;',
            title: '我的'
          }
        ]
      }
    },
    methods: {
      changeNav: function (index) {
        this.navIndex = index;
      }
    }
  }
</script>
=======
<template id="">
  <div class="index">
  	<router-view></router-view>
  	<footer>
  		<ul>
  			<li class="active">
          		<i class="yo-ico">&#xe7ae;</i>
         			 <b>
                  <router-link to="/">
                    首页
                  </router-link>
                </b>
        		</li>
  	      	<li>
  	        	<i class="yo-ico a">&#xe65b;</i>
  	        	<b>
                
                    分类
                
              </b>
  	      	</li>
        		<li>
         		 	<i class="yo-ico">&#xe611;</i>
          		<b>购物车</b>
        		</li>
       		 <li>
          		<i class="yo-ico">&#xe609;</i>
          		<b>
                <router-link to="/my">
                  我的
                </router-link>
              </b>
       		 </li>
       
  		</ul>
  	</footer>
  </div> 
</template>
>>>>>>> gxz
