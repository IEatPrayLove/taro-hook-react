import {create} from 'dva-core'
import createLoading from "dva-loading";

let app:any
let store:any
let dispatch:any

function createApp(opt:any) {
  // redux日志
  // opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
