'use strict';

angular.module('ccApp', [])
    .constant('Config', {
      apiBase: window.apiBase
    })
    .config([
      '$httpProvider', function ($provider) {
        $provider.defaults.headers.common['X-CSRFToken'] = $('input[name=csrfmiddlewaretoken]').val();
        $provider.defaults.withCredentials = true;
      }
    ])
    .config([
      '$interpolateProvider', function (interpolateProvider) {
        interpolateProvider.startSymbol('[[').endSymbol(']]');
      }
    ])
    .component('userAuth', {
      template: `
<li class="hero" ng-if="!$ctrl.isAuthenticated">
  <a ng-href="{{ $ctrl.apiBase }}/account/register/">GO PRO</a>
</li>
<li ng-if="!$ctrl.isAuthenticated">
  <a ng-href="{{ $ctrl.apiBase }}/account/login/">Login</a>
</li>
<li class="hero" ng-if="$ctrl.isAuthenticated">
  <a ng-href="{{ $ctrl.apiBase }}/account/settings/">Account →</a>
</li>
`,

      // The controller that handles our component logic
      controller: function ($http, Config) {
        let self = this;
        self.isAuthenticated = false;
        self.apiBase = Config.apiBase;
        $http({
          method: 'GET',
          url   : Config.apiBase + '/api/v1/users/'
        }).then(function successCallback(response) {
          console.log(response);
          self.isAuthenticated = true;
        }, function errorCallback(response) {
          console.error(response);
        });
      }
    })
    .component('ccVideo', {
      template  : `
<div class="jumbotron video-subscribe-loading-cta"
     ng-show="$ctrl.state === 'checking'">
  <img src="/assets/images/site/rolling.svg">
</div>
<div class="jumbotron text-center video-subscribe-cta" ng-show="$ctrl.state === 'denied'">
  <div class="container">
    <h2>Tired of reading? Buy the video course instead</h2>
    <p class="small">Click to find out more info and purchase the associated video course..</p>
    <a class="btn btn-danger btn-lg"
        target="_blank"
        href="http://academy.codecraft.tv/p/angular"
      role="button">Watch NOW!
    </a>
    <p class="small m-t-20">
    </p>
  </div>
</div>
<div class='embed-container'
     ng-show="$ctrl.state === 'permissioned'">
  <div id="video-player"></div>
</div>
`,
      // The controller that handles our component logic
      controller: function ($http, Config) {
        let ctrl = this;
        console.log(ctrl);
        ctrl.state = 'checking';
        ctrl.video = {};
        ctrl.apiBase = Config.apiBase;

        ctrl.checkAndLoad = function () {
          $http({
            method: 'GET',
            url   : Config.apiBase + '/api/v1/videos/' + ctrl.uuid + '/'
          }).then(function successCallback(response) {
            console.log(response);
            ctrl.video = response.data;
            let options = {
              id   : ctrl.video.videoId,
              title: false
            };

            let player = new Vimeo.Player('video-player', options);
            player.on('play', function () {
              console.log('played the video!');
            });
            ctrl.state = 'permissioned';
          }).catch(function errorCallback(response) {
            console.error(response);
            ctrl.state = 'denied';
          });
        };
        ctrl.$onInit = function () {
          ctrl.checkAndLoad();
        }
      },
      bindings  : {
        uuid: "@"
      }
    });

