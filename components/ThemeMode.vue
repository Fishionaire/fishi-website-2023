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
</style>

<style lang="sass" scoped>
.toggle-box
	position: absolute
	top: 4px
	right: 4px
	width: 60px
	height: 30px
	padding: 2px
	background-color: rgba($primary-color,1)
	border-radius: 100px


.toggle-button
	width: 26px
	height: 26px
	background-color: white
	border-radius: 100px
	transition: all 0.2s ease-in-out
	// z-index: 10

	&.dark
		transform: translateX(30px)

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
