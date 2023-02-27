# Svelte kit applications

## Reactivity
### Dynamic Markup
```typescript
<script>
    let name = "svelte"
</script>

<h1>Hello {name.toUpperCase()}!</h1>
```

### Dynamic Attributes
```typescript
<script>
	let src = '/image.gif';
</script>

<img src={src} alt="man dancing"/>
```
OR shorthand
```typescript
<script>
    let src = '/image.gif'
</script>

<img {src} alt="man dancing"/>
```

### Styling
```typescript
<script>
    // stuff in script goes here
</script>

<p>html stuff...</p>

<style lang="scss">
    p {
        color: blue;
    }
</style>
```

### Nested Components
```typescript
<script>
	import Nested from './Nested.svelte';
</script>

<p>html stuff...</p>
<Nested />

<style>
	p {
        // style stuff 
    }
</style>
```

### HTML Tags
```typescript
<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
```

### Assignments
```typescript
<script>
	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
```

### Reactive Declarations
Svelte automatically updates the DOM when your component's state changes

```typescript
<script>
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
```

### Reactive Statements
```typescript
<script>
	let count = 0;

	$: if (count >= 10) {
		alert('count is dangerously high!');
		console.log(`the count is ${count}`)
		count = 0;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
```

### Updating arrays and objects
A simple rule of thumb: the name of the updated variable must appear on the left hand side of the assignment. 
```typescript
<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>
```

## Props

### Declaring Props
In any real application, you'll need to pass data from one component down to its children. To do that, we need to declare properties, generally shortened to 'props'. In Svelte, we do that with the export keyword.

App.svelte
```typescript
<script>
	import Nested from './Nested.svelte';
</script>

<Nested answer={42} />
```
Nested.svelte
```typescript
<script>
	export let answer;
</script>

<p>The answer is {answer}</p>
```

### Default props
Nested.svelte
```typescript
<script>
	export let answer = "answer me";
</script>

<p>The answer is {answer}</p>
```
App.svelte
```typescript
<script>
	import Nested from './Nested.svelte';
</script>

<Nested />
```

### Spread Props
App.svelte
```typescript
<script>
	import PackageInfo from './PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<PackageInfo {...pkg} />
```
PackageInfo.svelte
```typescript
<script>
	export let name;
	export let version;
	export let speed;
	export let website;

	$: href = `https://www.npmjs.com/package/${name}`;
</script>

<p>
	The <code>{name}</code> package is {speed} fast. Download version {version}
	from
	<a {href}>npm</a>
	and <a href={website}>learn more here</a>
</p>

<style>
	code {
        // css stuff
    }
</style>
```

## Logic

### If/Else-if/Else blocks
```typescript
<script>
	let x = 7;
</script>

{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
```

### Each blocks
```typescript
<script>
	let cats = [
		{
			id: 'J---aiyznGQ',
			name: 'Keyboard Cat'
		},
		{
			id: 'z_AbfPXTKms',
			name: 'Maru'
		},
		{
			id: 'OUtn3pvWmpg',
			name: 'Henri The Existential Cat'
		}
	];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
	{#each cats as { id, name }, i}
		<li>
			<a
				target="_blank"
				href="https://www.youtube.com/watch?v={id}"
			>
				{i + 1}: {name}
			</a>
		</li>
	{/each}
</ul>
```

### Keyed each blocks
```typescript
<script>
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}>
	Remove first thing
</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}
```

## Await blocks
`.text()` refers to a a stringified version of the response body
https://developer.mozilla.org/en-US/docs/Web/API/Response/text
```typescript 
<script>
	async function getRandomNumber() {
		const res = await fetch(
			`https://svelte.dev/tutorial/random-number`
		);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}> generate random number </button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```
