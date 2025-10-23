'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Box, Typography, Button, Container, Grid, Card, CardContent, 
  Chip, IconButton, useTheme, alpha
} from '@mui/material'
import {
  SmartToy, Psychology, Hub, Cloud, Science, Security,
  Speed, Insights, ArrowForward, CheckCircle
} from '@mui/icons-material'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    id: 1,
    title: 'Cognitive Enterprise Intelligence Platform',
    shortTitle: 'CEIP',
    icon: <Psychology />,
    technologies: ['RAG', 'Agentic AI', 'Knowledge Graphs'],
    description: 'A unified intelligence platform that integrates all enterprise data — documents, communications, transactions — and builds a self-updating knowledge graph.',
    useCases: [
      'Cross-departmental analytics',
      'Automated compliance intelligence', 
      'Enterprise knowledge assistant'
    ],
    whyMatters: 'Turns fragmented enterprise data into actionable intelligence, not just searchable information.'
  },
  {
    id: 2,
    title: 'Autonomous Process Orchestration Agents',
    shortTitle: 'APOA',
    icon: <SmartToy />,
    technologies: ['Agentic AI', 'Multi-Agent Systems', 'RPA 2.0'],
    description: 'Deploy swarms of collaborative AI agents that autonomously execute end-to-end business workflows.',
    useCases: [
      'Automated vendor onboarding',
      'Financial close automation',
      'Predictive supply-chain management'
    ],
    whyMatters: 'Moves enterprises from "automated tasks" to self-organizing digital operations.'
  },
  {
    id: 3,
    title: 'Multimodal Insight & Interaction Engine',
    shortTitle: 'MIIE',
    icon: <Insights />,
    technologies: ['Multimodal LLMs', 'Vision-Language Models', 'Speech AI'],
    description: 'A next-gen platform enabling visual, auditory, and textual understanding from reports, videos, images, and sensor data.',
    useCases: [
      'Maintenance inspection via image/video',
      'Customer experience analytics',
      'Intelligent document understanding'
    ],
    whyMatters: 'Builds the foundation for "embodied intelligence" — AI that sees, listens, and understands like a human collaborator.'
  },
  {
    id: 4,
    title: 'Edge-Native Autonomous Systems',
    shortTitle: 'ENAS',
    icon: <Cloud />,
    technologies: ['Edge AI', 'TinyML', 'Federated Learning'],
    description: 'Bring intelligence to the edge — sensors, devices, and machines with real-time decision-making.',
    useCases: [
      'Smart factories and logistics',
      'Edge-based retail analytics',
      'Real-time anomaly detection'
    ],
    whyMatters: 'Enables instant AI action where milliseconds matter, while preserving data sovereignty.'
  },
  {
    id: 5,
    title: 'Quantum-Ready Optimization & Simulation Engine',
    shortTitle: 'QROSE',
    icon: <Science />,
    technologies: ['Quantum-Inspired Optimization', 'Hybrid Quantum/AI Workflows'],
    description: 'Handle ultra-complex optimization and simulation problems using quantum-inspired AI algorithms.',
    useCases: [
      'Financial portfolio optimization',
      'Smart grid and energy balancing',
      'Next-gen logistics planning'
    ],
    whyMatters: 'Prepares clients for the quantum era, offering massive leaps in computational efficiency.'
  },
  {
    id: 6,
    title: 'Neuromorphic AI for Adaptive Systems',
    shortTitle: 'NAAS',
    icon: <Speed />,
    technologies: ['Spiking Neural Networks', 'Event-Driven Processing', 'Low-Power AI Chips'],
    description: 'Ultra-low-power, adaptive AI solutions using neuromorphic computing that mimics biological neurons.',
    useCases: [
      'Autonomous robotics and drones',
      'Real-time gesture recognition',
      'Always-on smart sensors'
    ],
    whyMatters: 'Unlocks the future of energy-efficient, always-learning AI systems.'
  },
  {
    id: 7,
    title: 'Trust, Ethics & Governance AI Suite',
    shortTitle: 'TEGAS',
    icon: <Security />,
    technologies: ['Explainable AI (XAI)', 'Bias Detection', 'Policy Agents'],
    description: 'Comprehensive framework ensuring AI deployments are fair, transparent, and compliant.',
    useCases: [
      'AI compliance audits',
      'Ethical decision-support',
      'Continuous risk monitoring'
    ],
    whyMatters: 'Builds trustworthy AI ecosystems — essential for enterprise adoption and regulatory approval.'
  },
  {
    id: 8,
    title: 'Synthetic Intelligence Lab',
    shortTitle: 'SIL',
    icon: <Hub />,
    technologies: ['Generative Simulation', 'Synthetic Data', 'Digital Twins'],
    description: 'Innovation hub creating digital twins of enterprises, cities, or ecosystems for safe AI training and testing.',
    useCases: [
      'Smart city simulation',
      'Digital twin workflows',
      'Training safety-critical AI'
    ],
    whyMatters: 'A bridge between real-world systems and AI imagination, accelerating innovation cycles.'
  }
]

