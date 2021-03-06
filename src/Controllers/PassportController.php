<?php

namespace Blessing\Flarum\Controllers;

use Blessing\Flarum\Providers\PassportProvider;
use Exception;
use Flarum\Forum\Auth\Registration;
use Flarum\Forum\Auth\ResponseFactory;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\RedirectResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class PassportController implements RequestHandlerInterface
{
    protected $settings;
    protected $response;
    protected $url;

    public function __construct(ResponseFactory $response, SettingsRepositoryInterface $settings, UrlGenerator $url)
    {
        $this->response = $response;
        $this->settings = $settings;
        $this->url = $url;
    }

    protected function getProvider($redirectUri)
    {
        return new PassportProvider([
            'clientId' => $this->settings->get('blessing-oauth-client.app_id'),
            'clientSecret' => $this->settings->get('blessing-oauth-client.app_secret'),
            'redirectUri' => $redirectUri,
            'settings' => $this->settings,
        ]);
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $redirectUri = $this->url->to('forum')->route('auth.blessing');

        $provider = $this->getProvider($redirectUri);

        $session = $request->getAttribute('session');
        $queryParams = $request->getQueryParams();

        if ($error = Arr::get($queryParams, 'error')) {
            $hint = Arr::get($queryParams, 'hint');

            throw new Exception("$error: $hint");
        }

        $code = Arr::get($queryParams, 'code');

        if (!$code) {
            $authUrl = $provider->getAuthorizationUrl(['scope' => '']);
            $session->put('oauth2state', $provider->getState());

            return new RedirectResponse($authUrl);
        }

        $state = Arr::get($queryParams, 'state');

        if (!$state || $state !== $session->get('oauth2state')) {
            $session->remove('oauth2state');
            throw new Exception('Invalid state');
        }

        $token = $provider->getAccessToken('authorization_code', compact('code'));
        $user = $provider->getResourceOwner($token);

        $response = $this->response->make(
            'blessing', $user->getId(),
            function (Registration $registration) use ($user) {
                $registration
                    ->provideTrustedEmail($user->getEmail())
                    ->suggestUsername($user->getName())
                    ->setPayload($user->toArray());
            }
        );

        return $response;
    }
}
