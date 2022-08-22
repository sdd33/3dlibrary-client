import React from "react"
import LoginStore from './login.store'
import LoginstateStore from '@/pages/store/loginstate.store';
import RegistStore from '@/pages/store/regist.store';
import EmailStore from '@/pages/store/email.store';

class RootStore {
  // 组合模块
  private loginStore: LoginStore;
  private loginstateStore: LoginstateStore;
  private registstore: RegistStore;
  private emailstore: EmailStore;

  constructor() {
    this.loginStore = new LoginStore()
    this.loginstateStore = new LoginstateStore()
    this.registstore = new RegistStore();
    this.emailstore = new EmailStore();
  }
}
// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)