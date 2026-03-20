'use client'

import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WishPage() {
  const { name } = useParams()
  const decodedName = decodeURIComponent(name)
  const [showQR, setShowQR] = useState(false)
  const [stars, setStars] = useState([])

  useEffect(() => {
    setStars([...Array(50)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.7 + 0.3,
    })))
  }, [])

  const handleEidiClick = async () => {
    const confetti = (await import('canvas-confetti')).default
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f0c060', '#9333ea', '#ec4899', '#ffffff', '#fbbf24'],
    })
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.6 },
      colors: ['#f0c060', '#9333ea'],
    })
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.6 },
      colors: ['#f0c060', '#ec4899'],
    })
    setTimeout(() => setShowQR(true), 1000)
  }

  return (
    <main style={{
      minHeight: '100vh',
      maxHeight: '100dvh',
      background: 'radial-gradient(ellipse at top, #1a0533 0%, #0d0d2b 40%, #000000 100%)',
      fontFamily: "'Poppins', sans-serif",
      overflowX: 'hidden',
      overflowY: 'hidden',
      position: 'relative',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>

      {/* STARS */}
      {stars.map(s => (
        <div key={s.id} style={{
          position: 'fixed',
          width: `${s.size}px`,
          height: `${s.size}px`,
          background: 'white',
          borderRadius: '50%',
          top: `${s.top}%`,
          left: `${s.left}%`,
          opacity: s.opacity,
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* BIG PURPLE GLOW */}
      <div style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        gap: '10px',
      }}>

        {/* FLOATING MOON */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '56px', lineHeight: 1 }}
        >
          🌙
        </motion.div>

        {/* EID MUBARAK */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(38px, 10vw, 64px)',
            fontFamily: "'Cinzel', serif",
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f0c060 0%, #ff9de2 40%, #a78bfa 70%, #f0c060 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientText 4s ease infinite',
            margin: 0,
            textAlign: 'center',
            letterSpacing: '3px',
            lineHeight: 1.1,
          }}
        >
          Eid Mubarak
        </motion.h1>

        {/* NAME */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontSize: 'clamp(22px, 6vw, 36px)',
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            color: 'white',
            margin: 0,
            textAlign: 'center',
            textShadow: '0 0 30px rgba(255,255,255,0.3)',
            letterSpacing: '2px',
          }}
        >
          {decodedName}! 🎉
        </motion.h2>

        {/* MESSAGE CARD — compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '16px 24px',
            maxWidth: '420px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: '60%', height: '1px',
            background: 'linear-gradient(90deg, transparent, #f0c060, transparent)',
          }} />
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', margin: '0 0 8px', lineHeight: 1.6 }}>
            Shaitaan apko <strong style={{ color: '#f0c060' }}>EIDI</strong> dene se rokhenga —
            bilkul mat sunna, dil khol ke eidi dena! 😅
          </p>
         
        </motion.div>

        {/* EIDI BUTTON — JUMPING */}
        <AnimatePresence>
          {!showQR && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2 }}
              style={{ textAlign: 'center', width: '100%' }}
            >
              {/* Attention ring pulse behind button */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '24px',
                  background: 'rgba(240,192,96,0.2)',
                  animation: 'ringPulse 1.5s ease-in-out infinite',
                  zIndex: 0,
                }} />
                <div style={{
                  position: 'absolute',
                  inset: '-16px',
                  borderRadius: '28px',
                  background: 'rgba(240,192,96,0.08)',
                  animation: 'ringPulse 1.5s ease-in-out 0.3s infinite',
                  zIndex: 0,
                }} />

                <motion.a
                  href="http://razorpay.me/@khuloodrizwanchivilkar"
                  target="_blank"
                  onClick={handleEidiClick}
                  animate={{
                    y: [0, -14, 0, -8, 0],
                    scale: [1, 1.04, 1, 1.02, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: [0.36, 0.07, 0.19, 0.97],
                  }}
                  whileHover={{ scale: 1.1, y: -6 }}
                  whileTap={{ scale: 0.93 }}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 32px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #f0c060, #f59e0b)',
                    color: '#0a0a1a',
                    fontSize: '17px',
                    fontWeight: 800,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: 'pointer',
                    boxShadow: '0 0 40px rgba(240,192,96,0.6), 0 0 80px rgba(240,192,96,0.3), 0 8px 24px rgba(0,0,0,0.4)',
                    letterSpacing: '0.5px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {/* Animated coin emoji */}
                  <motion.span
                    animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.8 }}
                    style={{ fontSize: '19px' }}
                  >
                    💰
                  </motion.span>
                  Send me Eidi
                  <motion.span
                    animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.8, delay: 0.1 }}
                    style={{ fontSize: '19px' }}
                  >
                    😏
                  </motion.span>
                </motion.a>
              </div>

              <p style={{
                marginTop: '10px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.5px',
              }}>
                Or just send Eid wishes — those are free! 😅
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QR SECTION */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'center' }}
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '16px',
                }}
              >
                COME ON EIDI IS MUST! 😄
              </motion.p>

              <div style={{
                display: 'inline-block',
                padding: '3px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #f0c060, #9333ea, #ec4899, #f0c060)',
                backgroundSize: '300% auto',
                animation: 'shimmer 3s linear infinite',
                boxShadow: '0 0 40px rgba(147,51,234,0.4), 0 0 80px rgba(240,192,96,0.2)',
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '18px',
                  padding: '12px',
                }}>
                  <img
                    src="/qr-code.jpeg"
                    alt="QR Code"
                    style={{
                      width: '160px',
                      height: '160px',
                      objectFit: 'contain',
                      borderRadius: '10px',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              <p style={{
                marginTop: '12px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                fontStyle: 'italic',
              }}>
                Or just send Eid wishes — those are free! 😅
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700;800&display=swap');

        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }
        @keyframes gradientText {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.15); }
        }
      `}</style>

    </main>
  )
}
