// import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore } from 'vuex';
import { router,RouterState } from './modules/router';
import { scroll,ScrollState } from './modules/scroll';

export interface RootState{
    router:RouterState
    scroll:ScrollState
}

// export const key:InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules:{
        router,
        scroll
    }
})

export function useStore(){
    return baseUseStore<RootState>()
}