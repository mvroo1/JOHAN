//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*ارحب*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^جاك$/i.test(m.text)) { 
     responses = [ 
'*عايز اي🗿*'
     ]; 
 }else if (/^ازيك$/i.test(m.text)) { 
     responses = [ 
'*بخير طول منتا بخير*'
     ]; 
   }else if (/^جاك هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ومش عايز ارتبط🏌🏻‍♂💔*'
   ]; 
   }else if (/^بتحبني|بوت $/i.test(m.text)) { 
     responses = [ 
'*مافيش بوت غيرك 🐦*',
'*اكيد احبك*',
'*يعععع هحبك ليه انت*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم الهاي ورحمة الله وبركاته*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*انطر ابلكاش*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'خدتك عليه',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'وهحبك ليه يعني😒',  

     ];
     }else if (/^فين البوت$/i.test(m.text)) { 
     responses = [ 
       'فطيزك🤭',  

     ];
     }else if (/^بوت|بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي جاك وربنا*',  

     ];
     }else if (/^جاك$/i.test(m.text)) { 
     responses = [ 
       '*قلبوو✨*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^Nezuko$/i.test(m.text)) { 
     responses = [ 
       '*تانجيرو☹️*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
