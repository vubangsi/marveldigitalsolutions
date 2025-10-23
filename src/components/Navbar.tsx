'use client'

import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, useScrollTrigger, Slide } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        className="backdrop-blur-lg bg-dark-900/80 border-b border-white/10"
        elevation={0}
      >
        <Toolbar className="container mx-auto px-4">
          <Typography 
            variant="h6" 
            component="div" 
            className="flex-1 gradient-text font-bold text-2xl"
          >
            Marvel Digital Solutions
          </Typography>

          {/* Desktop Navigation */}
          <Box className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-indigo-400 border-b-2 border-indigo-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation Toggle */}
          <IconButton
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        {/* Mobile Navigation Menu */}
        {mobileOpen && (
          <Box className="md:hidden bg-dark-900/95 backdrop-blur-lg border-t border-white/10">
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full justify-start px-6 py-4 text-left text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </AppBar>
    </HideOnScroll>
  )
}