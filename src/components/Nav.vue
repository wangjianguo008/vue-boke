<template>
	<div>
		<div class="nav">
			<ul>
		    	<!-- <router-link to="/home" tag="li" active-class="active">
		    		<a href="javascript:;">首页</a>
		    	</router-link>
		    	<router-link to="/follow" tag="li" active-class="active">
		    		<a href="javascript:;">关注</a>
		    	</router-link>
		    	<router-link to="/column" tag="li" active-class="active">
		    		<a href="javascript:;">栏目</a>
		    	</router-link>
 -->
 				<router-link tag="li" active-class="active" to='/home'><a href="javascript:;">首页</a></router-link>
 				<router-link tag="li" active-class="active" to='/follow'><a href="javascript:;">关注</a></router-link>
 				<router-link tag="li" active-class="active" to='/column'><a href="javascript:;">栏目</a></router-link>
		    </ul>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>