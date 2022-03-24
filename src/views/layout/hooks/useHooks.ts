// import { getCurrentInstance,ComponentInternalInstance } from "vue";

// export  function useCurrentInstance(){
//  const {appContext} = getCurrentInstance() as ComponentInternalInstance
//  const globalProperties = appContext.config.globalProperties
//  return {
//     globalProperties
//  }
// }
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { watch } from "vue"


export function useNav(){
   const store = useStore()
   const route = useRoute()
   const routerList = ['/home','/news','/books','/activity']
   watch(
      () => route.path,
      () => {
         if(routerList.indexOf(route.path)>=0){
            store.dispatch('scroll/asyncChangeHiddenNav',false)
            return
         }
         store.dispatch('scroll/asyncChangeHiddenNav',true)
         return
      },
      { immediate: true, deep: true }
   )
   
}


export function setRouter(){
   const store = useStore()
   const route = useRoute()
   store.dispatch("router/changeRoute", route.matched)
   watch(
      () => route.path,
      () => {
         store.dispatch("router/changeActive", route.path)
      },
      { immediate: true, deep: true }
   )
}

