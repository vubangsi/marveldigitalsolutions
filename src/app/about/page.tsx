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
  Avatar,
  Chip,
  IconButton
} from '@mui/material'
import { 
  ArrowForward, 
  LinkedIn, 
  Twitter, 
  GitHub,
  TrendingUp,
  People,
  Science,
  Business,
  Star,
  Rocket,
  Psychology,
  EmojiEvents,
  AutoAwesome
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'

const leadership = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer & Co-Founder',
    image: '/api/placeholder/300/300',
    bio: 'Former VP of AI Research at Google, PhD in Computer Science from Stanford. Led breakthrough research in neural architecture search and large-scale machine learning.',
    expertise: ['AI Strategy', 'Machine Learning', 'Enterprise Architecture'],
    achievements: ['50+ publications', 'Google AI Fellowship', 'MIT TR35 Winner'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Dr. Marcus Rodriguez',
    role: 'Chief Technology Officer & Co-Founder',
    image: '/api/placeholder/300/300',
    bio: 'Former Principal Engineer at Microsoft Azure AI, PhD in Distributed Systems from CMU. Pioneer in edge computing and neuromorphic processing.',
    expertise: ['System Architecture', 'Edge Computing', 'Neuromorphic AI'],
    achievements: ['40+ patents', 'ACM Fellow', 'IEEE Distinguished Engineer'],
    social: { linkedin: '#', github: '#' }
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Chief AI Officer',
    image: '/api/placeholder/300/300',
    bio: 'Former Research Director at OpenAI, PhD in Cognitive Science from Harvard. Expert in large language models and human-AI interaction.',
    expertise: ['LLMs', 'Cognitive AI', 'Human-AI Interaction'],
    achievements: ['30+ publications', 'AAAI Fellow', 'Nature AI Editorial Board'],
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'James Thompson',
    role: 'Chief Revenue Officer',
    image: '/api/placeholder/300/300',
    bio: 'Former VP of Enterprise Sales at Salesforce, MBA from Wharton. 15+ years building enterprise AI go-to-market strategies.',
    expertise: ['Enterprise Sales', 'Go-to-Market', 'Customer Success'],
    achievements: ['$500M+ revenue generated', 'Salesforce Presidents Club', 'Top Enterprise Seller'],
    social: { linkedin: '#' }
  }
]

const companyStats = [
  { label: 'Enterprise Clients', value: '150+', icon: <Business /> },
  { label: 'AI Models Deployed', value: '500+', icon: <Psychology /> },
  { label: 'Data Points Processed', value: '10B+', icon: <TrendingUp /> },
  { label: 'Research Publications', value: '200+', icon: <Science /> },
  { label: 'Patents Filed', value: '75+', icon: <EmojiEvents /> },
  { label: 'Team Members', value: '120+', icon: <People /> }
]

const timeline = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Marvel Digital Solutions founded by AI research veterans from Google, Microsoft, and OpenAI.',
    milestone: 'Founded'
  },
  {
    year: '2020',
    title: 'Series A Funding',
    description: '$15M Series A led by Andreessen Horowitz to accelerate AI platform development.',
    milestone: 'Funding'
  },
  {
    year: '2021',
    title: 'First Enterprise Deployments',
    description: 'Successful deployments at Fortune 500 companies, validating our enterprise AI approach.',
    milestone: 'Growth'
  },
  {
    year: '2022',
    title: 'Research Breakthroughs',
    description: 'Published groundbreaking research in quantum-inspired optimization and neuromorphic computing.',
    milestone: 'Innovation'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to Europe and Asia, establishing research labs in London and Singapore.',
    milestone: 'Expansion'
  },
  {
    year: '2024',
    title: 'Next-Gen Platform Launch',
    description: 'Launched comprehensive AI platform suite with 8 specialized intelligence systems.',
    milestone: 'Platform'
  }
]

const values = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what&apos;s possible in AI, constantly exploring new frontiers and methodologies.',
    icon: <Rocket />
  },
  {
    title: 'Enterprise Excellence',
    description: 'We build solutions that meet the highest enterprise standards for security, compliance, and reliability.',
    icon: <Star />
  },
  {
    title: 'Ethical AI',
    description: 'We prioritize responsible AI development with transparency, fairness, and human-centric design.',
    icon: <AutoAwesome />
  },
  {
    title: 'Collaborative Growth',
    description: 'We believe in the power of diverse teams and inclusive innovation to solve complex challenges.',
    icon: <People />
  }
]

