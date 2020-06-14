import app from 'flarum/app'
import BlessingAuthSettingsModal from './components/BlessingAuthSettingsModal'

app.initializers.add('blessing-oauth-client', (app) => {
  app.extensionSettings['blessing-oauth-client'] = () => {
    app.modal.show(new BlessingAuthSettingsModal())
  }
})
