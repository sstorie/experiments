# Experiments
This repository contains a bunch of stand alone experiments I'm using to evaluate different technologies.

## Running these experiments

Most of these experiments require just a simple http server. I use the standard [http-server](https://www.npmjs.com/package/http-server) available via npm:

```
npm install -g http-server
```

Then when inside one of the folders just run to start the server and disable all caching

```
> http-server -c-1

Starting up http-server, serving ./
Available on:
  http://10.210.116.141:8080
  http://192.168.56.1:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

You can also use [live-server](https://www.npmjs.com/package/live-server) to get similar functionality but with automatic reloading when any of your served pages changes.

## The list

Here's an overall list of what's in here:
- [reactiveui-simple-user-control](/sstorie/experiments/tree/develop/reactiveui-simple-user-control/SimpleApp) - A simple app to help understand how to build user controls with ReactiveUI and WPF
- [angular2-animated-notifications-panel](https://github.com/sstorie/experiments/tree/master/angular2-animated-notifications-panel) - Playing with Angular 2 animations to build a sliding notification panel
- [angular2-onpush-form-control](https://github.com/sstorie/experiments/tree/master/angular2-onpush-form-control) - Exploring the effect of using `OnPush` change detection when subscribing to changes in Angular's FormControl class
- [0-60-with-angular2-and-visual-studio](https://github.com/sstorie/experiments/tree/master/0-60-with-angular2-and-visual-studio/source) - An example I created to support an AngularMN meetup presentation I gave
- [angular2-redux-autologout](angular2-redux-autologout) - An exploration in using redux and rxjs to automatically log a user out after a period of inactivity
- [angular2-bootstrap-arguments](angular2-bootstrap-arguments) - A demonstration of how external data can be provided to Angular during the bootstrap process
- [angular2-multiple-applications](angular2-multiple-applications) - A simple POC that shows it's possible to bootstrap multiple Angular 2 applications on the same page
- [topshelf-angular2-service-webpack](topshelf-angular2-service-webpack) - An example showing how to host an Angular2 and WebAPI website in a Windows service using Topshelf and webpack to self-host everything
- [topshelf-angular2-service](topshelf-angular2-service) - An example showing how to host an Angular2 and WebAPI website in a Windows service using Topshelf
- [angular2-signalr](angular2-signalr) - A relatively simple SignalR server with an Angular 2 client (using a channel/event model)
- [angular2-child-injectors](angular2-child-injectors) - Exploring how angular 2 dependency injection works
- [nadel-api-gateway-ts](nadel-api-gateway-ts) - An implementation of [Ben Nadel's ApiGateway example](http://www.bennadel.com/blog/3047-creating-specialized-http-clients-in-angular-2-beta-8.htm) using typescript
- [angular2-template](angular2-template) - A vanilla template used to create new Angular2 examples
