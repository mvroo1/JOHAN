// @type {استيراد('@whiskeysockets/baileys')}

ثابت { بروتوكول، توليد WAMessage، هل JidsSameUser، فك تشفير التصويت، } = (انتظر الاستيراد ('@whiskeysockets/baileys')). default؛
تصدير دالة غير متزامنة all(m, chatUpdate) {
إذا (m.isBaileys) {
يعود
}
إذا لم تكن (m.message) {
يعود
}
إذا (!(m.message.buttonsResponseMessage || m.message.templateButtonReplyMessage || m.message.listResponseMessage || m.message.interactiveResponseMessage)) {
يعود
}
دعني أعرف
إذا (m.message.buttonsResponseMessage) {
المعرف = m.message.buttonsResponseMessage.selectedButtonId
} وإلا إذا (m.message.templateButtonReplyMessage) {
المعرف = m.message.templateButtonReplyMessage.selectedId
} وإلا إذا (m.message.listResponseMessage) {
المعرف = m.message.listResponseMessage.singleSelectReply?.selectedRowId؛
} وإلا إذا (m.message.interactiveResponseMessage) {
المعرف = JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id
}
ثابت النص = m.message.buttonsResponseMessage?.selectedDisplayText || m.message.templateButtonReplyMessage?.selectedDisplayText || m.message.listResponseMessage?.title
دع isIdMessage = خطأ
دع usePrefix
لـ (اسم ثابت في global.plugins) {
البرنامج المساعد const = global.plugins[name]
إذا لم يكن هناك ملحق
يكمل
}
إذا (البرنامج المساعد. معطل) {
يكمل
}
إذا لم يتم اختيار ['تقييد']) {
إذا (plugin.tags && plugin.tags.includes('admin')) {
يكمل
}}
إذا (نوع البرنامج المساعد!== 'وظيفة') {
يكمل
}
إذا لم يكن الأمر plugin.command
يكمل
}
const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
const _prefix = plugin.customPrefix؟ plugin.customPrefix : هذه البادئة؟ this.prefix : global.prefix
const match = (_prefix مثيل RegExp ? [[_prefix.exec(id), _prefix]] : Array.isArray(_prefix) ? _prefix.map((p) => {
const re = p مثيل RegExp؟ ع : جديد RegExp(str2Regex(p));
إرجاع [re.exec(id)، إعادة]
}):
typeof _prefix === 'سلسلة'؟
[[new RegExp(str2Regex(_prefix)).exec(id)، جديد RegExp(str2Regex(_prefix))]] :
[[[]، RegExp الجديد]]
).العثور على((ع) => ص[1])
إذا ((usedPrefix = (match[0] || '')[0])) {
ثابت noPrefix = id.replace(usedPrefix، '')
دع [الأمر] = noPrefix.trim().split` `.filter((v) => v)
الأمر = (الأمر || '').toLowerCase()
const isId = plugin.command مثيل RegExp؟
plugin.command.test(الأمر) :
Array.isArray(plugin.command) ؟
plugin.command.some((cmd) => cmd instanceof RegExp؟
cmd.test(الأمر) :
كمد === الأمر،
) :
نوع plugin.command === 'string' ؟
plugin.command === الأمر:
خطأ شنيع
إذا لم يكن (المعرف) {
يكمل
}
isIdMessage = صحيح
}}
const messages = await generateWAMessage(m.chat, {text: isIdMessage ? id: text, mentions: m.mentionedJid}, {
معرف المستخدم: this.user.id،
مقتبس: m.quoted && m.quoted.fakeObj،
})
الرسائل.المفتاح.مني = areJidsSameUser(m.sender، this.user.id)
messages.key.id = m.key.id
messages.pushName = m.name
إذا (m.isGroup) {
الرسائل.المفتاح.المشارك = الرسائل.المشارك = المرسل
}
رسالة ثابتة = {
...تحديث الدردشة،
الرسائل: [proto.WebMessageInfo.fromObject(messages)].map((v) => (v.conn = this, v))،
النوع: "إلحاق"،
}
هذا.ev.emit('messages.upsert', msg)
}
