# Design Decisions
- Simple UI components are in `src/ui`
- Smart components are in `src/components`
- BreedList and Gallery were put into separate components to make core more readable, testable and separate concerns. This was to avoid jumping straight to something as complex as a global/centralized store (e.g. Redux). 
- Simple testing of components just to showcase knowledge of popular library and appreciation for TDD

# Feedback
-- better understanding of what happens when using clicks button, then searches for and unknown dog breed but the images from the previously selected breed are still visible. It's unclear if this edge case should be handled from the designs

# Future Design Decisions
- finish off testing the smart data components
- consider a centralized data store should more components need access to the same data
- consider caching the `/breeds/list/all` using the `serviceWorker` to prevent unnecessary API calls since the data is unlikely to change from minute to minute. This would allow for a snappier first load and basic offline usage.
- consider not loading ALL images for a given breed -- maybe pagination or an infinite scroll. also consider lazing loading of the images for slower bandwidth connections
- consider debouncing user input in breed search
- consider moving data fetching state logic into a HOC so each component doesn't have to create local state to track it. This would make the code cleaner and easier to test.