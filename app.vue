<template>
  <div class="fishi-content-box">
	<router-view></router-view>
  </div>

  <Footer />
</template>

<style lang="sass" scoped>
.fishi-content-box
	display: flex
	flex-direction: column
	align-items: center
	max-width: 1000px
	margin: 0 auto

	@include max-s
		padding: 0 1rem
		width: 100%
</style>
