<?php

namespace App\Http\Controllers;

use App\Http\Resources\Contact;

class BirthdayController extends Controller
{
    public function index()
    {
        $contact = request()->user()->contacts()->birthday()->get();

        return Contact::collection($contact);
    }
}
