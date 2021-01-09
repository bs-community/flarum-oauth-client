<?php

namespace Blessing\Flarum;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Routes('forum'))
        ->get('/auth/blessing', 'auth.blessing', Controllers\PassportController::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->mutate(Extenders\ForumAttributes::class),
];
