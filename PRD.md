# PRD: City Travel Inspiration

## 1. One-sentence pitch
A simple city guide that helps young travelers and students browse destinations and quickly discover what each place is like.

## 2. Who it is for
Young travelers and students looking for inspiration and quick information about cities they may want to visit.

## 3. Screens (list, details)
- **List:** Show each city’s name, country, and a small image. Selecting a city opens its details.
- **Details:** Show a larger image, short description, app-defined vibe and activities, plus country, region, and population.

## 4. Must-have features
- Browse a list of cities.
- Select a city to view its details.
- Load the city description and image from Wikimedia.
- Show country, region, population, vibe, and activities from app-defined data.

## 5. Acceptance criteria
When I open the app, I see a list of cities with each city’s name, country, and a small image.
When I select a city, I see its image, description, vibe, activities, country, region, and population.
When Wikimedia provides a summary for a city, I see its short description and image in that city’s details.
When a city has no Wikimedia summary or image, I still see its app-defined city details.

## 6. Not now (ideas for later)
- Search or filter cities.
- Save favorite destinations.
- Add travel planning, maps, or live weather.

## 7. Data: the API URL and the fields we use
- **API:** Wikimedia REST API, English Wikipedia page summary: `https://en.wikipedia.org/api/rest_v1/page/summary/{city_title}` (replace `{city_title}` with the city’s Wikipedia page title, URL-encoded). No API key is required.
- **API fields:** `title` (city name), `extract` (short description), and `thumbnail.source` (image URL).
- **App-defined fields:** `country`, `region`, `population`, `vibe`, and `activities`.
