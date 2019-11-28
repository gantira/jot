<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Contact;
use Faker\Generator as Faker;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'user_id' => factory(App\User::class)->create(),
        'name' => $faker->name,
        'email' => $faker->email,
        'birthday' => $faker->date,
        'company' => $faker->company,
    ];
});
