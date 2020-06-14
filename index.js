const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login(token);



client.on('guildMemberAdd', member =>{
  let welcomeEmbed = new Discord.MessageEmbed()
  .setColor('#63e764')
  .setTitle('**Welcome to Aviation hangouts!**')
  .addField("**New Member:**", `Welcome ${member} to the Aviation Hangouts Discord Server! please enjoy your time here :) Make sure to read <#718914777291948113> If you have any issues please contact a member of staff, Thanks :slight_smile:`, false)
  .setTimestamp()
      member.guild.channels.cache.get('718914777291948113').send(welcomeEmbed)
});



  client.on('message', msg => {
    if(msg.content === '!version') {
        msg.reply('I am currently in version 1.50 :slight_smile:')
  }
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


  client.on('message', msg => {
    if (msg.content === '!report') {
      msg.channel.send('To report an issue with the bot, such as its offline or isnt respnding, please DM Shadow Wolfy#8860, for any reports against a users behaviour please DM any available moderators :slight_smile:');
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
    
    if(!message.member.roles.cache.some(r=>["Staff"].includes(r.name)))
      return message.reply("You dont have permission to do this :rolling_eyes:");
    
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("Uh Oh, missing permissions, please give me permissions to perform this action");
    
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    
    if(!message.member.roles.cache.some(r=>["Staff"].includes(r.name)))
      return message.reply("You dont have permission to do this :rolling_eyes:");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("Uh Oh, missing permissions, please give me permissions to perform this action");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
}); 




