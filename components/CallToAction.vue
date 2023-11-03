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
		margin: 3rem 0
		padding: 1rem
		color: white
		background: $primary-color
		cursor: pointer
		border-radius: $border-radius

		&:hover
			background: $secondary-color

</style>
