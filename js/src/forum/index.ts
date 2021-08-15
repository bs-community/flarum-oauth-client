import { extend } from 'flarum/common/extend'
import app from 'flarum/forum/app'
import LogInButtons from 'flarum/forum/components/LogInButtons'
import LogInButton from 'flarum/forum/components/LogInButton'
import type ItemList from 'flarum/common/utils/ItemList'

app.initializers.add('blessing-oauth-client', () => {
  extend(LogInButtons.prototype, 'items', (items: ItemList) => {
    items.add(
      'blessing-oauth-client',
      LogInButton.component(
        {
          className: 'Button LogInButton--blessing',
          icon: app.forum.attribute('blessing-oauth-client.loginIcon'),
          path: '/auth/blessing',
        },
        app.forum.attribute('blessing-oauth-client.loginTitle')
      )
    )
  })
})
