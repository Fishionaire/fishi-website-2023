
<template>
	<div class="hero">
		<img src="~/assets/images/fishi_logo.png" />
		<h1>Fishionaire</h1>
		<h2 class="sub-title">web development</h2>
	</div>

	<CallToAction text="hello@fishionaire.com" link="mailto:hello@fishionaire.com"/>

	<div class="projects-box">
		<Project v-for="project,i in projects" :project="project" :key="i" :class="i % 2 == 0 ? 'left' : 'right'"/>
	</div>

	<Footer />
</template>

<script setup lang="ts">
import { projectData } from '~/assets/data/projects.js'

const projects = projectData
</script>

<style lang="sass" scoped>

.hero
	margin: 4rem 0
	text-align: center
.sub-title
	font-size: 1.5rem
	font-weight: 600
	letter-spacing: 0.2rem
.projects-box
	display: flex
	flex-direction: column
	flex-wrap: wrap
	gap: 1rem

</style>
