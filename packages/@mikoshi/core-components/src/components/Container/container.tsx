import React, { FC } from 'react'
import { Container as MuiContainer } from '@mui/material'

interface ContainerProps {
  maxWidth?: string,
  className?: string,
  children?: React.ReactNode
}

export const Container: FC<ContainerProps> = (props) => {
  // == Props ================================
  const {
    children,
    className = ''
  } = props
  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <MuiContainer className={`mikoshi-container ${className}`}>
      {children}
    </MuiContainer>
  )
}
