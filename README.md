🔐 Session-based auth
In simple words, session-based authentication uses a special code(session id) stored on your device to remember who you are when you visit a website, keeping you logged in and remembering your information until you leave or log out. Didn’t get it? Don’t worry, let’s take a look step by step.

1. User Login:
Users log in by sending their email and password to the server through a special request.

2. Checking Details:
The server checks if the provided details match what's stored for the user.

3. Creating a Session:
If everything is correct, the server makes a 'session' that holds user info (like user ID, permissions, and time limits). This info is kept safe in the server's storage. Exam or can also be managed using libraries such as express-session.

4. Getting a Session ID:
The server sends this 'session ID' back to the user's device, usually as a cookie in the response.

5. Using the Session ID:
Whenever the user wants something from the server, their device automatically includes this session ID in its requests.

6. Server Checks:
The server uses this session ID to find the stored information about the session user in the session storage.

Here’s a sneak peek at how express-session works:

When the user logs in, the server creates a session for that user and sets a cookie🍪 in the response containing the session ID.

The browser automatically includes this session ID cookie🍪 in subsequent requests to the server.

When the server receives a request, express-session middleware uses the session ID from the cookie🍪 to retrieve the relevant session data.

The data stored in req.session (such as userId) becomes available to handle the request.

7. Access Granted:
If everything matches up, the server knows the user is genuine and responds to them with access to what they asked for.
