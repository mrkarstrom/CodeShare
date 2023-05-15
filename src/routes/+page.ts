import type { PageLoad } from "./$types";


export const load = (() => {
   return {

    snippets: [
{
			title: 'My Snippets',
			language: 'html',
			code: `<div>This is a div</div>`,
			favorite: false
		},
		{
			title: 'My Cool Snippets',
			language: 'typescript',
			code: `<div>This is a div</div>`,
			favorite: false
		}
    ]
   }
}) satisfies PageLoad;