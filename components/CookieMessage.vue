<template>
	<div class="cookie-message-box">
		<p>
			We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
		</p>
		<div class="cookie-message-buttons">
			<button @click="revokeConsent">Revoke consent</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const { revokeConsent } = useGtag()
</script>
