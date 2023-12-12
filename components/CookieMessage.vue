<template>
  <div class="cookie-message-box" v-if="isOpen">
    <p>
      We use cookies to ensure that we give you the best experience on our
      website. If you continue to use this site we will assume that you are
      happy with it.
    </p>
    <div class="cookie-message-buttons">
      <button @click="closeCookieMessage"><svgo-cross /></button>
      <!-- <button @click="revokeCookie">Revoke consent</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { grantConsent, revokeConsent } = useGtag();

const isOpen = ref(true);

const revokeCookie = () => {
  revokeConsent();
};

const closeCookieMessage = () => {
  isOpen.value = false;
  grantConsent(); //// @todo: cookie message should be persistent
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
	gap: 8px
	color: white
	background-color: rgba($primary-color, 0.8)
	border-top: 1px solid $primary-color
	z-index: 1000

button
	background-color: $primary-color
	color: white
	padding: 0.6rem 0.8rem
	border-radius: $border-radius
	border: none
	cursor: pointer
	transition: all 0.2s ease-in-out

	&:hover
		background-color: darken($primary-color, 10%)
</style>
