Stream React Native Activity Feed Components
============================================

### Installation

```bash
npm i @stream-io/react-native
```

### Usage

#### Setup StreamApp component

In order to use Stream React Components in your application, you first need to initialize the `StreamApp` component. `StreamApp` holds your application config and acts as a service/data provider.

```jsx
<StreamApp
  apiKey="{API_KEY}"
  appId="{APP_ID}"
  userId="{USER_ID}"
  token="{TOKEN}"
  analyticsToken="{ANALYTICS_TOKEN}"
>
// everything from your application interacting with Stream should be nested here
</StreamApp>
```
1. **API_KEY** your Stream application API_KEY
2. **API_ID** your Stream application ID
3. **USER_ID** current user's ID
4. **TOKEN** the authentication token for current user
5. **ANALYTICS_TOKEN** [optional] the Analytics auth token

You can find your `API_KEY` and `APP_ID` on Stream's dashboard.

##### Generating user token

The authentication user token cannot be generated client-side (that would require sharing your API secret). You should provision a user token as part of the sign-up / login flow to your application from your backend.

```js
var client = stream.connect(API_KEY, API_SECRET);
var userToken = client.createUserSessionToken(userId);
```

##### Generating analytics token

React components have analytics instrumentation built-in, this simplifies the integration with Stream. In order to enable analytics tracking, you need to initialize `StreamApp` with a valid analytics token. You can generate this server-side as well.

```js
var client = stream.connect(API_KEY, API_SECRET);
var userToken = client.getAnalyticsToken();
```

#### Navigation

The components bundled in this library assume that you are using [react-navigation](https://facebook.github.io/react-native/docs/navigation#react-navigation) for navigation; when reading docs and examples you should expect `props.navigation` to refer it.

#### Flat feed component

The `FlatFeed` component allows you to read a feed using Stream APIs and takes care of rendering the activities.

```jsx
<FlatFeed
  feedGroup=feedGroup                 // the feed group to read (eg. "flat")
  userId=userId                       // the ID of the user (optional, defaults to StreamApp's userId)
  navigation={this.props.navigation}  // your navigation instance
  ActivityComponent={Activity}        // the activity component to use (optional, defaults to Activity)
/>
```

##### Customizing Activities

This library comes with an `Activity` component; in most cases you will have to make some changes to how activities are rendered. All components rendering activities have a `ActivityComponent` property.

##### Adding activities

**TODO**: explain how to add an activity to a feed

#### Follow button component

**TODO**: follow toggle button component

#### Notification feeds

##### Notification status

**TODO**: how to add the bell component

##### Notification feed

**TODO**: how to render notification feeds

#### Likes

Both Stream API and the React Native library support adding likes to your feeds. This is the functionality that comes out-of-the-box:

1. Allow activities to be liked/unliked
2. Show like count per activity
3. Show the list of users that liked an activity
4. Like button component is initialized according to current user's like state ("did I like this?")

Likes are added via composition to your `Activity` component.

```jsx
/
```

#### Comments

**TODO**: render comments with activities

#### Custom reactions

Likes and Comments are just a very common use case that come bundled with components; Stream APIs allows you to create any kind of reaction to users' activities (eg. share, clap, upvote, ...).

More information about how Reaction APIs work is available [here](https://getstream.io/docs/#reactions_activities).

### Copyright and License Information

Copyright (c) 2015-2018 Stream.io Inc, and individual contributors. All rights reserved.

See the file "LICENSE" for information on the history of this software, terms & conditions for usage, and a DISCLAIMER OF ALL WARRANTIES.
