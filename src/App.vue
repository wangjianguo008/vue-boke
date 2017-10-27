<template>
	<div id="app">
		<loading v-show="loadingShow"></loading>
		<NavView v-show="headerShow"></NavView>
		<transition name="slide-down">
			<keep-alive>
				<router-view class="router-view"></router-view>
			</keep-alive>
		</transition>	
		<FooterView></FooterView>
	</div>
</template>
<script>
	import NavView from './components/Nav.vue';
	import FooterView from './components/Footer.vue';
	import {mapGetters,matpActions} from 'vuex' ;
	export default{
		computed:mapGetters([
    		'headerShow',
    		 "loadingShow"
  		]),
  		watch:{
  			$route(to,from){
  				if(to.path=='/user-info'){
  					this.$store.dispatch('hideHeader');
  				}else{
  					this.$store.dispatch('showHeader');
  				}
  			}
  		},
		components:{
			NavView,
			FooterView
		}
	}
</script>
<style>
	@import './assets/css/index.css';
	.slide-down-enter-active, .slide-down-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 6em, 0);
	}
	.slide-down-enter, .slide-down-leave-active {
	  opacity: .1;
	  transform: translate3d(0, 6em, 0);
	}
</style>