const features = [
  'Advanced AI & Machine Learning',
  'Enterprise-Grade Security',
  'Scalable Cloud Infrastructure',
  '24/7 Expert Support',
  'Custom Integration Services',
  'Continuous Innovation'
]

export default function HomePage() {
  const theme = useTheme()

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
      >
        {/* Animated Background Elements */}
        <Box className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
            animate={{ 
              x: [0, 100, 0], 
              y: [0, -50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ 
              x: [0, -100, 0], 
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </Box>

        <Container maxWidth="lg" className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography 
              variant="h1" 
              className="gradient-text mb-6 animate-float"
              sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}
            >
              Future-Ready AI Solutions
            </Typography>
            <Typography 
              variant="h2" 
              className="text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
            >
              Transforming enterprises with cognitive intelligence, autonomous systems, 
              and cutting-edge AI technologies that drive unprecedented innovation and efficiency.
            </Typography>
            
            <Box className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="contained" 
                size="large"
                className="btn-primary"
                endIcon={<ArrowForward />}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </Box>

            {/* Feature Pills */}
            <Box className="flex flex-wrap justify-center gap-3">
              {['Agentic AI', 'Enterprise Intelligence', 'Autonomous Systems', 'Quantum-Ready'].map((feature) => (
                <Chip 
                  key={feature}
                  label={feature}
                  className="bg-white/10 text-indigo-300 border-indigo-400/30 backdrop-blur-sm"
                />
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" className="py-20 bg-dark-900">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              className="gradient-text text-center mb-4"
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              Our AI Services
            </Typography>
            <Typography 
              variant="h6" 
              className="text-gray-400 text-center mb-16 max-w-3xl mx-auto"
            >
              Eight cutting-edge AI platforms designed to transform your enterprise operations 
              with unprecedented intelligence and automation capabilities.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" className="py-20 bg-gradient-to-br from-dark-900 to-primary-900">
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" className="gradient-text mb-6">
                  Pioneering the Future of Enterprise AI
                </Typography>
                <Typography className="text-gray-300 mb-6 leading-relaxed">
                  At Marvel Digital Solutions, we're not just building AI systems — we're crafting 
                  the intelligent infrastructure that will power the next generation of enterprise operations. 
                  Our platforms combine cutting-edge research with practical business applications.
                </Typography>
                <Typography className="text-gray-300 mb-8 leading-relaxed">
                  From autonomous agents that manage complex workflows to cognitive platforms that 
                  understand your business context, we deliver solutions that evolve with your needs 
                  and scale with your ambitions.
                </Typography>
                
                <Box className="grid grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <Box key={feature} className="flex items-center">
                      <CheckCircle className="text-indigo-400 mr-2" />
                      <Typography className="text-gray-300">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Box className="glass-card p-8 animate-glow">
                  <Typography variant="h5" className="gradient-text mb-4">
                    Why Choose Marvel Digital Solutions?
                  </Typography>
                  <Box className="space-y-4">
                    {[
                      'Industry-leading AI research and development',
                      'Enterprise-grade security and compliance',
                      'Seamless integration with existing systems',
                      'Dedicated support and continuous optimization'
                    ].map((point, index) => (
                      <Box key={index} className="flex items-start">
                        <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <Typography className="text-gray-300">{point}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" className="py-20 bg-dark-900">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Typography variant="h2" className="gradient-text mb-6">
              Ready to Transform Your Enterprise?
            </Typography>
            <Typography className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
              Let's discuss how our AI platforms can revolutionize your business operations. 
              Schedule a consultation with our experts today.
            </Typography>
            
            <Box className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="contained" 
                size="large"
                className="btn-primary"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                className="btn-secondary"
              >
                View Case Studies
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}