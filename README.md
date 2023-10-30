Thank you for considering me as a candidate.

To run this application, please follow these steps:

1. Open a terminal and run `yarn install` , then run `yarn start`.
2. To test the application, run `yarn test`.
3. To run Storybook, run `yarn storybook`.

The stack I used is React.js, TypeScript, Redux.js, Redux Toolkit, Ant Design, Styled Component, Jest, React Testing Library, and Storybook.

Key points of the application:

- I decided to use `createApi` from Redux Toolkit because it helps with fetching data more easily and efficiently. However, I could also create a slice and connect it with an Axios function to fetch the data using a more traditional approach.

- I added a debounce functionality to limit the amount of API requests, so users can only fetch repositories once every 300ms.

- I added a pagination feature for the application.
