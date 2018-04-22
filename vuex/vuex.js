import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      mdShow:false,
      userStates:1,
      cartCount: 0,
      nickName:'',
      checkList:[],
      toBackEndCheckList:[],
      totalPrice:0,
      isLogin:false,
      userId:''
    },
    mutations: {
      updateMdShow:(state,mdShow)=>{state.mdShow=mdShow},
      updateUserId:(state,userId)=>{state.userId=userId},
      updateUserStates:(state,userStates)=>{state.userStates=userStates},
      updateIsLogin:(state,isLogin)=>{state.isLogin=isLogin},
      updateTotalPrice:(state,totalPrice)=>{state.totalPrice=totalPrice},
      updateToBackendCheckList:(state,toBackEndCheckList)=>{state.toBackEndCheckList=toBackEndCheckList},
      updateCheckList:(state,checkList)=>{state.checkList=checkList},
        updateUserInfo: (state,nickName) => {state.nickName=nickName},
      updateCartCount: (state,cartCount) => {state.cartCount=cartCount},
    }
  });
export default store;