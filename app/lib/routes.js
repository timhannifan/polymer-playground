Router.route('/', {
  name: 'Home'
});

Router.route('/overlay', {
  name: 'overlay'
});

Router.route('/posts', {
  controller: 'PostController',
  action: 'index'
});

Router.route('/posts/:_id', {
  controller: 'PostController',
  action: 'show'
});

if (Meteor.isClient) {
  ApplicationController = RouteController.extend({
    layoutTemplate: 'AppLayout',

    onBeforeAction: function () {
      console.log('app before hook!');
      this.next();
    },

    // action: function () {
    //   console.log('this should be overridden!');
    // }
  });

  HomeController = ApplicationController.extend({
    action: function () {
      this.render('Home');
    }
  });

  PostController = ApplicationController.extend({
    show: function () {
      this.render('PostShow');
    },

    index: function () {
      this.render('PostIndex');
    }
  });
}

























// // Router.configure({
// //   // layoutTemplate: 'globalLayout',
// //   loadingTemplate: 'loading',
// //   not_foundTemplate: 'notFound',
// //   // waitOn: function () {
// //   // }
// // });
// // Router.route('/post/:_id', {
// //   // The name of the route.
// //   // Used to reference the route in path helpers and to find a default template
// //   // for the route if none is provided in the "template" option. If no name is
// //   // provided, the router guesses a name based on the path '/post/:_id'
// //   name: 'post.show',

// Router.map(function(){
//     this.route('homeDrawer', {
//       path: '/',
//       layoutTemplate: 'globalLayout'
//       // data: function() {	
//       // },
//     });

//     this.route('homeScrollHeader', {
//       path: '/home-scroll-header',
//       layoutTemplate: 'globalLayout'
//       // data: function() {	
//       // },
//     });
// });