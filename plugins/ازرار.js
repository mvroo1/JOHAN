//حقوق الطبع والنشر ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

استيراد {prepareWAMessageMedia، generateWAMessageFromContent، getDevice} من '@whiskeysockets/baileys'

معالج const = غير متزامن (m, { conn, text,usedPrefix: prefijo }) => {
    جهاز const = انتظار getDevice(m.key.id);
    constmentmentId = m.key.participant || m.key.remoteJid;

    إذا (الجهاز !== 'سطح المكتب' || الجهاز !== 'الويب') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/2784677013ba9efe6cc03.jpg'}}, { upload: conn.waUploadToServer })
        رسالة تفاعلية ثابتة = {
            الجسم: { النص: `test`.trim() },
            التذييل: { النص: `©JoAnimi للاختبار`.trim() }،  
            رأس: {
                العنوان: `اختبار مرحبًا @${mentionId.split('@')[0]}`،
                العنوان الفرعي: `اختبار`،
                hasMediaAttachment: صحيح،
                رسالة الصورة: joanimiimg.imageMessage،
            },
            رسالة التدفق الأصلية: {
  						أزرار: [
  							{
  								الاسم: 'single_select'،
  						  	ButtonParamsJson: JSON.stringify({
  						  		العنوان: 'انقر فوقي'،
  						  		الأقسام: [
  						  			{
  						  				العنوان: 'قائمة'،
  							  	    Highlight_label: "تشغيل"،
  						  		    الصفوف: [
  						  		    	{
  						  		    		العنوان: "اختبار"،
  										      العنوان: 'انقر فوقي'،
  									    	  الوصف: 'انقر هنا'
  								    		  المعرف: "اختبار"
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				Highlight_label: "تشغيل"،
  						  				الصفوف: [
  						  					{
  						  		    		العنوان: "اختبار"،
  										      العنوان: 'انقر فوقي'،
  									    	  الوصف: 'انقر هنا'
  								    		  المعرف: 'تيس'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				Highlight_label: "تشغيل"،
  						  				الصفوف: [
  						  					{
  						  		    		العنوان: "اختبار"،
  										      العنوان: 'انقر فوقي'،
  									    	  الوصف: 'انقر هنا'
  								    		  المعرف: "تي"
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  الاسم: 'الرد السريع'،
                                  ButtonParamsJson: JSON.stringify({
                                      عرض_نص: 'رد_سريع'،
                                      المعرف: `الرسالة`
                                  })
                              },
                              {
                                  الاسم: "cta_url"،
                                  ButtonParamsJson: JSON.stringify({
                                      عرض النص: 'url'،
                                      عنوان URL: 'https://www.google.com'،
                                      عنوان URL للتاجر: ''
                                  })
                              },
                              {
                                  الاسم: 'cta_call'،
                                  ButtonParamsJson: JSON.stringify({
                                      display_text: 'اتصال',
                                      معرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: "cta_copy"،
                                  ButtonParamsJson: JSON.stringify({
                                      Display_text: "نسخ"،
                                      المعرف: '123456789'
                                      كود_النسخ: 'رسالة'
                                  })
                              },
                              {
                                  الاسم: 'cta_reminder'،
                                  ButtonParamsJson: JSON.stringify({
                                      عرض النص: 'cta_reminder'،
                                      معرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'cta_cancel_reminder'،
                                  ButtonParamsJson: JSON.stringify({
                                      عرض النص: 'cta_cancel_reminder'،
                                      معرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: 'address_message'،
                                  ButtonParamsJson: JSON.stringify({
                                      Display_text: 'address_message'،
                                      معرف: 'الرسالة'
                                  })
                              },
                              {
                                  الاسم: "send_location"،
                                  ButtonParamsJson: JSON.stringify({
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        Let msg = createWAMessageFromContent(m.chat, {
            عرض مرة واحدة: {
                رسالة: {
                    رسالة تفاعلية،
                },
            },
        }, { userJid: conn.user.jid، مقتبس: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { مذكور Jid: [معرف الذكر] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } آخر {
        conn.sendFile(m.chat، 'JoAnimi•Error.jpg'، m)؛      
    }    
};
handler.help = ['imgboton'];
Handler.tags = ['للاختبار'];
Handler.command = /^(قايمه)$/i;
معالج التصدير الافتراضي؛
