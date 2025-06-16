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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsMnhYdCtzSnk3UnFEeFVobEVEUm5Dd1dvS25QdDRtd09rNit5UElYRHB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0NzExNjY4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQxNUY2NkY4ODNBODhFOUQ4MEEzN0I2Rjg0NzY5Q0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUwMDc0NDc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlAzb09sWndwUUJLMWlfTFJ0d3FYZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQ0ZDFiMzEtM2RkYy00ZTA3LWJmNjQtZTI1NWE1YzU3MThlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDUsXG4gICAgICAxOTMsXG4gICAgICAxMzQsXG4gICAgICAxOTIsXG4gICAgICAxLFxuICAgICAgMjI0LFxuICAgICAgNzYsXG4gICAgICAxODAsXG4gICAgICAxMyxcbiAgICAgIDQ0LFxuICAgICAgMTc5LFxuICAgICAgMTkzLFxuICAgICAgODUsXG4gICAgICAyMyxcbiAgICAgIDIzOSxcbiAgICAgIDE4MCxcbiAgICAgIDE2OCxcbiAgICAgIDE2MixcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxNDUsXG4gICAgICA2NCxcbiAgICAgIDIzNyxcbiAgICAgIDgyLFxuICAgICAgMTc1LFxuICAgICAgNzAsXG4gICAgICA1LFxuICAgICAgMTM5LFxuICAgICAgNTMsXG4gICAgICA2MixcbiAgICAgIDIxLFxuICAgICAgNzksXG4gICAgICAxOCxcbiAgICAgIDE3MSxcbiAgICAgIDE0MixcbiAgICAgIDE1LFxuICAgICAgMTIyLFxuICAgICAgMjEzLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHY3K2RVQ0VPS0l3TUlHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ0alVXbzQrK1NKYy9aclZNeTJKR3RsdEN0MVh0V05DbFNFbi84YTAxY2crTEVUS1RSeVJkQ2Q5b0YvNEdqUmk5U1JrVU53MTRWK1lRN2tvY2hLQ0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZieGVyNDRZVmhGRlBxaWxmQkx3R2hKcWMwMmhaOEcvbnFjcFBjUENHNG5QLzJXUnRFL3NIWFg0OFQ5WFQ3RTBjUitxRERxSWJYdWxaTWFGcWl3M2pBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo5NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTAwNzQ0NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCY3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJjeS5qc29uIjogIntcImtleURhdGFcIjpcIjF4ZDBtbk4rc253Y2tld2FZcTZKUk94ODlQcU1OSWdlKzRvVHBCTXN2V0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MTYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUwMDc0NDU1MzcyXCJ9Igp9"  // PUT your SESSION_ID 


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
