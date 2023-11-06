<template>
	<nuxt-link :to="props.href">{{ props.text }} -></nuxt-link>
</template>

<script setup lang="ts">
type Props = {
	href: string;
	text: string;
}

const props = withDefaults(defineProps<Props>(), {
	href: "/",
	text: 'Default link text'
})
</script>

<style lang="sass" scoped>
a
	color: $primary-color
	text-decoration: underline
	font-weight: bold
</style>
