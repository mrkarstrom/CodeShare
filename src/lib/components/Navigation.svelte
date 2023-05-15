<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function closeDrawer(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={closeDrawer}>Main</a></li>
		<li><a href="/1" on:click={closeDrawer}>Page 1</a></li>
		<li><a href="/2" on:click={closeDrawer}>Page 2</a></li>
		<li><a href="/3" on:click={closeDrawer}>Page 3</a></li>
	</ul>
</nav>
