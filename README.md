# tdc2018-buffers-streams
Examples of buffers / streams used in TDC2018 - Floripa

## Running Examples

```javascript
npm install
```

There are 2 different examples in this repo:

### Client / Server file upload
This is an example of [Readable](https://nodejs.org/api/stream.html#stream_readable_streams) and [Writable](https://nodejs.org/api/stream.html#stream_writable_streams) streams that reads a `file.txt` and uploads it via TCP to a server running on `localhost:3000`.

In order to see it, run the following in one console:

```javascript
node server.js
```

And run the following command in another console:
```javascript
node client.js
```


### Transform streams
This is an example of [transform streams](https://nodejs.org/api/stream.html#stream_class_stream_transform) that reads the user input from the console and transforms it to upper case. In order to see it, run the following command:

```javascript
node transform-stream.js
```