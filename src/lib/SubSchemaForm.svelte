<script lang="ts">
  import type { CommonComponentParameters } from "./types/CommonComponentParameters";
  import { editorForSchema } from "./types/schema";
  import { resolveRefs } from "json-refs";
  export let params: CommonComponentParameters;
  export let schema: any;
  export let value: any;

  let { components } = params;

  let typeComponent: any;

  const getComponent = (resolvedSchema: any) => components[editorForSchema(resolvedSchema)];
</script>

{#await resolveRefs(schema)}
  <p>loading...</p>
{:then result}
  <svelte:component this={getComponent(result.resolved)} {params} {value} schema={result.resolved} />
{/await}
