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
    setStars([...Array(80)].map((_, i) => ({
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
      background: 'radial-gradient(ellipse at top, #1a0533 0%, #0d0d2b 40%, #000000 100%)',
      fontFamily: "'Poppins', sans-serif",
      overflowX: 'hidden',
      position: 'relative',
      padding: '40px 20px',
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
        width: '800px',
        height: '800px',
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
      }}>

        {/* FLOATING MOON */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '100px', marginBottom: '16px', lineHeight: 1 }}
        >
          🌙
        </motion.div>

        {/* EID MUBARAK */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(48px, 10vw, 80px)',
            fontFamily: "'Cinzel', serif",
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f0c060 0%, #ff9de2 40%, #a78bfa 70%, #f0c060 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientText 4s ease infinite',
            marginBottom: '8px',
            textAlign: 'center',
            letterSpacing: '3px',
            lineHeight: 1.2,
          }}
        >
          Eid Mubarak
        </motion.h1>

        {/* NAME */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontSize: 'clamp(28px, 6vw, 48px)',
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            color: 'white',
            marginBottom: '40px',
            textAlign: 'center',
            textShadow: '0 0 30px rgba(255,255,255,0.3)',
            letterSpacing: '2px',
          }}
        >
          {decodedName}! 🎉
        </motion.h2>

        {/* MESSAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '28px',
            padding: '32px 40px',
            maxWidth: '480px',
            width: '100%',
            textAlign: 'center',
            marginBottom: '32px',
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
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', marginBottom: '12px', lineHeight: 1.6 }}>
            🍛 May your biryani be <strong style={{ color: '#f0c060' }}>unlimited</strong>
          </p>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', marginBottom: '20px', lineHeight: 1.6 }}>
            💰 and your Eidi be <strong style={{ color: '#f0c060' }}>maximum!</strong>
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
              If this made you smile, you owe me an Eid wish 😌
            </p>
          </div>
        </motion.div>

        {/* EIDI BUTTON */}
        <AnimatePresence>
          {!showQR && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.3 }}
              style={{ textAlign: 'center', marginBottom: '16px' }}
            >
              {/* Button — confetti + GPay open */}
              <motion.a
                href="upi://pay?pa=chivilkarkhulood-1@okicici&pn=Khulood%20Chivilkar&tn=Eidi"
                onClick={handleEidiClick}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  padding: '20px 48px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f0c060, #f59e0b)',
                  color: '#0a0a1a',
                  fontSize: '20px',
                  fontWeight: 800,
                  fontFamily: "'Poppins', sans-serif",
                  cursor: 'pointer',
                  boxShadow: '0 0 40px rgba(240,192,96,0.5), 0 0 80px rgba(240,192,96,0.25)',
                  animation: 'glowPulse 2s ease-in-out infinite',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                }}
              >
                Send me Eidi 💰😏
              </motion.a>

              <p style={{
                marginTop: '12px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '1px',
              }}>
                Or just send Eid wishes — those are free! 😅
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QR SECTION — button click ke baad */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'center' }}
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '24px',
                }}
              >
                COME ON EIDI IS MUST! 😄
              </motion.p>

              {/* QR with rainbow glow border */}
              <div style={{
                display: 'inline-block',
                padding: '3px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #f0c060, #9333ea, #ec4899, #f0c060)',
                backgroundSize: '300% auto',
                animation: 'shimmer 3s linear infinite',
                boxShadow: '0 0 40px rgba(147,51,234,0.4), 0 0 80px rgba(240,192,96,0.2)',
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '22px',
                  padding: '16px',
                }}>
                  <img
                    src="/qr-code.jpeg"
                    alt="QR Code"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              <p style={{
                marginTop: '16px',
                fontSize: '13px',
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
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(240,192,96,0.5), 0 0 80px rgba(240,192,96,0.25); }
          50% { box-shadow: 0 0 60px rgba(240,192,96,0.8), 0 0 120px rgba(240,192,96,0.4); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
      `}</style>

    </main>
  )
}