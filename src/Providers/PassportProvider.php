<?php

namespace Blessing\Flarum\Providers;

use Blessing\Flarum\Events\ParsingResourceOwner;
use Blessing\Flarum\ResourceOwner;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Str;
use League\OAuth2\Client\Provider\AbstractProvider;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Tool\BearerAuthorizationTrait;
use Psr\Http\Message\ResponseInterface;

class PassportProvider extends AbstractProvider
{
    use BearerAuthorizationTrait;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * Returns the base URL for authorizing a client.
     *
     * Eg. https://oauth.service.com/authorize
     *
     * @return string
     */
    public function getBaseAuthorizationUrl()
    {
        $baseUrl = $this->settings->get('blessing-oauth-client.base_url');

        return Str::finish($baseUrl, '/').'oauth/authorize';
    }

    /**
     * Returns the base URL for requesting an access token.
     *
     * Eg. https://oauth.service.com/token
     *
     * @return string
     */
    public function getBaseAccessTokenUrl(array $params)
    {
        $baseUrl = $this->settings->get('blessing-oauth-client.base_url');

        return Str::finish($baseUrl, '/').'oauth/token';
    }

    /**
     * Returns the URL for requesting the resource owner's details.
     *
     * @return string
     */
    public function getResourceOwnerDetailsUrl(AccessToken $token)
    {
        $baseUrl = $this->settings->get('blessing-oauth-client.base_url');

        return Str::finish($baseUrl, '/').'api/user';
    }

    /**
     * Returns the default scopes used by this provider.
     *
     * This should only be the scopes that are required to request the details
     * of the resource owner, rather than all the available scopes.
     *
     * @return array
     */
    protected function getDefaultScopes()
    {
        return [];
    }

    /**
     * Checks a provider response for errors.
     *
     * @throws IdentityProviderException
     *
     * @param array|string $data Parsed response data
     *
     * @return void
     */
    protected function checkResponse(ResponseInterface $response, $data)
    {
    }

    /**
     * Generates a resource owner object from a successful resource owner
     * details request.
     *
     * @return ResourceOwnerInterface
     */
    protected function createResourceOwner(array $response, AccessToken $token)
    {
        resolve(Dispatcher::class)->dispatch(new ParsingResourceOwner($response));

        return new ResourceOwner($response);
    }
}
