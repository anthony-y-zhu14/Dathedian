import React, { FC } from 'react'
import {
  Box,
  Toolbar,
  FormControlLabel,
  FormGroup,
  Switch
} from '@mui/material'
import { AppBar, Container, Typography } from '@mikoshi/core-components'
import NavTabs from 'components/nav-bar/nav-tabs/component'
import { RouteData } from 'types/route'
import { Theme } from 'types/theme'

interface NavBarProps {
  routes: Array<RouteData>,
  theme?: Theme,
  onRouteChange: (route: string) => void,
  onThemeChange: (theme: Theme) => void
  currentRoute?: string
}

export const NavBar: FC<NavBarProps> = (props) => {
  // == Props ================================
  const { routes, currentRoute, onRouteChange, onThemeChange, theme } = props
  const AUTHOR_NAME = 'Anthony Y. Zhu'

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================
  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    onThemeChange(checked ? 'dark' : 'light')
  }

  // == Template =============================
  return (
    <AppBar color='primary' position='sticky' >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h6' sx={{ mr: 2, display: { xs: 'none', sm: 'block', md: 'block' } }}>
            {AUTHOR_NAME}
          </Typography>
          <Box sx={ { flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <NavTabs routes={routes} currentRoute={currentRoute} onRouteChange={onRouteChange} />
          </Box>
          <FormGroup>
            <FormControlLabel control={<Switch checked={theme === 'dark'} onChange={handleDarkModeToggle}/>} label="Dark Mode"/>
          </FormGroup>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
