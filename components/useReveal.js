'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useReveal(margin = '-80px') {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin })
  return { ref, inView }
}
