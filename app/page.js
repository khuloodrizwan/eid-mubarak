'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = () => {
    if (!name.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      router.push(`/wish/${encodeURIComponent(name.trim())}`)
    }, 1000)
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top, #1a0533 0%, #0d0d2b 40%, #000000 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Poppins', sans-serif",
      overflow: 'hidden',
      position: 'relative',
      padding: '20px',
    }}>

      {/* STARS */}
      {[...Array(80)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          background: 'white',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.7 + 0.3,
          animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
        }} />
      ))}

      {/* BIG GLOW BEHIND */}
      <div style={{
        position: 'absolute',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '32px',
          padding: '48px 40px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >

        {/* TOP GLOW LINE */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #f0c060, transparent)',
        }} />

        {/* FLOATING MOON */}
        <motion.div
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '72px', marginBottom: '8px', display: 'block', lineHeight: 1 }}
        >
          🌙
        </motion.div>

        {/* EID MUBARAK — Rainbow Gradient Big Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: 'clamp(36px, 8vw, 56px)',
            fontFamily: "'Cinzel', serif",
            fontWeight: 900,
            background: 'linear-gradient(135deg, #f0c060 0%, #ff9de2 40%, #a78bfa 70%, #f0c060 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientText 4s ease infinite',
            marginBottom: '8px',
            lineHeight: 1.2,
            letterSpacing: '2px',
          }}
        >
          Eid Mubarak
        </motion.h1>

        {/* STARS DECORATION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: '22px',
            marginBottom: '32px',
            letterSpacing: '8px',
          }}
        >
          ✨ 🌙 ✨
        </motion.p>

        {/* ENTER NAME LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '12px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          Enter Your Name
        </motion.p>

        {/* MAGIC INPUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          {/* Input Glow Border */}
          <div style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: '17px',
            background: name 
              ? 'linear-gradient(135deg, #f0c060, #9333ea, #ec4899)' 
              : 'rgba(255,255,255,0.1)',
            zIndex: 0,
            transition: 'all 0.3s ease',
          }} />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="e.g. Fatima, Sara, Ahmed..."
            maxLength={30}
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              background: '#0d0d2b',
              border: 'none',
              borderRadius: '16px',
              padding: '18px 24px',
              color: 'white',
              fontSize: '16px',
              fontFamily: "'Poppins', sans-serif",
              outline: 'none',
              textAlign: 'center',
              letterSpacing: '1px',
            }}
          />
        </motion.div>

        {/* SUBMIT BUTTON */}
        <motion.button
          onClick={handleSubmit}
          disabled={!name.trim() || isLoading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: '100%',
            padding: '18px 24px',
            borderRadius: '16px',
            border: 'none',
            background: name.trim() 
              ? 'linear-gradient(135deg, #f0c060, #f59e0b)'
              : 'rgba(255,255,255,0.1)',
            color: name.trim() ? '#0a0a1a' : 'rgba(255,255,255,0.3)',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            cursor: name.trim() ? 'pointer' : 'not-allowed',
            boxShadow: name.trim() 
              ? '0 0 30px rgba(240,192,96,0.4), 0 0 60px rgba(240,192,96,0.2)'
              : 'none',
            transition: 'all 0.3s ease',
            letterSpacing: '0.5px',
          }}
        >
          {isLoading ? '🌙 Opening...' : 'Open My Eid Wish 🎉'}
        </motion.button>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: '24px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '1px',
          }}
        >
          Made with 💛 by Khulood
        </motion.p>

      </motion.div>

      {/* CSS ANIMATIONS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes gradientText {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>

    </main>
  )
}