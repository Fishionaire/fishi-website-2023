<template>
  <nuxt-link :to="props.project.link" class="project-box">
    <div class="project-text-box">
      <h3>{{ props.project.title }}</h3>
      <div class="keywords-box">
        <div
          v-for="(keyword, i) in props.project.keywords"
          class="keyword-box"
          :key="i"
        >
          <div>{{ keyword }}</div>
        </div>
      </div>
      <p v-html="props.project.description"></p>
    </div>
    <NuxtImg
      :src="`/${props.project.thumbnailImg}`"
      class="project-thumbnail"
      :alt="props.project.thumbnailAlt"
    />
  </nuxt-link>
</template>

<script setup lang="ts">
import type { IProject } from "~/types/Project.js";

type Props = {
  project: any;
};

const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="sass" scoped>
.project-box
	display: flex
	justify-content: space-between
	align-items: center
	gap: 1rem
	padding: 1rem
	background-color: rgba($primary-color, 0.1)
	border-radius: $border-radius
	cursor: pointer
	transition: all 0.2s ease-in-out
	flex-direction: row-reverse

	@include max-s
		flex-direction: column

	&:hover
		background-color: rgba($primary-color, 0.2)
		img
			filter: saturate(2)

	&.right
		// flex-direction: row-reverse

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
	@include max-s
		order: 1

	@include min-m
		width: 40%

.keywords-box
	display: flex
	flex-wrap: wrap
	gap: 0.5rem

.keyword-box
	padding: 0.1rem
	font-size: 0.7rem
	background-image: $gradient-1
	border-radius: 100px
	white-space: nowrap

	div
		padding: 0.2rem 0.4rem
		background-color: white
		border-radius: 100px
</style>

<style lang="sass">
.dark
	.keyword-box
		div
			background-color: $bg-color-dark
</style>
