import fs from 'fs'

var handler = async (m, { text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *ادخل اسم الملف اللي عاوز تسمي بيه الامر*`, m, fake, )
if (!m.quoted.text) return conn.reply(m.chat, `🚩 *أدخل محتوى البرنامج المساعد*`, m, fake, )
let path = `plugins/${text}.js`
await fs.writeFileSync(path, m.quoted.text)
conn.reply(m.chat, `📂 *تم الحفظ في* ${path}`, m, fake, )

}
handler.help = ['saveplugin']
handler.tags = ['own']
handler.command = ['save', 'انشاملف']

handler.rowner = true

export default handler
  
