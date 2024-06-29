// حقوق الطبع والنشر ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

استيراد {prepareWAMessageMedia، generateWAMessageFromContent، getDevice} من '@whiskeysockets/baileys'

معالج ثابت = async (m، {اتصال، نص، بادئة مستخدمة: prefijo }) => {
    جهاز ثابت = انتظار getDevice(m.key.id)؛
    معرف الذكر الثابت = m.key.participant || m.key.remoteJid؛

    إذا (الجهاز !== 'سطح المكتب' || الجهاز !== 'الويب') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/2784677013ba9efe6cc03.jpg'}}, { upload: conn.waUploadToServer })
        رسالة تفاعلية ثابتة = {
            الجسم: { النص: `اختبار مرحبًا @${mentionId.split('@')[0]}`.trim() },
            التذييل: { النص: `©JoAnimi للاختبار`.trim() }،  
            رأس: {
                العنوان: `اختبار`،
                العنوان الفرعي: `اختبار`،
                hasMediaAttachment: صحيح،
                رسالة الصورة: joanimiimg.imageMessage،
            },
            رسالة التدفق الأصلية: {
  						أزرار: [
                       {
                "الاسم": "اختيار واحد"،
                "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
                       },
                       {
                "الاسم": "الرد السريع"،
                "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\"massage\"}"
                        },
                        {
                 "الاسم": "cta_url"،
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"\"}"
                        },
                        {
                 "الاسم": "cta_call"،
                 "buttonParamsJson": "{\"display_text\":\"call\",\"id\":\"message\"}"
                        },
                        {
                 "الاسم": "cta_copy"،
                 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
                        },
                        {
                 "الاسم": "cta_reminder"،
                 "buttonParamsJson": "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
                        },
                        {
                 "الاسم": "cta_cancel_reminder"،
                 "buttonParamsJson": "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
                        },
                        {
                 "الاسم": "address_message"،
                 "buttonParamsJson": "{\"display_text\":\"address_message\",\"id\":\"message\"}"
                        },
                        {
                 "الاسم": "send_location"،
                 "buttonParamsJson": ""
                        }
  			  		]،
                messageParamsJson: ''
            }
        };        

        دع الرسالة = generateWAMessageFromContent(m.chat، {
            عرض مرة واحدة: {
                رسالة: {
                    رسالة تفاعلية،
                },
            },
        }, { userJid: conn.user.jid، مقتبس: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { مذكور Jid: [معرف الذكر] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } آخر {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['قايمهه'];
handler.tags = ['للاختبار'];
Handler.command = /^(imgboton)$/i;
معالج التصدير الافتراضي؛
