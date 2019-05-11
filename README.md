# Photo Gallery

This project was bootstrapped with React using [Flickr API](https://www.flickr.com/) to allow users searching for photos with specific words.

The app shows the results of the search in an infinite scroll list where each cell contains a photo, title, author name and tags.

When tapping on a cell the user of the app can see the full screen photo and its
details.

## Screen Grabs

### List
<img width="1344" alt="Screenshot 2019-05-11 at 22 01 57" src="https://user-images.githubusercontent.com/45568630/57574895-aa8f0100-7438-11e9-9b71-8520f49ae3c4.png">

### Full Screen
<img width="960" alt="Screenshot 2019-05-11 at 22 02 15" src="https://user-images.githubusercontent.com/45568630/57574904-b8dd1d00-7438-11e9-9685-cf1430d6489a.png">


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
