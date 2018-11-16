const Discord = require( ' discord.js ' )
const client = new Discord.Client() ;
client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '$';
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
  client.on('message' , message => {
  var prefix = "*";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
     	 msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: |  „  „⁄«ﬁ» ﬂ")
            .addField(`** ·ﬁœ ﬁ„  »„Œ«·›… ﬁÊ«‰Ì‰ «·”Ì—›— „‰ Œ·«· ‰‘— ”Ì—›—«  «Œ—Ï  **` , `**«‰ ﬂ√‰ Â«–Â «·„ÌÊ  ⁄‰ ÿ—Ìﬁ «·Œÿ√  Ê«’· „⁄ «Õœ «⁄÷«¡ «·«œ«—…**`)
      .addField(`Dream`,`CopyRight`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
	 client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$bc-bot')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('Ã«— «—”«· «·—”«·… :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
	client.on('message', message => {
              var prefix = "$" ; // «·»—Ì›ﬂ”
            if (message.content.startsWith(prefix + "help")) { // «·«„—
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('     **????????????? ?{?«·«Ê«„— «·⁄«„…?}? ?????????????** ' ,' **   ** ')
.addField('     **? „⁄·Ê„«  Õ”«»ﬂ ?** ' ,' **$id** ')
.addField('     **? ”—⁄… «” Ã«»… «·»Ê  ?**  ' ,' **$ping** ')
.addField('     **? ··Õ’Ê· ⁄·Ì —«»ÿ «·»Ê  ?**  ' ,' **$invite** ')
.addField('     **? „⁄·Ê„«  «·»Ê  ?** ' , '**$bot-info**') 
.addField('     **? ·„⁄??Ê„«  «·—Ê„?** ' , '**$ch**') 
.addField('     **?«·«› «— ?** ' ,' ** $avatar**')
.addField('     **?  «—ÌŒ «·ÌÊ„?** ' , '**$date**')
.addField('     **? „⁄·Ê„«  «·”Ì—›— ? ** ' ,' **  $server-info  ** ')
.addField('     **? ·„⁄—›… Õ«·… «·«⁄÷«¡ ? ** ' ,' **  $members  ** ')
.addField('     **? ’√‰⁄ «·»Ê  ? ** ' ,' **  $bot-owner ** ')
.addField('     **????????????? ?{?«·«·⁄«»?}? ?????????????** ' ,' **   ** ')
.addField('     **? «‰Ã«“«  „«Ì‰ ﬂ—«›  ?  ** ' ,' **  $angaz ** ')
.addField('     ** ? ﬂ «»… ﬂ·«„ „À· ﬂ·«Ìœ »Ê  ?  ** ' ,' **  $s ** ')
.addField('     ** ? «·“Ê«Ã („“Õ…) „‰ «·‘Œ’ ?  ** ' ,' **  $marry ** ')
.addField('     ** ? ÕÃ— Ê—ﬁ „ﬁ’ ?  ** ' ,' **  $rps ** ')
.addField('     **????????????? ?{?«Ê«„— «·«œ«—…?}? ?????????????** ' ,' **   ** ')
.addField('     ** ? «⁄⁄ÿ«¡ «·⁄÷Ê »«‰œ ?  ** ' ,' **  $ban ** ')
.addField('     ** ? ÿ—œ «·⁄÷Ê „‰ «·”Ì—›— ?  ** ' ,' **  $kick ** ')
.addField('     ** ? „”Õ «·‘«  ?  ** ' ,' **  $clear ** ')


.setColor('RANDOM')
  message.author.sendEmbed(embed);
  client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**„‰‘‰ ‘Œ’**");
  if(!reason) return message.reply ("**«ﬂ » ”»» «·ÿ—œ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**·«Ì„ﬂ‰‰Ì ÿ—œ ‘Œ’ «⁄·Ï „‰ — » Ì Ì—ÃÂ «⁄ÿ«¡ «·»Ê  — »Â ⁄«·Ì**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
	client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome'); // «”„ «·—Ê„ ⁄‘«‰ ÌÃÌ ›ÌÂ «· —ÕÌ»
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | ‰Ê—  «·”Ì—›— Ì ﬁ·»Ì' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| «‰  «·⁄÷Ê —ﬁ„',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' «·‹”Ì—›—', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    client.on('message', message => {
            if (message.content.startsWith("$rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **«Ê·«** ' ,' **„„‰Ê⁄ «·”»** ')
.addField('     **À«‰Ì«** ' ,' **·«  ”ÊÌ ”»«„ ** ')
.addField('     **À«·À«** ' ,' **·«  “⁄Ã «·«Œ—Ì‰** ')
.addField('    **—«»⁄«**' ,' **„„‰Ê⁄ «·«⁄·«‰« ** ')
.addField('    **Œ«„”«**' ,' **«Õ —„ «·«Œ—Ì‰** ')
.addField('    **”«œ”«**' ,' **·«  ‰‘— ›Ì «·‘«  «Ê »· Œ«’** ')
.addField('    **”«»⁄«**' ,' **·«  ‰‘— —Ê«»ÿ!** ')
.addField('    **À«„‰«**' ,' **·«  ”ÊÌ ”»«„ «Ì„ÊÃÌ** ')
.addField('    ** «”⁄«**' ,' **·«  ÿ·» — »Â «·«œ«—Â !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
   let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith('Rcredit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith("Rdaily")) { // «·«„— Ê«·»—Ì›ﬂ”


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith('Rtrans')) { // «·«„— Õﬁ  ÕÊÌ· „⁄ «·»—Ì›ﬂ”
          if (!args[0]) {
            message.channel.send(`**Usage: Rtrans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: Rtrans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : Amount**  \n \`${x[x3]}\` ** : Write the Number to Complete **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embe
			   const moment = require('moment');
client.on('message', message => {
             var prefix = "$" // «·»—Ì›ﬂ”
if (message.content.startsWith(prefix + "time")) { // «·«„—
let user = message.mentions.users.first();
var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN'); //TN
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
.setDescription([`**«·Êﬁ **${moment().format('HH:mm:ss A')}${moment().format('YYYY/M/D')}**«·ÌÊ„** :${moment().format('dddd')}**«· «—ÌŒ**`])
message.channel.send(id)
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","-Members"));
    	var moment = require("moment");
client.on('message', message => {
if(message.author.bot) return;
  var prefix = '$'; // «·»—Ì›ﬂ”
  
  if (message.content.startsWith(prefix + "id")) { // «·«„—
      message.react("??") 
  if(!message.channel.guild) return message.reply(`**__»” »«·”Ì—›—« __**`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField('** «—ÌŒ œŒÊ·ﬂ «·œ”ﬂÊ—œ**:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('** «—ÌŒ œŒÊ·ﬂ «·”Ì—›—**:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("**«”„ﬂ**", `${message.author.username}`)
.addField('** «ﬁﬂ**', message.author.discriminator)
.addField('**«ÌœÌﬂ**', message.author.id)
.setFooter("?„⁄·Ê„« ﬂ?")  
    message.channel.sendEmbed(id);
	client.on('message', message => { if (message.content === "$count") { let embed = new Discord.RichEmbed() .addField('Count: ' , message.guild.memberCount).setColor("RANDOM").setDescription(`${message.guild.name}`) message.channel.sendEmbed(embed);} });
	client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.BOT_TOKEN) ;