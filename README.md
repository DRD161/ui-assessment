# UI Assessment

## Get Started:

- To start, you should run `npm install` to ensure all dependancies are installed.

- Once that's done you can run the project by using `npm run dev`.

## General Notes:

- For this assignment I wanted to focus on the table first. I felt that given the time limit this would be the most productive use of my time as it showcases the majority of the content and functionality. I tried to approach this from the perspective of an internal stakeholder and as a stakeholder I would expect the information to be displayed in an easily digestable format first before worrying about additional functionality (select all, download, etc.).

- I decided to use TypeScript as a means to validate props and ensure that any bugs are handled before runtime. We could do without TypeScript but I feel it provides a better developer experience.

- Each component was broken down into smaller, more manageable pieces to reduce complexity and improve reusability.

- In order to ensure accessibility best practices, the table is fully keyboard navigable and passess Lighthouse accessibility checks. The component was also tested using Voice Over to ensure accessibility for users with low to no vision.

- I initially planned on adding unit tests using Vitest and React Testing LIbrary, but given the timeline I had to forgo them. Given more time I would have written tests for the checkboxes, select all and downlaod.
