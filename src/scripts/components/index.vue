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