import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    
if (!citel.quoted) return citel.reply (`*֎╎رد عـلـي رسـالـه شـخـص واكـتـب اسـم*`);
if ( !text ) return citel.reply( `*֎╎رد عـلـي رسـالـه شـخـص واكـتـب اسـم مـثـال┇.كونكت ELSA*`)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})

handler.help = ['konakt'];
handler.tags = ['ai'];
handler.limit = 2;

handler.command = /^(كونكت)$/i;

export default handler;

// Ni plugens
