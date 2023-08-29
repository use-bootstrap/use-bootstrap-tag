<script lang="ts">
  import navaid from 'navaid'
  import Home from './pages/Home.svelte'
  import Install from './pages/Install.svelte'
  import Demo from './pages/Demo.svelte'
  import Api from './pages/Api.svelte'
  import Customize from './pages/Customize.svelte'
  import { name, repository } from '../../package.json'

  // Theme
  let theme: 'light' | 'dark' = 'light'
  $: {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
  function toggleTheme(e: Event) {
    theme = (e.target as HTMLInputElement).checked ? 'dark' : 'light'
  }

  // Location path
  let path = '/'
  $: {
    path && window.scrollTo(0, 0)
  }
  function update() {
    let pathname = location.pathname
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1)
    }
    path = pathname
  }
  navaid().on('*', update).listen()

  // Routes
  const routes = {
    '/': Home,
    '/install': Install,
    '/demo': Demo,
    '/api': Api,
    '/customize': Customize,
  } as Record<string, typeof Home>
</script>

<nav
  class="navbar navbar-expand bg-body-tertiary sticky-top"
  data-bs-theme="dark"
>
  <div class="container justify-content-start">
    <a class="navbar-brand d-flex align-items-center gap-2" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
        />
        <path
          d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
        />
      </svg>
      {name}
    </a>
    <div class="ms-auto navbar-nav align-items-center gap-3">
      <a
        class="fs-5 nav-link p-0"
        href={repository}
        target="_blank"
        aria-label="GitHub Project"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
      <label
        class="btn nav-link p-0 border-0 fs-5"
        for="bs-theme"
        title="Toggle color schema"
      >
        {#if theme === 'light'}
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        {:else}
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        {/if}
      </label>
      <input
        type="checkbox"
        class="btn-check"
        id="bs-theme"
        autocomplete="off"
        on:change={toggleTheme}
      />
    </div>
  </div>
</nav>

<div
  class="bg-body-tertiary"
  style="border-bottom: var(--bs-border-width) solid var(--bs-border-color)"
>
  <div class="container pt-3">
    <nav style="margin-bottom: -1px">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" class:active={path === '/'} href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={path === '/install'} href="/install"
            >Install</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={path === '/demo'} href="/demo"
            >Demo</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={path === '/api'} href="/api">API</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            class:active={path === '/customize'}
            href="/customize">Customize</a
          >
        </li>
      </ul>
    </nav>
  </div>
</div>

<div class="container py-3">
  <div class="pt-4" role="main">
    <svelte:component this={routes[path]} />
  </div>
</div>
