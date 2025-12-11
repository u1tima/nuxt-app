<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div>We a inside blog</div>
	<div>Post id is {{ route.params.id }}</div>
</template>