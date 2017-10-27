<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for='(item,index) in arrList'>
	            	<a href="conText.html">
	                    <h2>{{index}}{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				arrList:[]
			}
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var cc=this;
				this.$http.get('src/data/follow.data').then(function(res){
					cc.arrList=res.data;
				}).catch(function(err){
					console.log("Follow",err);
				})
			}
		}
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>