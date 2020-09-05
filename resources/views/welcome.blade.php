<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vuex Todo</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <script src="https://kit.fontawesome.com/e1904f39aa.js" crossorigin="anonymous"></script>
        
    </head>
    <body>
      <div id="app">
          <app-component></app-component>
      </div>  
      <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
