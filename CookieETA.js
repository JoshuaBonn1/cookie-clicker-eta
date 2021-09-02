cookie_eta_mod = {
  init:function(){
    Game.registerHook('cps', function(cps){
      alert(cps)
    })
  }
}

Game.registerMod("cookie_eta_mod", cookie_eta_mod)
