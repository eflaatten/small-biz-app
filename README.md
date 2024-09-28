# 🏪 Small Business App

## 🔑 Test User Credentials

For testing purposes, you can use the following credentials:

| Username | Password    |
|----------|-------------|
| admin    | admin@12345 |

## 🗺️ Google Maps API Key

To use the map functionality, you need to set up a Google Maps API key. Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Navigate to the **APIs & Services** > **Credentials**.
4. Click on **Create credentials** and select **API key**.
5. Copy the generated API key.

### Setting Up the API Key

1. Create a `.env` file in the root directory of the project.
2. Add the following line to the `.env` file:

    ```env
    REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
    ```

3. Replace `your_api_key_here` with the API key you copied.

By following these steps, you ensure that the API key is not committed to the repository and can be set up individually by each developer.


