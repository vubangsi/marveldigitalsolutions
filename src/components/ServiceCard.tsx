import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Card, CardContent, Typography, Box, Chip, Button, 
  Collapse, IconButton, Divider
} from '@mui/material'
import { ExpandMore as ExpandMoreIcon, Launch as LaunchIcon } from '@mui/icons-material'

interface Service {
  id: number
  title: string
  shortTitle: string
  icon: React.ReactElement
  technologies: string[]
  description: string
  useCases: string[]
  whyMatters: string
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Card 
        className={`glass-card h-full transition-all duration-300 cursor-pointer overflow-hidden ${
          hovered ? 'animate-glow' : ''
        }`}
        onClick={handleExpandClick}
      >
        <CardContent className="p-6">
          {/* Header */}
          <Box className="flex items-start justify-between mb-4">
            <Box className="flex items-center">
              <Box 
                className={`p-3 rounded-2xl mr-4 transition-all duration-300 ${
                  hovered ? 'bg-indigo-500/20 text-indigo-400' : 'bg-gray-800/50 text-gray-400'
                }`}
              >
                {service.icon}
              </Box>
              <Box>
                <Typography variant="h6" className="text-white font-semibold mb-1">
                  {service.shortTitle}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {service.title}
                </Typography>
              </Box>
            </Box>
            <IconButton 
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              size="small"
            >
              <ExpandMoreIcon className="text-gray-400" />
            </IconButton>
          </Box>

          {/* Description */}
          <Typography className="text-gray-300 mb-4 leading-relaxed">
            {service.description}
          </Typography>

          {/* Technologies */}
          <Box className="mb-4">
            <Typography variant="body2" className="text-gray-400 mb-2 font-medium">
              Core Technologies:
            </Typography>
            <Box className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  className="bg-indigo-500/20 text-indigo-300 border-indigo-400/30"
                />
              ))}
            </Box>
          </Box>

          {/* Use Cases */}
          <Box className="mb-4">
            <Typography variant="body2" className="text-gray-400 mb-2 font-medium">
              Key Use Cases:
            </Typography>
            <Box className="space-y-1">
              {service.useCases.slice(0, 2).map((useCase, index) => (
                <Typography key={index} variant="body2" className="text-gray-300 text-sm">
                  • {useCase}
                </Typography>
              ))}
              {service.useCases.length > 2 && !expanded && (
                <Typography variant="body2" className="text-gray-500 text-sm">
                  +{service.useCases.length - 2} more...
                </Typography>
              )}
            </Box>
          </Box>

          {/* Expanded Content */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider className="border-gray-700 mb-4" />
            
            {/* All Use Cases */}
            <Box className="mb-4">
              <Typography variant="body2" className="text-gray-400 mb-2 font-medium">
                Complete Use Cases:
              </Typography>
              <Box className="space-y-1">
                {service.useCases.map((useCase, index) => (
                  <Typography key={index} variant="body2" className="text-gray-300 text-sm">
                    • {useCase}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Why It Matters */}
            <Box className="mb-4">
              <Typography variant="body2" className="text-gray-400 mb-2 font-medium">
                Why It Matters:
              </Typography>
              <Typography className="text-gray-300 text-sm leading-relaxed">
                {service.whyMatters}
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box className="flex gap-2">
              <Button 
                variant="contained" 
                size="small" 
                className="btn-primary flex-1"
                endIcon={<LaunchIcon />}
              >
                Learn More
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                className="btn-secondary"
              >
                Get Demo
              </Button>
            </Box>
          </Collapse>

          {/* Quick Actions (when not expanded) */}
          {!expanded && (
            <Box className="mt-4 pt-4 border-t border-gray-700">
              <Button 
                variant="text" 
                size="small" 
                className="text-indigo-400 hover:text-indigo-300 p-0"
                endIcon={<LaunchIcon className="text-sm" />}
              >
                Quick Overview
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}