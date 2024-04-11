import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    
    if (!text) {
      return conn.reply(m.chat, `ادخل نصا للرد عليه.\n*مثال: ${usedPrefix + command} أعطني ترميز بايثون للآلة الحاسبة!*`, m);
    }
      
m.react('🤖')
    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      return conn.reply(m.chat, 'غير قادر على معالجة طلبك في هذا الوقت.', m);
    }

    const data = await response.json();
    const result = data.result;

    if (!result) {
      return conn.reply(m.chat, 'غير قادر على معالجة طلبك في هذا الوقت', m);
    }

    conn.reply(m.chat, result, m);
  } catch (error) {
    
    throw eror
  }
};

handler.help = ['gemini2'];
handler.tags = ['ai'];

handler.command = /^بوت|chatgpt|ميجو|ai$/i;

export default handler;

// Ni plugens
