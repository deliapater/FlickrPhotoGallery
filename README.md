# Photo Gallery

This project was bootstrapped with React using [Flickr API](https://www.flickr.com/) to allow users searching for photos with specific words.

The app shows the results of the search in an infinite scroll list where each cell contains a photo, title, author name and tags.

When tapping on a cell the user of the app can see the full screen photo and its
details.


## Set up

Install dependencies

`npm install`

Acquire a Flickr API key.

**Note: only run this locally. Don't expose your Flickr API key somewhere else.**

## Development

Run `REACT_APP_FLICKR_API_KEY=your-key-here npm run start`.

## Build / production mode

Run `REACT_APP_FLICKR_API_KEY=your-key-here npm run build`.

Builds the app for production to the build folder.

To quickly serve this on a local server (requires recent node LTS)

```
npm install -g serve
serve -s build
```
