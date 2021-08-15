<?php

namespace Blessing\Flarum\Extenders;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributes
{
    /**
     * @var Translator
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(Translator $translator, SettingsRepositoryInterface $settings)
    {
        $this->translator = $translator;
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $attributes['blessing-oauth-client.loginTitle'] =
            $this->settings->get('blessing-oauth-client.button_title') ?: $this->translator->trans('blessing-oauth-client.api.default-login-button-title');
        $attributes['blessing-oauth-client.loginIcon'] =
            $this->settings->get('blessing-oauth-client.button_icon') ?: 'far fa-id-card';

        return $attributes;
    }
}
