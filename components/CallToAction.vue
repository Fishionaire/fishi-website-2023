<template>
	<div class="call-to-action-box">
		<nuxt-link :to="props.link">{{ props.text }}</nuxt-link>
	</div>
</template>

<script setup lang="ts">
interface IProps {
	text: string;
	link: string;
}

const props = withDefaults(defineProps<IProps>(),{
	text: 'prop text',
	link: '/',
})
</script>

<style lang="sass" scoped>
.call-to-action-box
	a
		display: inline-flex
		justify-content: center
		padding: 1rem
		background: $primary-color
		cursor: pointer

</style>
