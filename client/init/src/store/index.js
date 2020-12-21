import Vue from "vue"
import Vuex from "vuex"
import modulerq from "./modulerq.js"
import modulews from "./modulews.js"
import modulewz from "./modulewz.js"
import moduleyr from "./moduleyr.js"
import modulezm from "./modulezm.js"
Vue.use(Vuex)





var store = new Vuex.Store({
	modules:{
		rq:modulerq,
		ws:modulews,
		wz:modulewz,
		yr:moduleyr,
		zm:modulezm,
		
	}
})

export default store