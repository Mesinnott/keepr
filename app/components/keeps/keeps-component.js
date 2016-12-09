;(function () {
  angular.module('keepr')
    .component('keepsComponent', {
      templateUrl: 'app/components/keeps/keeps.html',
      controller: KeepsController
    })

  function KeepsController (Models) {
    var kc = this
    kc.keeps=[]

    Models.Keeps.findAll({}).then(function (keeps) {
      // kc.keeps = keeps
      for(var i=0; i<keeps.length; i++){
        if(keeps[i].public==true){
          kc.keeps.push(keeps[i])
        }
      }
    })

  }
}())
