import { extend } from 'flarum/extend'
import app from 'flarum/app'
import PassportSettingsModal from './components/PassportSettingsModal'

app.initializers.add('blessing-auth', (app) => {
  app.extensionSettings['blessing-auth'] = () =>
    app.modal.show(new PassportSettingsModal())
})
