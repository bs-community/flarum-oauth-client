import app from 'flarum/admin/app'

app.initializers.add('blessing-oauth-client', () => {
  app.extensionData
    .for('blessing-oauth-client')
    .registerSetting({
      label: app.translator.trans(
        'blessing-oauth-client.admin.popup.field.base-url'
      ),
      setting: 'blessing-oauth-client.base_url',
      type: 'text',
      placeholder: 'https://example.com/',
    })
    .registerSetting({
      label: app.translator.trans(
        'blessing-oauth-client.admin.popup.field.app-id'
      ),
      setting: 'blessing-oauth-client.app_id',
      type: 'text',
      placeholder: '123',
    })
    .registerSetting({
      label: app.translator.trans(
        'blessing-oauth-client.admin.popup.field.app-secret'
      ),
      setting: 'blessing-oauth-client.app_secret',
      type: 'text',
      placeholder: 'abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ',
    })
    .registerSetting({
      label: app.translator.trans(
        'blessing-oauth-client.admin.popup.field.button-title'
      ),
      setting: 'blessing-oauth-client.button_title',
      type: 'text',
      placeholder: app.translator.trans(
        'blessing-oauth-client.admin.popup.field.button-title-placeholder'
      ),
    })
    .registerSetting({
      label: app.translator.trans(
        'blessing-oauth-client.admin.popup.field.button-icon'
      ),
      setting: 'blessing-oauth-client.button_icon',
      type: 'text',
      placeholder: 'far fa-id-card',
    })
})
