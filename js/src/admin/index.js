import app from 'flarum/app';
import { settings } from '@fof-components';

const {
    SettingsModal,
    items: { StringItem },
} = settings;

app.initializers.add('blessing-oauth-client', app => {
    app.extensionSettings['blessing-oauth-client'] = () => app.modal.show(
        SettingsModal, {
            title: app.translator.trans('blessing-oauth-client.admin.popup.title'),
            type: 'medium',
            items: s => [
                <StringItem setting={s} name='blessing-oauth-client.base_url' placeholder='https://example.com/'>
                    {app.translator.trans('blessing-oauth-client.admin.popup.field.base-url')}
                </StringItem>,
                <StringItem setting={s} name='blessing-oauth-client.app_id' placeholder='123'>
                    {app.translator.trans('blessing-oauth-client.admin.popup.field.app-id')}
                </StringItem>,
                <StringItem setting={s} name='blessing-oauth-client.app_secret' placeholder='abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ'>
                    {app.translator.trans('blessing-oauth-client.admin.popup.field.app-secret')}
                </StringItem>,
                <StringItem setting={s} name='blessing-oauth-client.button_title' placeholder={app.translator.trans('blessing-oauth-client.admin.popup.field.button-title-placeholder')}>
                    {app.translator.trans('blessing-oauth-client.admin.popup.field.button-title')}
                </StringItem>,
                <StringItem setting={s} name='blessing-oauth-client.button_icon' placeholder='far fa-id-card'>
                    {app.translator.trans('blessing-oauth-client.admin.popup.field.button-icon')}
                </StringItem>
            ]
        }
    );
});
