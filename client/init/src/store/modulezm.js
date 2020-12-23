const modulezm = {
    namespaced: true,//局部命名空间(让state的中变量与其他模块中的同名变量不冲突)	
    state: { msg:"pull_down_none" },
    mutations: { change(state,n){state.msg=n} },
    actions: { change(context,n){context.commit("change",n)} },
    getters: { x(state){return state.msg} }
  }
  
  export default modulezm