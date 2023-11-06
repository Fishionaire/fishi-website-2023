<template>
	<footer>
		<div>Fishionaire VOF © {{ year }}</div>
		<div>
			<p><a href="tel:0031683590010">0683590010</a></p>
			<p><a href="tel:hello@fishionaire.com">hello@fishionaire.com</a></p>
			<p>Lange Heul 12</p>
			<p>1403NL Bussum</p>
		</div>
		<div>
			<p>KVK: 63331985</p>
			<p>BTW: NL855190140B01</p>
		</div>
	</footer>
</template>

<script setup lang="ts">

const year = new Date().getFullYear()
</script>

<style lang="sass" scoped>
footer
	display: flex
	margin-top: 1rem
	padding: 1rem
	color: white
	background: $primary-color
</style>
