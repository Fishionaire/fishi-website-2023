<template>
  <div class="cookie-message-box">
    <p>
      We use cookies to ensure that we give you the best experience on our
      website. If you continue to use this site we will assume that you are
      happy with it.
    </p>
    <div class="cookie-message-buttons">
      <button @click="revokeCookie">Revoke consent</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { revokeConsent } = useGtag();

const revokeCookie = () => {
  revokeConsent();
};
</script>

<style lang="sass" scoped>
.cookie-message-box
	position: fixed
	left: 0
	right: 0
	bottom: 0
	padding: 1rem
	display: flex
	justify-content: center
	align-items: center
	color: white
	// text-align: center
	background-color: rgba($primary-color, 0.9)
	border-top: 1px solid $primary-color
	z-index: 1000

button
	background-color: $primary-color
	color: white
	padding: 0.5rem 1rem
	border-radius: $border-radius
	border: none
	cursor: pointer
	transition: all 0.2s ease-in-out

	&:hover
		background-color: darken($primary-color, 10%)
</style>
