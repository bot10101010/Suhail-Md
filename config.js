const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923291408750";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_20_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBSFZ3MDI4NUFrSFBFQkRXdEhDL2trN2xLc3Z1L1FIOUltQXE4TjQ0V2JNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5MTQwODc1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjg4RTgyODFEOUI5NTFFODI5NjQwNzUzQTEyMkU4REJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUyOTgxNjA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjkxNDA4NzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNzEyQkQ3ODY2RUYzMkU5NzM3NjBFQkFFNEEyRDFFMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTI5ODE2MTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWNnbG1mTWhTYU92Xy1XZE02LTVyd1wiLFxuICBcInBob25lSWRcIjogXCI0Y2U5YTM1ZC05MDM3LTRlMjQtOWE3OC0zMWRmZTE3NDAxNTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAyMjAsXG4gICAgICAxODIsXG4gICAgICAxMzAsXG4gICAgICAxMDEsXG4gICAgICAyNDgsXG4gICAgICAxOCxcbiAgICAgIDM2LFxuICAgICAgNTUsXG4gICAgICAyMDQsXG4gICAgICAyOSxcbiAgICAgIDE3MixcbiAgICAgIDIsXG4gICAgICA2NyxcbiAgICAgIDIyMixcbiAgICAgIDY3LFxuICAgICAgMTk1LFxuICAgICAgNzgsXG4gICAgICAyNTIsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgOTYsXG4gICAgICA5NixcbiAgICAgIDIyNCxcbiAgICAgIDIxNSxcbiAgICAgIDE0NixcbiAgICAgIDE5MixcbiAgICAgIDg5LFxuICAgICAgMTcyLFxuICAgICAgOSxcbiAgICAgIDYwLFxuICAgICAgNzAsXG4gICAgICAxMTIsXG4gICAgICAxNjIsXG4gICAgICAxNzgsXG4gICAgICAyNDcsXG4gICAgICAxMDUsXG4gICAgICA4MixcbiAgICAgIDc3LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR2YvczhCRU4vQThjTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJkZmZxU3ZBVW03dHNOblRhQ0pDamF4eUU2MTQyN2lwTU5CUWdWWDc0VGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNFc5VU9ha2xrQnR4Vm5GNkVscDM5a2EvRHlQdzlLTUR2cFgxU0E1dk50a2lGaENHMkl4WlhidGZzczNOeGdJRTIrd2JZS3NiWWxya29YSGFjTW9QQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMG9lUTVZalZRYlF4MWhsTTFabTRNTVBwS0djOVV2WmpOakxCaXhDWVY1cWw3bVl2NlUxSk1SdVpsa2dWMWtjSE9QOGpQL1pldm1vZnM0WG5YWEFnaUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTE0MDg3NTA6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzg4MjcwMTU0NTcwMDoyM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLigonNrOKCgs2m4oKA4bef4oKDzaPigoLht6DigonNreKCgc2l4oKEzagg4oKA4bef4oKIzafigofht6HigoXNqVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkxNDA4NzUwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTI5ODE2MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKSGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpIaC5qc29uIjogIntcImtleURhdGFcIjpcImNvTkUvbzJDcm1EUXVNNVBxQ0czYXhVWi9qMXdWZmlJODRzTy9iMkFPSW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM2MTc4ODY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI5ODE2MDU4ODdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
