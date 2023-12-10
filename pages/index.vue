<template>
  <div class="hero">
    <!-- <NuxtImg src="/fishi_logo.png" /> -->
    <svgo-logo-test class="logo" />

    <h1>Fishionaire</h1>
    <h2 class="sub-title">web development agency</h2>
  </div>

  <CallToAction
    text="hello@fishionaire.com"
    link="mailto:hello@fishionaire.com"
  />

  <div class="intro-box">
    <h2>Wij maken websites</h2>
    <p>
      Wij helpen je van <span class="highlight">begin tot eind</span>, zodat jij
      de website krijgt die bij je past. Blablabla blabla blabla blabla blabla
      blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla
      blabla blabla
    </p>
    <FishiLink href="/about" text="Lees meer over ons" />
  </div>

  <div class="projects-box">
    <h2>A highlight of our work</h2>
    <Project
      v-for="(project, i) in projects"
      :project="project"
      :key="i"
      :class="i % 2 == 0 ? 'left' : 'right'"
    />
  </div>
</template>

<script setup lang="ts">
import { projectData } from "~/assets/data/projects.js";

const projects = projectData;
</script>

<style lang="sass" scoped>

.hero
	margin: 7rem 0
	text-align: center


.logo
	width: 100%
	height: auto
.sub-title
	font-size: 1.5rem
	letter-spacing: 0.2rem

.intro-box
	margin-top: 4rem
	display: flex
	flex-direction: column
	flex-wrap: wrap
	gap: 1rem

	:deep(a)
		align-self: center


.projects-box
	margin: 6rem 0 4rem
	display: flex
	flex-direction: column
	flex-wrap: wrap
	gap: 3rem

h2
	text-align: center
</style>
