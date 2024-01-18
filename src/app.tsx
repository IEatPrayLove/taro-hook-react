import { Component, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import dva from './dva'
import models from './model'
// import configStore from './store'

import './app.scss'

// const store = configStore()

const dvaApp = dva.createApp({
  initialState:{},
  models,
})
const store = dvaApp.getStore()
class App extends Component<PropsWithChildren> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App