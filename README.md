# React Router v6 Nested Route Bug

This repository demonstrates a bug encountered when using nested routes in React Router v6. The issue involves a nested route incorrectly rendering its component even when the parent route is active. 

## Bug Description

The `/about/contact` route renders the `Contact` component even when navigating to `/about`.  This behavior is unexpected; the `Contact` component should only render when explicitly navigating to `/about/contact`.  The problem arises from the route configuration within `react-router-dom`'s `Routes` component.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/about`. You'll observe that the `Contact` component renders, which is incorrect.
5. Navigate to `/about/contact`. The `Contact` component renders correctly.

## Solution

The solution involves correctly structuring the nested routes to prevent this unexpected rendering behavior. Please refer to `bugSolution.js` for the corrected code.