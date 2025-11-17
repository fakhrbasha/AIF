'use client';

import { useState } from 'react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Modern Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '26px',
          fontWeight: 'bold',
          zIndex: 9999,
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          transition: '0.3s ease',
          transform: open
            ? 'rotate(180deg) scale(1.1)'
            : 'rotate(0deg) scale(1)',
        }}
      >
        {open ? '✖' : '🤖'}
      </button>

      {/* Chat Box */}
      <div
        style={{
          position: 'fixed',
          bottom: open ? '96px' : '0px',
          right: '24px',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open
            ? 'translateY(0) scale(1)'
            : 'translateY(40px) scale(0.9)',
          width: '380px',
          height: '620px',
          background: 'white',
          borderRadius: '18px',
          overflow: 'hidden',
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 8px 35px rgba(0,0,0,.25)',
          zIndex: 9999,
        }}
      >
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/dyEZJqla4g4XhysgASRwR"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>

      {/* Mobile Responsive */}
      <style>
        {`
        @media (max-width: 768px) {
          div[style*="height"] {
            width: 90% !important;
            height: 70% !important;
            right: 5% !important;
            bottom: ${open ? '90px' : '0px'} !important;
          }
        }
      `}
      </style>
    </>
  );
}
