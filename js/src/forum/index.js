import { extend } from 'flarum/extend'
import app from 'flarum/app'
import LogInButtons from 'flarum/components/LogInButtons'
import LogInButton from 'flarum/components/LogInButton'

app.initializers.add('blessing-auth', () => {
  extend(LogInButtons.prototype, 'items', function (items) {
    items.add(
      'blessing-auth',
      <LogInButton
        className="Button LogInButton--passport"
        icon={app.forum.attribute('blessing-auth.loginIcon')}
        path="/auth/blessing"
      >
        {app.forum.attribute('blessing-auth.loginTitle')}
      </LogInButton>
    )
  })
})
