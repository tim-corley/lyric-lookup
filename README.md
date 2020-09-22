# Lyric Lookup React App

### Explore the Context API

```
$ git clone
$ npm install
$ npm run start
```

### Source Material

- [YouTube](https://www.youtube.com/watch?v=NDEt0KdDbhk&list=PLillGF-RfqbaxgxkKgKk1XlJAVCX31xRI)
- [Code](https://github.com/bradtraversy/lyricfinder)

### 3<sup>rd</sup> Party API Call

TEST REQUEST W/ cURL (be sure token is in OS environment variables):

`curl -H "Access-Control-Request-Method: GET" -H "Origin: http://localhost" https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get\?page\=1\&page_size\=10\&country\=us\&f_has_lyrics\=1\&apikey\=$MUSIXMATCH_TOKEN | jq .`

- Using `dotenv-webpack` package in app to allow for use of environment variables. For configuration, see: https://www.npmjs.com/package/dotenv-webpack

### TODO

- incorporate animations with framer-motion
