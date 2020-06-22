const TelegramBot = require('node-telegram-bot-api');
const { Random } = require('random-js');
const random = new Random;
const token = "OTOKENQUEOBOTFATHERMEDEU";

const  complimentSpeech = [
  'Você manda muito bem',
  'Arrasou',
  'Você é 10!',
  'Lacrou!!!!',
  'TOP',
]

const bot = new TelegramBot(token, { polling: true })
bot.on("new_chat_members", msg => {
    bot.sendMessage(
      msg.chat.id,
      `Olá ${msg.new_chat_member.first_name}, bem vindo ao Meetup da Reprograma!`
    );
  });
  
  bot.on("message", msg => {
    const chatId = msg.chat.id;
  });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  let randomMessage = complimentSpeech[random.integer(0, complimentSpeech.length - 1)]
    bot.sendMessage(chatId, randomMessage);
});