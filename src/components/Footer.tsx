import React from 'react'
import { Box, Typography, Grid, Link, Divider } from '@mui/material'
import { Email, Phone, LocationOn } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box className="bg-dark-900 border-t border-white/10 mt-20">
      <Box className="container mx-auto px-4 py-16">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              className="gradient-text font-bold mb-4"
            >
              Marvel Digital Solutions
            </Typography>
            <Typography className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of enterprise intelligence with cutting-edge AI solutions, 
              autonomous systems, and cognitive platforms that transform how businesses operate.
            </Typography>
            <Box className="space-y-2">
              <Box className="flex items-center text-gray-400">
                <Email className="mr-3 text-indigo-400" />
                <Typography>contact@marveldigitalsolutions.com</Typography>
              </Box>
              <Box className="flex items-center text-gray-400">
                <Phone className="mr-3 text-indigo-400" />
                <Typography>+1 (555) 123-4567</Typography>
              </Box>
              <Box className="flex items-center text-gray-400">
                <LocationOn className="mr-3 text-indigo-400" />
                <Typography>San Francisco, CA</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="text-white font-semibold mb-4">
              Services
            </Typography>
            <Box className="space-y-2">
              {[
                'CEIP Platform',
                'APOA Agents', 
                'MIIE Engine',
                'ENAS Systems',
                'QROSE Engine',
                'NAAS Solutions',
                'TEGAS Suite',
                'SIL Lab'
              ].map((service) => (
                <Link 
                  key={service}
                  href="#services" 
                  className="block text-gray-400 hover:text-indigo-400 transition-colors"
                  underline="none"
                >
                  {service}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="text-white font-semibold mb-4">
              Company
            </Typography>
            <Box className="space-y-2">
              {['About Us', 'Careers', 'News', 'Partners', 'Privacy Policy'].map((item) => (
                <Link 
                  key={item}
                  href="#" 
                  className="block text-gray-400 hover:text-indigo-400 transition-colors"
                  underline="none"
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="text-white font-semibold mb-4">
              Resources
            </Typography>
            <Box className="space-y-2">
              {['Documentation', 'API Reference', 'Case Studies', 'White Papers', 'Blog'].map((item) => (
                <Link 
                  key={item}
                  href="#" 
                  className="block text-gray-400 hover:text-indigo-400 transition-colors"
                  underline="none"
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Technologies */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="text-white font-semibold mb-4">
              Technologies
            </Typography>
            <Box className="space-y-2">
              {['Agentic AI', 'RAG Systems', 'Knowledge Graphs', 'Multi-Agent', 'Edge AI', 'Quantum-Inspired'].map((tech) => (
                <Typography key={tech} className="text-gray-400 text-sm">
                  {tech}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider className="my-8 border-white/10" />

        <Box className="flex flex-col md:flex-row justify-between items-center">
          <Typography className="text-gray-400 text-sm">
            © 2025 Marvel Digital Solutions. All rights reserved.
          </Typography>
          <Box className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link 
                key={item}
                href="#" 
                className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                underline="none"
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}