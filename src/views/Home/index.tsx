import * as React from 'react'
import { observer, PropTypes } from 'mobx-react'

import { Store } from '../../store/index'

import './index.scss'

interface IContext {
  mobxStores: {
    store: Store
  }
}

@observer
class Home extends React.Component<any> {
  static contextTypes = {
    mobxStores: PropTypes.objectOrObservableObject
  }

  public context: IContext

  public state = {
    username: '',
    password: ''
  }

  constructor(props: any) {
    super(props)
  }

  aaa = () => {
    this.props.history.push('/Test')
  }

  public render() {
    return (
      <div className="home" onClick={this.aaa}>
        home
      </div>
    )
  }
}

export default Home
