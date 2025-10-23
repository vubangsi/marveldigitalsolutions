'use client'

import React, { useState, useEffect } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  useScrollTrigger, 
  Slide,
  Paper,
  Grid,
  Divider
} from '@mui/material'
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  ArrowForward,
  Psychology,
  SmartToy,
  Insights,
  Cloud,
  Science,
  Speed,
  Security,
  Hub,
  PlayArrow
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const servicesData = {
  platforms: [
    { id: 'ceip', name: 'Cognitive Enterprise Intelligence', icon: <Psychology />, desc: 'Unified intelligence platform with knowledge graphs', href: '/services/ceip' },
    { id: 'apoa', name: 'Autonomous Process Orchestration', icon: <SmartToy />, desc: 'Collaborative AI agents for business workflows', href: '/services/apoa' },
    { id: 'miie', name: 'Multimodal Insight Engine', icon: <Insights />, desc: 'Visual, auditory, and textual understanding', href: '/services/miie' },
    { id: 'enas', name: 'Edge-Native Autonomous Systems', icon: <Cloud />, desc: 'Real-time edge AI decision-making', href: '/services/enas' },
    { id: 'qrose', name: 'Quantum-Ready Optimization', icon: <Science />, desc: 'Quantum-inspired optimization algorithms', href: '/services/qrose' },
    { id: 'naas', name: 'Neuromorphic AI Systems', icon: <Speed />, desc: 'Ultra-low-power adaptive AI solutions', href: '/services/naas' },
    { id: 'tegas', name: 'Trust & Ethics AI Suite', icon: <Security />, desc: 'Transparent and compliant AI framework', href: '/services/tegas' },
    { id: 'sil', name: 'Synthetic Intelligence Lab', icon: <Hub />, desc: 'Digital twins and synthetic data generation', href: '/services/sil' }
  ],
  solutions: [
    { name: 'Enterprise AI Strategy', desc: 'Comprehensive AI transformation roadmaps', href: '/solutions/strategy' },
    { name: 'AI Implementation', desc: 'End-to-end deployment and integration', href: '/solutions/implementation' },
    { name: 'AI Governance', desc: 'Risk management and compliance frameworks', href: '/solutions/governance' },
    { name: 'Custom AI Development', desc: 'Bespoke AI solutions for unique challenges', href: '/solutions/custom' }
  ]
}

const companyData = {
  about: [
    { name: 'Our Story', desc: 'The journey of Marvel Digital Solutions', href: '/about/story' },
    { name: 'Leadership Team', desc: 'Meet our executive and research leaders', href: '/about/team' },
    { name: 'Research & Innovation', desc: 'Cutting-edge AI research and publications', href: '/about/research' },
    { name: 'Careers', desc: 'Join our team of AI pioneers', href: '/about/careers' }
  ],
  resources: [
    { name: 'Case Studies', desc: 'Client success stories and implementations', href: '/resources/case-studies' },
    { name: 'White Papers', desc: 'In-depth research and technical insights', href: '/resources/whitepapers' },
    { name: 'AI Insights Blog', desc: 'Latest trends and thought leadership', href: '/resources/blog' },
    { name: 'Documentation', desc: 'Technical guides and API references', href: '/resources/docs' }
  ]
}

interface MegaMenuProps {
  type: 'services' | 'company'
  isOpen: boolean
  onClose: () => void
}

