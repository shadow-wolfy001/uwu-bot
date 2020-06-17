const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login('insert-token-here');

process.setMaxListeners(20);

client.on('guildMemberAdd', member =>{
  let welcomeEmbed = new Discord.MessageEmbed()
  .setColor('#63e764')
  .setTitle('**Welcome to Aviation hangouts!**')
  .addField("**New Member:**", `Welcome ${member} to the Aviation Hangouts Discord Server! please enjoy your time here :) Make sure to read <#718916575301730359> If you have any issues please contact a member of staff, Thanks :slight_smile:`, false) .setThumbnail('https://cdn.discordapp.com/attachments/718914777291948113/722128964373446660/unknown.png')
  .setTimestamp()

      member.guild.channels.cache.get('718914777291948113').send(welcomeEmbed)
});

client.on('message', msg =>{
  let WelcomeTestEmbed = new Discord.MessageEmbed()
  .setColor('#63e764')
  .setTitle('**Welcome to Aviation hangouts!**')
  .addField("**New Member:**", `Welcome ${msg.author.username} to the Aviation Hangouts Discord Server! please enjoy your time here :) Make sure to read <#718916575301730359> If you have any issues please contact a member of staff, Thanks :slight_smile:`, false) .setThumbnail('https://cdn.discordapp.com/attachments/718914777291948113/722128964373446660/unknown.png')
  .setTimestamp()
  if(msg.content === '!welcome')
      msg.channel.send(WelcomeTestEmbed)
});

  client.on('message', msg => {
    let VersionEmbed = new Discord.MessageEmbed()
    .setColor('#63e764')
    .setTitle(`${msg.author.username}, i am currently in version 1.5.5`)
    if(msg.content === '!version') {
        msg.channel.send(VersionEmbed)
  }
});


client.on('message', msg =>{
  let reportEmbed = new Discord.MessageEmbed()
  .setColor('#6a1ad8')
  .setTitle(`${msg.author.username}`)
  .addField("**HOW TO REPORT:**", `${msg.author.username}, To report an issue with the bot DM Shadow Wolfy#8860, to report a user's behaviour ping any available staff member:`, false)
  .setTimestamp()
  if(msg.content === '!report')
      msg.channel.send(reportEmbed)
});


client.on('message', msg =>{
  let HelpEmbed = new Discord.MessageEmbed()
  .setColor('#6a1ad8')
  .setTitle('**HELP HAS BEEN CALLED!**')
  .addField("**Help has arrived!:**", `${msg.author.username}, My commands are !welcome, !ban, !kick, !invites, !waddle, ahegao, !bullshit, !sorry, !akward, !ping, !version More to come soon :slight_smile:`, false)
  .setTimestamp()
  if(msg.content === '!help')
      msg.channel.send(HelpEmbed)
});

client.on('message', msg =>{
  let WaddleEmbed = new Discord.MessageEmbed()
  .setColor('#Blue')
  .setTitle('**Waddle!**')
  .setImage('https://media.discordapp.net/attachments/592463507124125706/721910509783351336/Penguin_bots_bot_pfp_.png?width=319&height=475')
  .setTimestamp()
  if(msg.content === '!waddle')
      msg.channel.send(WaddleEmbed)
});



client.on('message', msg =>{
  let AkwardEmbed = new Discord.MessageEmbed()
  .setColor('#Blue')
  .setTitle(`${msg.author.username}, o.0`)
  .setImage('https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-15268759')
  .setTimestamp()
  if(msg.content === '!akward')
      msg.channel.send(AkwardEmbed)
});



client.on('message', msg =>{
  let AhegaoEmbed = new Discord.MessageEmbed()
  .setColor('#Blue')
  .setTitle('**Ahegao!**')
  .setImage('https://cdn.discordapp.com/avatars/415970164077756419/df2b320f675c8e58249445275327a5b9.png?size=256')
  .setTimestamp()
  if(msg.content === '!ahegao')
      msg.channel.send(AhegaoEmbed)
});


client.on('message', msg =>{
  let CyberBullyEmbed = new Discord.MessageEmbed()
  .setColor('#Blue')
  .setTitle(`${msg.author.username}, would like to apologise`)
  .setImage('https://cdn.discordapp.com/attachments/592463507124125706/721930224094281828/image0.jpg')
  .setTimestamp()
  if(msg.content === '!sorry')
      msg.channel.send(CyberBullyEmbed)
});


