
import { writable, get } from "svelte/store";

export const snippetStore = writable<CodeSnippet[]>([]);

export function addSnippet(input:CodeSnippetInput){
    let snippets = get(snippetStore)
    snippetStore.update(() => {
        return [{...input, favorite: false}, ...snippets]
    })
}

export function deleteSnippet(index: number){
    let snippets = get(snippetStore)
    snippets.splice(index, 1);
    snippetStore.update(() => {
    return snippets;
    })
}
export function toggleFavorite(index: number){
    let snippets = get(snippetStore)
    snippetStore.update(() => {
    return snippets.map((snippet, snippetIndex) => {
        if(snippetIndex === index){
            return{...snippet, favorite: !snippet.favorite}
        }
        return snippet;
    });
    })
}