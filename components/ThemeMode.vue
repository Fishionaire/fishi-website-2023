<template>
  <div class="toggle-box" @click="toggleDark()">
    <svgo-moon filled class="icon" />
    <svgo-sun filled class="icon" />
    <div class="toggle-button" :class="{ dark: isDark }"></div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="sass">
.dark
	background-color: $bg-color-dark
	color: white

	.toggle-box
		background-color: darken($primary-color,20%) !important
</style>

<style lang="sass" scoped>
.toggle-box
	position: absolute
	top: 6px
	right: 6px
	width: 54px
	height: 30px
	padding: 4px
	background-color: darken($primary-color,20%)
	background-color: black
	border-radius: 100px


.toggle-button
	position: relative
	width: 22px
	height: 22px
	background-color: white
	border-radius: 100px
	transition: all 2s ease //// @todo: fix transition
	z-index: 10

	&.dark
		transform: translateX(24px)

.icon
	position: absolute
	top: 50%
	width: 20px
	height: 20px
	transform: translateY(-50%)

.icon:first-of-type
	left: 4px

.icon:last-of-type
	right: 4px
</style>
