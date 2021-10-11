import React, { Component } from 'react'
import FrontScreen from '../components/FrontScreen'
import Header from '../components/Header'
import TheVideo from '../components/TheVideo'
/* import ProjectsHp from '../components/ProjectsHp'
 */
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <FrontScreen />
        {/* <ProjectsHp /> */}
        <TheVideo />
      </div>
    )
  }
}
