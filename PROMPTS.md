# Task Prompts and Work Log

## Task 1 — Local data and destination list

### Prompt I gave

**Task 1:**

Create a local data file at `src/data/destinations.js`.
Add 3–5 sample destinations with fields:
`id, name, country, image, description, vibe, activities, region, population`.
Export the array as `destinations`.
Do not fetch from API — use only local sample data.

**Task 1 (part 2):**

Render the list of destinations from the local data file.
Use the array exported from `src/data/destinations.js`.
In `DestinationList.jsx`:
- Import the destinations array.
- Map over the array.
- Display each destination’s name, country, and image.
- Create a simple list layout.
No API calls — only local data.

### Agent did

- Created local sample data in `destinations.js`
- Rendered the destination list using local data

### I checked

- All destinations appear correctly in the UI

## Task 2 — Destination selection and details

### Prompt I gave

**Task 2:**

Add destination selection functionality.
When a user clicks a destination in `DestinationList.jsx`:
- Set the selected destination in state.
- Pass the selected destination to `DestinationDetails.jsx`.
- Display full details: image, description, vibe, activities, region, population.
- Update the details panel when a different destination is selected.
Keep using only local data from `destinations.js`.

**Continue Task 2:**

Complete the destination selection feature.
Make sure clicking a destination updates `selectedDestination`,
and `DestinationDetails.jsx` displays all fields:
image, description, vibe, activities, region, population.
Ensure the details update when selecting a different destination.
Use only local data.

### Agent did

- Added `selectedDestination` state
- Added click handlers to each destination
- Passed selected destination to `DestinationDetails.jsx`
- Displayed full details for each destination

### I checked

- Clicking a destination updates the details correctly
