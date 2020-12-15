import { extend } from 'flarum/extend'
import app from 'flarum/app'
import LogInButtons from 'flarum/components/LogInButtons'
import LogInButton from 'flarum/components/LogInButton'

app.initializers.add('blessing-oauth-client', () => {
    extend(LogInButtons.prototype, 'items', function (items) {
        items.add('blessing-oauth-client', LogInButton.component({
            className: 'Button LogInButton--blessing',
            icon: app.forum.attribute('blessing-oauth-client.loginIcon'),
            path: '/auth/blessing',
        }, app.forum.attribute('blessing-oauth-client.loginTitle')));
    });
});