export default function AboutPage() {
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Pioneering the Future of Enterprise AI
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#d1d5db',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  mb: 6
                }}
              >
                We&apos;re a team of world-class AI researchers, engineers, and business leaders dedicated to transforming 
                how enterprises harness the power of artificial intelligence.
              </Typography>
              
              <Grid container spacing={4} sx={{ maxWidth: '900px', mx: 'auto' }}>
                {companyStats.map((stat, index) => (
                  <Grid item xs={6} md={2} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#a5b4fc' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Leadership Team */}
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
              Leadership Team
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
              World-class leaders from top tech companies and research institutions
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {leadership.map((leader, index) => (
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                        borderColor: 'rgba(99, 102, 241, 0.3)',
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Avatar
                          src={leader.image}
                          sx={{
                            width: 80,
                            height: 80,
                            mr: 3,
                            border: '3px solid rgba(99, 102, 241, 0.3)'
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                            {leader.name}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ color: '#6366f1', fontWeight: 500, mb: 2 }}>
                            {leader.role}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            {leader.social.linkedin && (
                              <IconButton size="small" sx={{ color: '#0077b5' }}>
                                <LinkedIn />
                              </IconButton>
                            )}
                            {leader.social.twitter && (
                              <IconButton size="small" sx={{ color: '#1da1f2' }}>
                                <Twitter />
                              </IconButton>
                            )}
                            {leader.social.github && (
                              <IconButton size="small" sx={{ color: '#f5f5f5' }}>
                                <GitHub />
                              </IconButton>
                            )}
                          </Box>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" sx={{ color: '#d1d5db', mb: 3, lineHeight: 1.6 }}>
                        {leader.bio}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: '#8b5cf6', fontWeight: 600, mb: 1 }}>
                          Expertise:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {leader.expertise.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                color: '#c4b5fd',
                                fontSize: '0.75rem'
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                      
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#06b6d4', fontWeight: 600, mb: 1 }}>
                          Achievements:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {leader.achievements.map((achievement) => (
                            <Chip
                              key={achievement}
                              label={achievement}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                                color: '#67e8f9',
                                fontSize: '0.75rem'
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Link href="/about/team" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                sx={{
                  borderColor: 'rgba(99, 102, 241, 0.5)',
                  color: '#6366f1',
                  borderRadius: '50px',
                  px: 4,
                  '&:hover': {
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)'
                  }
                }}
              >
                View Full Team
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* Company Timeline */}
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
              Our Journey
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
              From startup to enterprise AI leader - key milestones in our growth
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '24px', md: '50%' },
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(to bottom, #6366f1, #06b6d4)',
                transform: { md: 'translateX(-1px)' }
              }}
            />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 6,
                    flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' }
                  }}
                >
                  <Box
                    sx={{
                      flex: { xs: 'none', md: 1 },
                      textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                      pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                      pl: { xs: 4, md: index % 2 === 0 ? 0 : 4 }
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        p: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(6, 182, 212, 0.05)',
                          borderColor: 'rgba(6, 182, 212, 0.3)'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#06b6d4', fontWeight: 700, mb: 1 }}>
                        {item.year}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Card>
                  </Box>

                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: { xs: 'absolute', md: 'relative' },
                      left: { xs: '16px', md: 'auto' },
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                      border: '3px solid #0a0a0a',
                      zIndex: 2
                    }}
                  />

                  <Box sx={{ flex: { xs: 'none', md: 1 } }} />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Company Values */}
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
              Our Values
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
              The principles that guide our mission and drive our innovation
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {values.map((value, index) => (
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
                      p: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(139, 92, 246, 0.05)',
                        borderColor: 'rgba(139, 92, 246, 0.3)',
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3
                          }}
                        >
                          {value.icon}
                        </Box>
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                          {value.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: '#d1d5db', lineHeight: 1.6 }}>
                        {value.description}
                      </Typography>
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
                Join Our Mission
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
                Whether you&apos;re looking to transform your business with AI or join our team of innovators, we&apos;d love to connect.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/about/careers" style={{ textDecoration: 'none' }}>
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
                    View Careers
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
                    Contact Us
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