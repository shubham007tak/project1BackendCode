define({ "api": [
  {
    "group": "Events_to_emit",
    "type": "",
    "url": "disconnect",
    "title": "disconnect",
    "description": "<p>This event (&quot;disconnect&quot;) has to be emitted, when the user wants to disconnect.</p>",
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_emit",
    "name": "Disconnect"
  },
  {
    "group": "Events_to_emit",
    "type": "",
    "url": "notify-updates",
    "title": "notify-updates",
    "description": "<p>This event (&quot;notify-updates&quot;) has to be emitted whenever admin creates or updates a meeting. Users can only be given notification  after sending data which you have pass here. The following data has to be emitted</p>",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \n      \n        message: 'message to send',\n        userId: 'userId of the user for which meeting has been created'\n \n       \n}",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_emit",
    "name": "NotifyUpdates"
  },
  {
    "group": "Events_to_emit",
    "type": "",
    "url": "set-user",
    "title": "set-user",
    "description": "<p>This event (&quot;set-user&quot;) has to be emitted when a user comes online. User can only be set as online only after verification of authentication token. Which you have pass here. The following data has to be emitted authentication token</p>",
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_emit",
    "name": "SetUser"
  },
  {
    "group": "Events_to_listen",
    "type": "",
    "url": "disconnect",
    "title": "disconnect (optional)",
    "description": "<p>This event (&quot;disconnect&quot;) has to be listened, when the user is disconnected to show proper message.</p>",
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_listen",
    "name": "Disconnect"
  },
  {
    "group": "Events_to_listen",
    "type": "",
    "url": "error-occurred",
    "title": "error-occurred",
    "description": "<p>This event (&quot;auth-error&quot;) has to be listened to identify an error which will occur when the data is not sent properly in the events to be emitted. Example output it as follows:</p>",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \n      \n           status: 123,\n            error: 'error message'\n \n       \n}",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_listen",
    "name": "ErrorOccurred"
  },
  {
    "group": "Events_to_listen",
    "type": "",
    "url": "onlineuserlist",
    "title": "online-user-list",
    "description": "<p>This event (&quot;online-user-list&quot;) has to be listened on the user's end to identify all available users that are currently online. All available users can be shown to the user based on which user can be selected for meeting. The output will be an object, object has key as userId and value as full name.</p>",
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_listen",
    "name": "Onlineuserlist"
  },
  {
    "group": "Events_to_listen",
    "type": "",
    "url": "userId",
    "title": "userId",
    "description": "<p>This event's name is actually dynamic and refers to the userId of the logged in user. This event (&quot;userId&quot;) has to be listened to identify a meeting notification that has been received. Example output it as follows:</p>",
    "examples": [
      {
        "title": "Response:",
        "content": "{ \n      \n        message: 'message to send',\n        userId: 'userId of the user for which meeting has been created'\n}",
        "type": "object"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_listen",
    "name": "Userid"
  },
  {
    "group": "Events_to_listen",
    "type": "",
    "url": "verifyUser",
    "title": "verifyUser",
    "description": "<p>This event (&quot;verifyUser&quot;) has to be listened on the user's end to verify user authentication. user will only be set as online user after verification of authentication token.</p>",
    "version": "0.0.0",
    "filename": "routes/socketdoc.js",
    "groupTitle": "Events_to_listen",
    "name": "Verifyuser"
  }
] });
