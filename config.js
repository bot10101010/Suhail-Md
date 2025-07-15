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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923414047467";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_06_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4RmxMUzJmd0xBM3BFQUpMR2Y2dkU0WWk1eUZPNXRrZEZsR2xpVjNKWmRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzenc0NnlueFQyYUEyb2VIUFhuQmd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkZTUyZjVlLTMyMmItNDY4Ny1hMzE4LTUzNjRkNGY0YjM3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAyMjMsXG4gICAgICAxMzgsXG4gICAgICA2MixcbiAgICAgIDU0LFxuICAgICAgMTMwLFxuICAgICAgMTEsXG4gICAgICAyNTAsXG4gICAgICAxNTAsXG4gICAgICAyMjcsXG4gICAgICAyMzIsXG4gICAgICAxMTksXG4gICAgICAxODMsXG4gICAgICAxMTEsXG4gICAgICAyNDksXG4gICAgICA2NixcbiAgICAgIDEzLFxuICAgICAgMjAwLFxuICAgICAgMTcxLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICA2NSxcbiAgICAgIDI0NyxcbiAgICAgIDEzMixcbiAgICAgIDI0OCxcbiAgICAgIDE4NSxcbiAgICAgIDE2MCxcbiAgICAgIDI0NyxcbiAgICAgIDE5NixcbiAgICAgIDM1LFxuICAgICAgMTIsXG4gICAgICAxOTgsXG4gICAgICAzLFxuICAgICAgMjQxLFxuICAgICAgNDcsXG4gICAgICAyMzQsXG4gICAgICA5NyxcbiAgICAgIDIwOSxcbiAgICAgIDIwOSxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tM3BmSUdFTGFuMThNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3JKTzNiSXpKNUJOSDAwd04wTXhkVGtmZFhyT2NoaTlWK1IrdGNKRTN6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4RnJmVDB2OEREdXpHeXlhS2VzVUUxdlpYL1paUnYwZ3B6RG9GOGxrUWNsbHNJejNpYTBwMW9rYUJOczVnYzVuTnJ3S3k5WGlIa3ArRmNsTTZJN0ZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOOHlRaHJZMTFtNUJ1ODBoa1hLU0U4SC9hRGVEaGo4TDVqSTRFTkNXWEE5cG8ya0ZTZkd3a296eUZKeVR2ZkpOZnlUOWZBa1dycmxaSnRlcXRvcTVEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxNDA0NzQ2Nzo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwMTU2ODIxNDE4MDEzOjUzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE0MDQ3NDY3OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTI1NTIzNzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPbVRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tUy5qc29uIjogIntcImtleURhdGFcIjpcIkdGdUx1MlU5Y2d5Z0dlQXV2d2tDVUg4c3ZJeVJubi9CdlZsUGRmM1JWZDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1MDMwMTM5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUyNDc4MTkwMDQ3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21ULmpzb24iOiAie1wia2V5RGF0YVwiOlwienJJY1djRzFLdFVmQysyNDcrQnlDVGV1a0QyajM3ZkNXZ2xiUFZKQ1VzYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwMzAxMzk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUyNDc4MjMyNDYwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21VLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNVBVOHV5M0JYbjlrTm5MVGdoakp2bEFTdW91eWYvcUFWbE0rcTdxcUlSQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwMzAxNDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUyNDc4MjQwMTA2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21WLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnk0Qi80K3JDZlpmREcrU1lrYUpjMTNyNWVmZjVTNzJmWk9JUTVDU2FWVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUwMzAxNDAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkT3MyYi9zWFo0czhKaUp5OFE5cGhwS0prRW1GSk1GZ3M2KzdCMk9xZ3pvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTAzMDE0MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTI1NTIyMDA0ODBcIn0iCn0="  // PUT your SESSION_ID 


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
