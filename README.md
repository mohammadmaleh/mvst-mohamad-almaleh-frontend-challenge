# Thank you for considering me as a candidate

## App Description

This application is a tool to search GitHub repositories.

## Instructions

To run this application, please follow these steps:

1. Open a terminal and run `yarn install`, then run `yarn start`.
2. To test the application, run `yarn test`.
3. To run Storybook, run `yarn storybook`.

## Stack

The stack I used is:

- React.js
- TypeScript
- Redux.js
- Redux Toolkit
- Ant Design
- Styled Component
- Jest
- React Testing Library
- Storybook

## Approach

- I decided to use `createApi` from Redux Toolkit because it helps with fetching data more easily and efficiently and allows us to cache the results. However, I could also create a slice and connect it with an Axios function to fetch the data, then store it inside the store using a more traditional approach.

- I added a debounce functionality to limit the amount of API requests, so users can only fetch repositories once every 300ms.

- I added a pagination feature for the application.

## Future Development

- We can add selection of page size.
- We can improve the design and show more information, like linking the user's to the repositories list.
- The application can be tested better and have better storybooks.
