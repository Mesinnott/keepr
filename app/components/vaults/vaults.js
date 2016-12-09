; (function () {
  angular.module('keepr')
    .component('vaultsComponent', {
      templateUrl: 'app/components/vaults/vaults.html',
      controller: VaultsController
    })


  function VaultsController(Models, AuthService) {
    var vc = this
    // var db = DSFirebaseAdapter.ref
    vc.myVaults = ['']


    //  function update() {
    //         $scope.$evalAsync();
    //     }


    vc.member = AuthService.getMember()

    vc.user = AuthService.getAuth()




    // vc.addVault = function(vault){
    //   title = vault.title
    //   firebase.database().ref()('vaults/'+vc.user.uid+"/"+title).set({
    //     title: vault.title,
    //     decription:vault.description,
    //     user: vc.user.name,
    //     id: vc.user.uid,
    //     myName: "mikey"
    //   })

    // }



    // vc.addVault = function (vault) {
    //   // 
    //   vault.myName = "mikey"
    //   vault.userId = vc.user.uid
    //   vault.keeps = []
    //   Models.Vaults.create(vault)

    //   // Models.Vaults.save()

    //   // Models.Vaults.update()

    //   console.log('success')
    //   console.log(vault)
    //   debugger

    //   vc.newVault = null

    //   vc.getVaults()
    // }



    // vc.addVault = function (newVault) {
    //   debugger
    //   vc.member.vaults = vc.member.vaults || []
    //   vc.member.vaults.push(newVault)
    //   console.log(vc.member.vaults)
    //   vc.newVault = null
    // }
    //   User.save(vc.member.id)



    // vc.myVaults = vc.member.vaults

    vc.getVaults = function () {
      // debugger
      Models.Vaults.findAll({ myName: "mikey" }).then(function (myVaults) {
        vc.myVaults = myVaults
      })
      console.log('myVaults')
      console.log(vc.myVaults)
    }

    vc.getVaults()




  }
} ())
