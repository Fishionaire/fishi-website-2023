<template>
  {{ isDark }}
  <button @click="toggleDark()">Toggle Dark Mode</button>

  <div class="fishi-content-box">
    <slot />
  </div>

  <FishiFooter />

  <ClientOnly fallback="Cookie Message">
    <CookieMessage />
  </ClientOnly>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark(); //
const toggleDark = useToggle(isDark);

useSeoMeta({
  title: "Fishionaire",
  ogTitle: "Fishionaire",
  description: "Web Development Agency",
  ogDescription: "Web Development Agency",
  ogImage: "https://example.com/image.png", ////
  twitterCard: "summary_large_image", ////
});
</script>

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

<style lang="sass">
.dark
	background-color: $bg-color-dark
	color: white
</style>
