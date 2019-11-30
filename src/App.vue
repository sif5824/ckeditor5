<template>
    <div id="app">
        <div class="router">
			<router-view />
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'sof'
        }
    },
    methods: {
        backIndex() {
			this.$router.push({ path: '/'})
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body{
	background: #f4f4f4;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	color: #333;
	min-width: 1200px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	margin: 0 auto;
	width: calc(100% - 20px);
}
.header{
	width: 100%;
	height: 60px;
}
.header .flag{
	float: left;
	font-family: cursive;
	font-size: 36px;
	font-weight: bold;
	line-height: 60px;
	text-shadow:3px 2px 3px #999;
	cursor: pointer;
}
.header .author{
	float: left;
	margin-top: 20px;
	margin-left: 30px;
	line-height: 30px;
	font-size: 24px;
}
.header::after{
	width: 100%;
    height: 0;
    display: block;
    clear: both;
    content: '';
}
.nav{
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #e0e0e0;
	border-radius: 10px;
}
.router{
	padding-top: 10px;
	box-sizing: border-box; 
	min-height: calc(100vh - 220px);
}
.footer{
	margin: 0 auto;
	width: 100%;
	height: 120px;
	background: #e0e0e0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}
</style>
