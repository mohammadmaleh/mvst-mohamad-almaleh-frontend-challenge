# AppLayout Component

The `AppLayout` component is a React component that renders a layout for a list of repositories. It uses the `useDebounce` hook from the `@uidotdev/usehooks` package to debounce the search input, and the `useGetRepositoriesQuery` hook from the `repositoriesSlice` feature to fetch the repositories from an API.

## Props

The `AppLayout` component does not accept any props.

## State

The `AppLayout` component has the following state:

- `repositoryName`: a string that represents the name of the repository being searched for.
- `currentPage`: a number that represents the current page of the repository list being displayed.

## Hooks

The `AppLayout` component uses the following hooks:

- `useDebounce`: a hook from the `@uidotdev/usehooks` package that debounces the search input.
- `useGetRepositoriesQuery`: a hook from the `repositoriesSlice` feature that fetches the repositories from an API.
