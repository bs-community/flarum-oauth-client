import { extend } from 'flarum/extend'
import app from 'flarum/app'
import BlessingAuthSettingsModal from './components/BlessingAuthSettingsModal'

app.initializers.add('blessing-auth', (app) => {
  app.extensionSettings['blessing-auth'] = () =>
    app.modal.show(new BlessingAuthSettingsModal())
})
