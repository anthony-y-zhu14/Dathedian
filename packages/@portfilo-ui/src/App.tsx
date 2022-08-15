import React, { useState } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Scroll } from '@mikoshi/core-components'
import { NavBar } from 'components/nav-bar/component'
import ParticlesBackground from 'components/particle-effect/component'
import { Projects } from 'pages/projects/page'
import { Dashboard } from 'pages/dashboard/page'
import { ROUTE } from 'constants/route'
import { getCurrentRoute } from 'utils'
import { Theme } from 'types/theme'


export const App = () => {
  // == Props ================================
  const { HOME, PROJECTS } = ROUTE

  // == Hooks ================================
  const [route, setRoute] = useState(getCurrentRoute() ?? ROUTE.HOME.route)
  const [theme, setTheme] = useState('light' as Theme)

  // == Functions ============================

  // == Actions ==============================
  const onRouteChange = (newRoute: string) => setRoute(newRoute)
  const onThemeChange = (newTheme: Theme) => setTheme(newTheme)

  // == Template =============================
  return (
    <div className='app' data-theme={theme}>
      <Router>
        <NavBar
          routes={[HOME, PROJECTS]}
          currentRoute={route}
          onRouteChange={onRouteChange}
          onThemeChange={onThemeChange}
          theme={theme}
          sx={{
            zoom: { xs: '40%', sm: '60%', md: '80%', lg: '100%' }
          }}
        />
        <ParticlesBackground />
        <Scroll className='outlet'>
          <Routes>
            <Route path='/' element={<Navigate replace to={ROUTE.HOME.route} />} />
            <Route path={ROUTE.HOME.route} element={<Dashboard onRouteChange={onRouteChange} />} />
            <Route path={ROUTE.PROJECTS.route} element={<Projects />} />
          </Routes>
        </Scroll>
      </Router>
    </div>
  )
}
