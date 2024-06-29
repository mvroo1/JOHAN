let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let videoUrl = 'https://telegra.ph/file/73ef7488ba7f7f3e613ee.mp4';
let username = conn.getName(who)
let handler = async (m, { conn, args, usedPrefix, command }) => {   
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*┃━━━━━⬣𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⬣━━━━━┃*'
            },
            body: {
              text: '*اهلا بيك في بوت مارو*\n⁩\n*⁩تفضل القائمة يا  : ${taguser}*\n\n*اسم البوت : بـوت مـارو*\n\n*▢وقت التشغيل : ${uptime}*\n\n*▢اليوم : ${week}*\n\n*▢التاريخ : ${date}*\n\n*▢مطوري : wa.me/201208386317*\n\n*┃━━━━━⬣𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⬣━━━━━┃*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '◡̈⃝| قائـمـة📰الاوامـر|◡̈⃝',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'yas',
                        rows: [
                          {
                            header: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                            title: '',
                            description: '',
                            id: '.قسم1'
                          },
                          {
                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                            title: '',
                            description: '',
                            id: '.قسم2'
                          },
                          {
                            header: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                            title: '',
                            description: '',
                            id: '.قسم3'
                          },
                          {
                            header: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                            title: '',
                            description: '',
                            id: '.قسم4'
                          },
                          {
                            header: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                            title: '',
                            description: '',
                            id: '.قسم5'
                          }, 
                          {
                            header: '◡̈⃝🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                            title: '',
                            description: '',
                            id: '.قسم6'
                          },
                            {
                            header: '◡̈⃝💆🏻❏━━│قسم الايدت│━━❏◡̈⃝💆🏻',
                            title: '',
                            description: '',
                            id: '.قسم7'
                          },
                            {
                            header: '◡̈⃝🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                            title: '',
                            description: '',
                            id: '.قسم8'
                          },
                            {
                            header: '◡̈⃝🤴🏻❏━━│قسم المطوࢪ│━━❏◡̈⃝🧏🏻',
                            title: '',
                            description: '',
                            id: '.قسم9'
                          },
                            {
                            header: '◡̈⃝🤴🏻❏━━│ المطوࢪ│━━❏◡̈⃝🧏🏻',
                            title: '',
                            description: '',
                            id: '.المطور'
                          },
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i

export default handler
