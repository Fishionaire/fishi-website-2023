<template>
	<nuxt-link :to="props.project.link" class="project-box">
		<div class="project-text-box">

			<h3>{{ props.project.title }}</h3>
			<div class="keywords-box">
				<span v-for="keyword,i in props.project.keywords" class="keyword-box" :key="i">{{ keyword }}</span>
			</div>
			<p v-html="props.project.description"></p>
		</div>
			<NuxtImg :src="`/${props.project.thumbnailImg}`" class="project-thumbnail" :alt="props.project.thumbnailAlt"/>
	</nuxt-link>
</template>

<script setup lang="ts">
import type { IProject } from '~/types/Project.js'

type Props = {
	project: any;
}

const props = withDefaults(defineProps<Props>(),{
})
</script>

<style lang="sass" scoped>
.project-box
	display: flex
	justify-content: space-between
	gap: 1rem
	padding: 1rem
	border: 2px solid $primary-color
	border-radius: $border-radius
	cursor: pointer
	transition: all 0.2s ease-in-out

	@include max-s
		flex-direction: column

	&:hover
		// background: $secondary-color
		transform: scale(1.06)

	&.right
		@include min-m
			flex-direction: row-reverse

.project-text-box
	display: flex
	flex-direction: column
	// align-items: center
	gap: 1rem

	@include max-s
		order: 2

	@include min-m
		width: 60%

.project-thumbnail
	// height: auto
	// object-fit: contain

	@include max-s
		order: 1

	@include min-m
		width: 40%

.keywords-box
	display: flex
	flex-wrap: wrap

.keyword-box
	margin: 0.3rem 0.3rem 0.3rem 0
	padding: 0.3rem 0.6rem
	font-size: 0.8rem
	font-weight: 600
	background: $secondary-color
	color: white
	border-radius: 100px
	white-space: nowrap
</style>
