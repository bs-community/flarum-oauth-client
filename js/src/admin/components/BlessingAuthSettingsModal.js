import app from 'flarum/app'
import SettingsModal from 'flarum/components/SettingsModal'

export default class BlessingAuthSettingsModal extends SettingsModal {
  title() {
    return app.translator.trans('blessing-oauth-client.admin.popup.title')
  }

  form() {
    return [
      <div className="Form-group">
        <label>
          {app.translator.trans('blessing-oauth-client.admin.popup.field.base-url')}
        </label>
        <input
          className="FormControl"
          bidi={this.setting('blessing-oauth-client.base_url')}
        ></input>
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans('blessing-oauth-client.admin.popup.field.app-id')}
        </label>
        <input
          className="FormControl"
          bidi={this.setting('blessing-oauth-client.app_id')}
        ></input>
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans('blessing-oauth-client.admin.popup.field.app-secret')}
        </label>
        <input
          className="FormControl"
          bidi={this.setting('blessing-oauth-client.app_secret')}
        ></input>
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans('blessing-oauth-client.admin.popup.field.button-title')}
        </label>
        <input
          className="FormControl"
          bidi={this.setting('blessing-oauth-client.button_title')}
        ></input>
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans('blessing-oauth-client.admin.popup.field.button-icon')}
        </label>
        <input
          className="FormControl"
          bidi={this.setting('blessing-oauth-client.button_icon')}
        ></input>
      </div>,
    ]
  }
}
