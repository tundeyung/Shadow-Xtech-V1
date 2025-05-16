


import moment from 'moment-timezone';
import config from '../../config.cjs';
export default async function GroupParticipants(sock, { id, participants, action }) {
   try {
      const metadata = await sock.groupMetadata(id)

      // participants
      for (const jid of participants) {
         // get profile picture user
         let profile
         try {
            profile = await sock.profilePictureUrl(jid, "image")
         } catch {
            profile = "https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu"
         }

         // action
         if (action == "add" && config.WELCOME ) {
           const userName = jid.split("@")[0];
                    const joinTime = moment.tz('Africa/Nairobi').format('HH:mm:ss');
                    const joinDate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY');
                    const membersCount = metadata.participants.length;
            sock.sendMessage(id, {
               text: `╭────✧〈 *ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ᴡᴇʟᴄᴏᴍᴇ ᴢᴏɴᴇ* 〉 ✧───◆
┴╭─────────────────────━⊷❍
┃🟢┃
┃👋┃ ✦ ʜᴇʏ @${userName}!
┃🎀┃ ✦ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ *${metadata.subject}*
┃💬┃ ✦ ʏᴏᴜ'ʀᴇ ᴏᴜʀ ${membersCount}ᴛʜ ᴍᴇᴍʙᴇʀ
┃📆┃ ✦ ᴊᴏɪɴᴇᴅ: ${joinTime} | ${joinDate}
┃🟢┃
┬╰─────────────────────━⊷❍
╰─── ···▸Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ··──◆❍`, contextInfo: {
                  mentionedJid: [jid],
                  externalAdReply: {
                     title: `ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴏᴜʀ ɢʀᴏᴜᴘ`,
                     mediaType: 1,
                     previewType: 0,
                     renderLargerThumbnail: true,
                     thumbnailUrl: metadata.subject,
                     sourceUrl: 'https://sid-bhai.vercel.app'
                  }
               }
            })
         } else if (action == "remove" && config.WELCOME ) {
           const userName = jid.split('@')[0];
                    const leaveTime = moment.tz('Africa/Nairobi').format('HH:mm:ss');
                    const leaveDate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY');
                    const membersCount = metadata.participants.length;
            sock.sendMessage(id, {
               text: `╭────✧〈 *ꜱʜᴀᴅᴏᴡ-xᴛᴇᴄʜ ɢᴏᴏᴅʙʏᴇ ᴘᴏʀᴛᴀʟ* 〉 ✧───◆
┴╭─────────────────────━⊷❍
┃🟢┃
┃👋┃ ✦ ꜰᴀʀᴇᴡᴇʟʟ @${userName}
┃🔒┃ ✦ ʏᴏᴜ ʟᴇғᴛ *${metadata.subject}*
┃💬┃ ✦ ɴᴏᴡ ᴡᴇ ᴀʀᴇ ${membersCount} sᴛʀᴏɴɢ
┃📆┃ ✦ ʟᴇꜰᴛ ᴀᴛ: ${leaveTime} | ${leaveDate}
┃🟢┃
┬╰─────────────────────━⊷❍
╰─── ···▸Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ··──◆❍`, contextInfo: {
                  mentionedJid: [jid],
                  externalAdReply: {
                     title: `ɢᴏᴏᴅʙʏᴇ ᴀ ғᴏʟʟᴇɴ sᴏʟᴅɪᴇʀ`,
                     mediaType: 1,
                     previewType: 0,
                     renderLargerThumbnail: true,
                     thumbnailUrl: profile,
                     sourceUrl: 'https://sid-bhai.vercel.app'
                  }
               }
            })
         }
      }
   } catch (e) {
      throw e
   }
}
