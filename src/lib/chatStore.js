import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useChatStore = create((set) => ({
  chatId: null,
  user:null,
  isCurrentUserBlocked:false,
  isReceiverBlocked:false,
  changeChat: (chatId,user)=>{
    const currentUser = useUserStore.getState().currentUser

    if(user.blocked.includes(currentUser.id)){
      return set({
        chatId,
        user:null,
        isCurrentUserBlocked:true,
        isReceiverBlocked:false,
      });
    }
    
    else if(currentUser.blocked.includes(user.id)){
      return set({
        chatId,
        user:user,
        isCurrentUserBlocked:false,
        isReceiverBlocked:true,
      });
    }
    
    else{
    return set({
      chatId,
      user,
      isCurrentUserBlocked:false,
      isReceiverBlocked:false,
    });
    }
  },
    changeBlock: ()=>{
      set(state=>({...state,isReceiverBlocked: !state.isReceiverBlocked }))
    },
  
}));  