<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container mx-auto flex h-full items-center justify-center">
	<div class="grid min-w-full grid-cols-1 gap-4 md:min-w-[750px]">
		<h3 class="py-6 text-center">Create a Code Snippet</h3>
		<div class="space-y card w-full p-4 text-token">
			<label class="label" for="title">
				<span>Snippet Titel</span>
				<input type="text" class="input" placeholder="Input title here..." name="title"/>
			</label>
			<label class="label" for="selection">
				<span>Programming Language</span>
				<select class="select" name="selection">
					<option value="html">html</option>
					<option value="css">CSS</option>
					<option value="typescript">Typescript</option>
				</select>
			</label>
			<label class="label" for="codesnippet">
				<span>Code Snippet</span>
				<textarea class="textarea rows-4"></textarea>
			</label>
		</div>
	</div>
</div>
