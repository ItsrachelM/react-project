# Build tasks

## 1. Render the city list from local sample data
Add a small local JSON file with a few sample cities, including the name, country, and image used by each list item. Render the list from that file without making API requests.
Done when: The app shows every sample city’s name, country, and small image from the local JSON file.

## 2. Select a city to show its details
Make each list item selectable and show the selected city in the details panel. Include the image, description, vibe, activities, country, region, and population using the local sample data.
Done when: Selecting any city shows that city’s complete details, and selecting another city updates the panel.

## 3. Add clear empty and initial selection states
Show a simple prompt when no city has been selected, and keep the details panel understandable on first load.
Done when: Before selection, the details panel guides the user to choose a city; selecting a city replaces the prompt with its details.

## 4. Load city descriptions and images from Wikimedia
For each selected city, request its English Wikipedia page summary using the Wikimedia REST API and use the returned short description and thumbnail when available.
Done when: A city with a Wikimedia summary displays the API description and image in its details panel.

## 5. Preserve app-defined details when Wikimedia data is missing
Keep country, region, population, vibe, and activities sourced from the local city data, and use the local image when Wikimedia has no thumbnail.
Done when: The details panel still shows all app-defined fields and a usable image when the API response has no thumbnail.

## 6. Handle API loading and failure
Show a loading message while the selected city’s summary is being fetched, and a helpful fallback when the request fails or has no summary.
Done when: Users can distinguish a pending request from an unavailable summary and still read the city’s app-defined details.

## 7. Polish the master-detail layout
Adjust the list and details presentation for narrow and wide screens, and make selection clear to keyboard and pointer users.
Done when: The list and details remain readable on mobile and desktop, and the selected city is visibly indicated.
