'use client'

import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Card, 
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { 
  Psychology, 
  ArrowForward, 
  CheckCircle, 
  Security, 
  Speed,
  Analytics,
  AutoAwesome
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    icon: <Analytics />,
    title: 'Unified Data Integration',
    description: 'Seamlessly connects all enterprise data sources including documents, communications, transactions, and external APIs into a single intelligent layer.'
  },
  {
    icon: <AutoAwesome />,
    title: 'Self-Updating Knowledge Graphs',
    description: 'Automatically builds and maintains dynamic knowledge graphs that evolve with your business, capturing relationships and insights in real-time.'
  },
  {
    icon: <Speed />,
    title: 'Real-Time Intelligence',
    description: 'Provides instant insights and recommendations based on the latest data, enabling faster decision-making across all departments.'
  },
  {
    icon: <Security />,
    title: 'Enterprise-Grade Security',
    description: 'Built with zero-trust architecture, end-to-end encryption, and compliance with SOC 2, GDPR, and industry-specific regulations.'
  }
]

const useCases = [
  {
    title: 'Cross-Departmental Analytics',
    description: 'Break down data silos by providing unified analytics across sales, marketing, operations, and finance departments.',
    benefits: ['360° customer view', 'Unified reporting', 'Cross-functional insights', 'Data democratization']
  },
  {
    title: 'Automated Compliance Intelligence',
    description: 'Continuously monitor regulatory compliance across all business processes with automated risk assessment and reporting.',
    benefits: ['Real-time compliance monitoring', 'Automated audit trails', 'Risk prediction', 'Regulatory reporting']
  },
  {
    title: 'Enterprise Knowledge Assistant',
    description: 'AI-powered assistant that understands your business context and provides intelligent recommendations and insights.',
    benefits: ['Natural language queries', 'Contextual recommendations', 'Proactive insights', 'Decision support']
  }
]

const technicalSpecs = [
  { category: 'Architecture', items: ['Microservices-based', 'Cloud-native design', 'API-first approach', 'Event-driven processing'] },
  { category: 'AI/ML Stack', items: ['Large Language Models', 'Knowledge Graph Embeddings', 'Reinforcement Learning', 'Computer Vision'] },
  { category: 'Data Processing', items: ['Real-time streaming', 'Batch processing', 'ETL/ELT pipelines', 'Data quality monitoring'] },
  { category: 'Security', items: ['Zero-trust architecture', 'End-to-end encryption', 'Role-based access', 'Audit logging'] }
]

export default function CEIPPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: 8,
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #3730a3 100%)',
          overflow: 'hidden'
        }}
      >
        {/* Background Animation */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <motion.div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              filter: 'blur(80px)'
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3
                    }}
                  >
                    <Psychology sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
                      Cognitive Enterprise Intelligence Platform
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#a5b4fc', fontWeight: 500 }}>
                      CEIP - Unified Intelligence for Modern Enterprises
                    </Typography>
                  </Box>
                </Box>

                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#d1d5db', 
                    mb: 4, 
                    lineHeight: 1.6,
                    maxWidth: '600px'
                  }}
                >
                  Transform fragmented enterprise data into actionable intelligence with our self-updating knowledge graph platform that understands your business context.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
                  {['RAG', 'Agentic AI', 'Knowledge Graphs', 'Real-time Analytics'].map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: 'rgba(99, 102, 241, 0.2)',
                        color: '#a5b4fc',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        fontWeight: 600
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Link href="/demo" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)'
                        }
                      }}
                    >
                      Request Demo
                    </Button>
                  </Link>
                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'rgba(99, 102, 241, 0.5)',
                        color: '#a5b4fc',
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          borderColor: '#6366f1',
                          backgroundColor: 'rgba(99, 102, 241, 0.1)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Get Consultation
                    </Button>
                  </Link>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    p: 3
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                      Platform Highlights
                    </Typography>
                    <List dense>
                      {[
                        'Unified data integration across all sources',
                        'Self-updating knowledge graphs',
                        'Real-time intelligence and insights',
                        'Enterprise-grade security and compliance'
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={item} 
                            primaryTypographyProps={{ 
                              color: '#d1d5db', 
                              fontSize: '0.875rem' 
                            }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 2,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700
              }}
            >
              Core Capabilities
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                textAlign: 'center',
                mb: 8,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Advanced AI capabilities that transform how enterprises understand and utilize their data
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                        borderColor: 'rgba(99, 102, 241, 0.3)',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.1)'
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Use Cases Section */}
      <Box sx={{ py: 10, backgroundColor: '#111111' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 2,
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700
              }}
            >
              Enterprise Use Cases
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                textAlign: 'center',
                mb: 8,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Real-world applications that deliver measurable business value
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {useCases.map((useCase, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(6, 182, 212, 0.05)',
                        borderColor: 'rgba(6, 182, 212, 0.3)',
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                        {useCase.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#d1d5db', mb: 3, lineHeight: 1.6 }}>
                        {useCase.description}
                      </Typography>
                      <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                      <Typography variant="subtitle2" sx={{ color: '#06b6d4', fontWeight: 600, mb: 2 }}>
                        Key Benefits:
                      </Typography>
                      <List dense>
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <ListItem key={benefitIndex} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#10b981', fontSize: 16 }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={benefit} 
                              primaryTypographyProps={{ 
                                color: '#9ca3af', 
                                fontSize: '0.875rem' 
                              }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technical Specifications */}
      <Box sx={{ py: 10, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 2,
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700
              }}
            >
              Technical Architecture
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                textAlign: 'center',
                mb: 8,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Enterprise-grade technical foundation built for scale, security, and performance
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {technicalSpecs.map((spec, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: 3
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#8b5cf6', fontWeight: 600, mb: 3 }}>
                        {spec.category}
                      </Typography>
                      <List dense>
                        {spec.items.map((item, itemIndex) => (
                          <ListItem key={itemIndex} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon>
                              <CheckCircle sx={{ color: '#10b981', fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={item} 
                              primaryTypographyProps={{ 
                                color: '#d1d5db', 
                                fontSize: '0.875rem',
                                fontWeight: 500
                              }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #1a1a3e 0%, #3730a3 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Ready to Transform Your Enterprise Intelligence?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#a5b4fc',
                  mb: 6,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Schedule a personalized demo to see how CEIP can revolutionize your data strategy and unlock unprecedented insights.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/demo" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(135deg, #ffffff, #f3f4f6)',
                      color: '#1a1a3e',
                      borderRadius: '50px',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #f9fafb, #e5e7eb)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)'
                      }
                    }}
                  >
                    Schedule Demo
                  </Button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'white',
                      borderRadius: '50px',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Contact Sales
                  </Button>
                </Link>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}