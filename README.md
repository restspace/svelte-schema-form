# Svelte Schema Form

This is a Svelte implementation of a form generator from JSON Schema. It supports subforms, lists with reordering of items, custom renderer components, and customisable CSS skinning separating layout and look-and-feel.

JSON Schema is a powerful validation/type definition language for JSON data. See this for more information on [JSON Schema](https://cswr.github.io/JsonSchema/spec/introduction/)

## How to use

Install with npm

	npm install @restspace/svelte-schema-form

Use in a component

	<script>
	  import { SubmitForm } from '@restspace/svelte-schema-form';
	  import '@restspace/svelte-schema-form/css/layout.css';
	  import '@restspace/svelte-schema-form/css/basic-skin.css';

	  let schema = {
		  type: "object",
		  properties: {
			  "x": { "type": "string" }
		  }
	  };
	  let value = {};

	  const submit = (e) => {
		  alert(JSON.stringify(e.detail.value, undefined, 2));
	  }
	</script>

	<SubmitForm {schema} {value} on:submit={submit} />

The `layout.css` file creates a standard form layout. `basic-skin.css` adds a very simple skin with fonts, colours etc on top of that.

The `SubmitForm` component manages validation of the entered data using the full JSON Schema spec and renders any error messages beside the relevant components. Standard behaviour is that errors are not shown until the Submit button has been clicked at least once.

## JSON Schema support

| Feature | Support |
|---|---|
|title|This property is used to label a field or fieldset, if it's absent a conversion from camel case (myFieldName) to proper case (My Field Name) is done.|
|description|This property is shown beside the label as a tooltip using the HTML title attribute|
|type="string"|By default, renders as an input element with type="text"|
|minLength, maxLength|Supported in validation|
|pattern|Supported in validation|
|type="number"|By default, renders as an input element with type="number"|
|minimum, maximum|Supported in validation|
|exclusiveMinimum, exclusiveMaximum|Supported in validation|
|enum|A field with the enum property is instead rendered as a Select element with all the enum options given|
|type="object"|Every object is rendered within an HTML Fieldset element with a form field for each property|
|required|Object fields named in the `required` list have to have a value entered to be valid. Required fields have the `required` class added to their labels to enable this to be displayed.
|type="array"|Every array is rendered within an HTML Fieldset element with controls for adding, deleting, moving and duplicating array items (based on the `items` property)|
|||

## Custom rendering components

Svelte Schema Form can override or add rendering components at any level by supplying a map of component type names and component classes.

For example components, look in the /src/lib/editors directory. As an illustration, consider the Number.svelte default editor:

	<script lang="ts">
		import type { CommonComponentParameters } from "../types/CommonComponentParameters";
		export let params: CommonComponentParameters;
		export let schema: any;
		export let value: any;
	</script>

	<!-- event which calls pathChanged should be after all bindings so 'value' will have been updated -->
	<svelte:component this={params.components['fieldWrapper']} {params} {schema}>
		<input id={params.path.join('.')} name={params.path.join('.')}
			type="number" value={value || ''}
			on:input={ev => {
				let val = parseFloat(ev.currentTarget.value);
				params.pathChanged(params.path, isNaN(val) ? undefined : val);
			}}
		/>
	</svelte:component>

The component needs to have the 3 props shown in this component. `schema` and `value` are the local parts of the full schema and value which need to be rendered by this component. `params` contains a number of constant values defining the component including `params.pathChanged` which is a function that needs to be called with the property path to the value the component is rendering (this is `params.path`) and the new value when the value of the form field is changed.

The `<svelte:component>` component wrapping the markup renders the default FieldWrapper.svelte component around the actual editor: this adds the field's standard label and error message.

An example of how to configure a custom component:

	<script>
	  import MyEditor from "./MyComponent.svelte";

	  let components = {
		  "myEditor": MyEditor
	  };
	  ...
	</script>

	<SubmitForm {schema} {value} on:submit={submit} {components} />

You'd then make use of this custom editor component in a schema like this:

	{
		"type": "object",
		"properties": {
			"myField": {
				"type": "string", 
				"editor": "myEditor"
			}
		}
	}

The key in the `components` map is matched to, in priority order, the `editor` property, then the `format` property, then the `type` property. This means you can also substitute editors for field groupings, which is more tricky. Work from the Array.svelte and Object.svelte default editor components in the repo.