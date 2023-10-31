<template>
	<nuxt-link :to="props.link" class="project-box">
		<!-- <div class="project-box"> -->
			<h2>{{ props.title }}</h2>
			<img :src="props.thumbnail" />
		<!-- </div> -->
	</nuxt-link>
</template>

<script setup lang="ts">
interface IProps {
	title: string;
	link: string;
	thumbnail: string;
}

const props = withDefaults(defineProps<IProps>(),{
	title: 'project title default prop',
	link: '/',
	thumbnail: 'https://via.placeholder.com/150',
})
</script>