client.on('message', msg =>{
  let BullshitEmbed = new Discord.MessageEmbed()
  .setColor('#Blue')
  .setTitle(`${msg.author.username}, has seen enough of your bullshit`)
  .setImage('https://cdn.discordapp.com/attachments/592463507124125706/721930167349542932/unknown.gif')
  .setTimestamp()
  if(msg.content === '!bullshit')
      msg.channel.send(BullshitEmbed)
});


  
  client.on('message', msg => {
  if (msg.content === '!invites') {

    var userId = msg.author.id;

    var userInvites = msg.guild.fetchInvites().then(invites => invites.find(invite => invite.inviter.id === userId));

    var useAmount = userInvites.uses;

    if (useAmount === undefined) {

        msg.channel.send(`${msg.author.username} has 0 invites`);
    }

    else {

        msg.channel.send(`${msg.author.username} has ${useAmount} invites`);
    }
}
  }); 



 


  
const config = require("./config.json");


client.on("ready", () => {
 
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  
  client.user.setActivity(`Watching over ${client.guilds.cache.size} servers`);
});

client.on("guildCreate", guild => {
  
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`I am currently stalking ${client.guilds.cache.size} servers`);
});

client.on("guildDelete", guild => {

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`I am currently stalking ${client.guilds.cache.size} servers`);
});


client.on("message", async message => {
  
  if(message.author.bot) return;
  

  if(!message.content.startsWith(config.prefix)) return;
  
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 
  
  if(command === "ping") {

    const m = await message.channel.send("Getting the ping");
    m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
  
  if(command === "say") {
    if(!message.member.roles.cache.some(r=>["Staff"].includes(r.name)))
    return message.reply("Lol noob, you dont have permission");
   
    const sayMessage = args.join(" ");
    
    message.delete().catch(O_o=>{}); 
    
    message.channel.send(sayMessage);
  }
  if(command === "kick") {
    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('#cf1313')
    .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
    .setTimestamp()
    
    if(!message.member.roles.cache.some(r=>["Staff"].includes(r.name)))
      return message.channel.send(RolePermsEmbed);


    
    let member = message.mentions.members.first();
    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('#cf1313')
    .setTitle(`${message.author.username}, please mention a valid user of this server`)
    .setTimestamp()

    let missingBotKickPermmisionsEmbed = new Discord.MessageEmbed()
    .setColor('#cf1313')
    .setTitle(`${message.author.username}, I dont have the permmision to do this.`)

    if(!member)
    return message.channel.send(validMemberEmbed)
    if(!member.kickable) 
    return message.channel.send(missingBotKickPermmisionsEmbed)
    

    let missingBotPermmisionsEmbed = new Discord.MessageEmbed()
    .setColor('#cf1313')
    .setTitle(`${message.author.username}, I dont have the permmision to do this.`)
    
    let reason = args.slice(1).join(' ');
    let kicksuccesEmbed = new Discord.MessageEmbed()
    .setColor('#20d44d')
    .setTitle(`The user has been kicked by ${message.author.tag} because: ${reason}`)
    
    if(!reason) reason = "No reason provided";
    
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(kicksuccesEmbed);

  }
  
  if(command === "ban") {
      let RolePermsEmbed = new Discord.MessageEmbed()
      .setColor('#cf1313')
      .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
      .setTimestamp()
      if(!message.member.roles.cache.some(r=>["Staff"].includes(r.name)))
      return message.channel.send(RolePermsEmbed);




      let member = message.mentions.members.first();
    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('#cf1313')
    .setTitle(`${message.author.username}, please mention a valid user of this server`)
    .setTimestamp()

let missingBotPermmisionsEmbed = new Discord.MessageEmbed()
.setColor('#cf1313')
.setTitle(`${message.author.username}, I dont have the permmision to do this.`)

let reason = args.slice(1).join(' ');
let bansuccesEmbed = new Discord.MessageEmbed()
.setColor('#20d44d')
.setTitle(`The user has been banned by ${message.author.tag} because: ${reason}`)


    if(!member)
      return message.channel.send(validMemberEmbed);
    if(!member.bannable) 
      return message.channel.send(missingBotPermmisionsEmbed);

    if(!reason) reason = "No reason provided";
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.channel.send(bansuccesEmbed);
  }
}); 




