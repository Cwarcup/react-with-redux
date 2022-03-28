# Twitch Clone

OBS:
  - produce video feed
  - send video to Real Time Messaging Protocol (RTMP) Server

RTMP Server:
  - sends data to web server that knows which streams are currently broadcasting.
  - utilize mystreams.com/stream
  - Sends data to viewers browser.

# Challenges
 - Authentication in React with **Google OAuth**.
 - Need to be able to navigate around to separate pages in our application.
   - Will use **react-router**.
 - Handle **forms** with Redux.
 - **CRUD operations** in React/Redux (create, read, update, destroy).

---

Viewers Browser:
  - request to get video feed from RTMP server.

Main Landing Page:
  - Streams: stream name and description. Links to stream with video feed.

Stream:
  - displays video from user
  - has description

Users can create multiple streaming channels.

User is not logged in:
  - user can views a list of streams and channels.
  - user can view a video for a single stream.

User IS logged in:
  - user can create a new stream.
  - can edit stream that they created.
  - can delete a stream they created.