function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full z-50"
          onMouseLeave={onClose}
        >
          <Paper
            elevation={24}
            sx={{
              backgroundColor: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              mt: 1,
              mx: 2
            }}
          >
            <Box sx={{ p: 4 }}>
              {type === 'services' ? (
                <Grid container spacing={4}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" sx={{ color: '#6366f1', mb: 2, fontWeight: 600 }}>
                      AI Platforms
                    </Typography>
                    <Grid container spacing={2}>
                      {servicesData.platforms.map((platform) => (
                        <Grid item xs={12} sm={6} key={platform.id}>
                          <Link href={platform.href} style={{ textDecoration: 'none' }}>
                            <Box
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                  borderColor: 'rgba(99, 102, 241, 0.3)',
                                  transform: 'translateY(-2px)'
                                }
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Box sx={{ color: '#6366f1', mr: 1 }}>
                                  {platform.icon}
                                </Box>
                                <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600 }}>
                                  {platform.name}
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                                {platform.desc}
                              </Typography>
                            </Box>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2, fontWeight: 600 }}>
                      Solutions
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {servicesData.solutions.map((solution) => (
                        <Link key={solution.name} href={solution.href} style={{ textDecoration: 'none' }}>
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 1,
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                                transform: 'translateX(8px)'
                              }
                            }}
                          >
                            <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>
                              {solution.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                              {solution.desc}
                            </Typography>
                          </Box>
                        </Link>
                      ))}
                    </Box>
                    <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Link href="/demo" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        fullWidth
                        sx={{
                          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #4f46e5, #0891b2)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)'
                          }
                        }}
                      >
                        Request Demo
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ color: '#6366f1', mb: 2, fontWeight: 600 }}>
                      Company
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {companyData.about.map((item) => (
                        <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 1,
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                transform: 'translateX(8px)'
                              }
                            }}
                          >
                            <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>
                              {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                              {item.desc}
                            </Typography>
                          </Box>
                        </Link>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ color: '#06b6d4', mb: 2, fontWeight: 600 }}>
                      Resources
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {companyData.resources.map((item) => (
                        <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 1,
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                                transform: 'translateX(8px)'
                              }
                            }}
                          >
                            <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>
                              {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                              {item.desc}
                            </Typography>
                          </Box>
                        </Link>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Paper>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function AdvancedNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact']
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
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileOpen(false)
    setActiveMenu(null)
  }

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu)
  }

  const handleMenuLeave = () => {
    setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
        elevation={0}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 }, px: { xs: 2, md: 4 } }}>
          <Link href="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}
              >
                <Hub sx={{ color: 'white', fontSize: 24 }} />
              </Box>
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                Marvel Digital Solutions
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4, position: 'relative' }}>
            <Box
              onMouseEnter={() => handleMenuHover('services')}
              onMouseLeave={handleMenuLeave}
              sx={{ position: 'relative' }}
            >
              <Button
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: '#6366f1'
                  }
                }}
              >
                Services
              </Button>
              <MegaMenu 
                type="services" 
                isOpen={activeMenu === 'services'} 
                onClose={() => setActiveMenu(null)} 
              />
            </Box>

            <Box
              onMouseEnter={() => handleMenuHover('company')}
              onMouseLeave={handleMenuLeave}
              sx={{ position: 'relative' }}
            >
              <Button
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: '#6366f1'
                  }
                }}
              >
                Company
              </Button>
              <MegaMenu 
                type="company" 
                isOpen={activeMenu === 'company'} 
                onClose={() => setActiveMenu(null)} 
              />
            </Box>

            <Button
              onClick={() => handleNavClick('#about')}
              sx={{
                color: activeSection === 'about' ? '#6366f1' : 'white',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  color: '#6366f1'
                }
              }}
            >
              About
            </Button>

            <Button
              onClick={() => handleNavClick('#contact')}
              sx={{
                color: activeSection === 'contact' ? '#6366f1' : 'white',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  color: '#6366f1'
                }
              }}
            >
              Contact
            </Button>

            <Link href="/consultation" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  borderRadius: '50px',
                  px: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4f46e5, #0891b2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)'
                  }
                }}
              >
                Get Consultation
              </Button>
            </Link>
          </Box>

          {/* Mobile Navigation Toggle */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                  backgroundColor: 'rgba(10, 10, 10, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  px: 2,
                  pb: 2
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="/services" style={{ textDecoration: 'none' }}>
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'white',
                        py: 2,
                        '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.1)' }
                      }}
                    >
                      Services
                    </Button>
                  </Link>
                  <Link href="/about" style={{ textDecoration: 'none' }}>
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'white',
                        py: 2,
                        '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.1)' }
                      }}
                    >
                      Company
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleNavClick('#about')}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'white',
                      py: 2,
                      '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.1)' }
                    }}
                  >
                    About
                  </Button>
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'white',
                      py: 2,
                      '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.1)' }
                    }}
                  >
                    Contact
                  </Button>
                  <Link href="/consultation" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                        mt: 2,
                        py: 1.5
                      }}
                    >
                      Get Consultation
                    </Button>
                  </Link>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>
    </HideOnScroll>
  )
}