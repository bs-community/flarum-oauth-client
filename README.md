# Flarum OAuth Client

This Flarum extension lets you login with Blessing Skin account.

> This extension is a fork of `fof/passport`.

## Installation

Run Composer:

```
composer require blessing/flarum-oauth-client
```

## Configuration

In the extension settings, you have to fill the following data:

Setting | Example | Description
--- | --- | ---
Blessing Skin base URL | `https://example.com/` | `<your blessing skin>/`
OAuth application id | `1` | The integer *Client ID* you've made in the Blessing Skin
OAuth application secret | `abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ` | The *Client secret* provided by Blessing Skin once you created the OAuth client
Label for login button | Login with Blessing Skin | Label to place on the login button
Icon for login button | `far fa-id-card` | FontAwesome icon to place on the login button.

**Hint:** When creating the OAuth client in Blessing Skin, don't forget to set the `redirect` value to `<your flarum install>/auth/passport`.

## License

MIT License
