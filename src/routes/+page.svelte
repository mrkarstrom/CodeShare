<script lang="ts">
	import { snippetStore } from '../stores/SnippetStore';
	import CodeSnippetCard from '$lib/components/CodeSnippetCard.svelte';
	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set([
		{
			title: 'My Snippets',
			language: 'html',
			code: `<div>This is a div</div>`,
			favorite: false
		},
		{
			title: 'My Snippets',
			language: 'html',
			code: `<div>This is a div</div>`,
			favorite: false
		}
	]);
</script>

<div class="container mx-auto flex h-full items-center justify-center">
	<div class="grid min-w-full grid-cols-1 gap-4 md:min-w-[750px]">
		<h3 class="py-6 text-center">Create a Code Snippet</h3>
		<div class="space-y card w-full p-4 text-token">
			<label class="label" for="title">
				<span>Snippet Titel</span>
				<input
					type="text"
					class="input"
					placeholder="Input title here..."
					name="title"
					bind:value={formData.title}
				/>
			</label>
			<label class="label" for="selection">
				<span>Programming Language</span>
				<select class="select" name="selection" bind:value={formData.language}>
					<option value="html">html</option>
					<option value="css">CSS</option>
					<option value="typescript">Typescript</option>
				</select>
			</label>
			<label class="label" for="codesnippet">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter your code snippet here..."
					bind:value={formData.code}
				/>
			</label>
		</div>
		<div class="py-6 text-center">
			<h2>My Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard snippet={snippet} index={index}/>
		{/each}
	</div>
</div>
