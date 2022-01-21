var app = new Vue({
    el: '#app',
    data: {
      contatoreChat: null,
      inputChatUtente:"",
      clock: null,
        datiUtentiChat: [
          {
            name: 'Michele',
            avatar: 'img/avatar_2.jpg',
            visible: true,
            messages: [
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
              },
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
              },
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'Tutto fatto!',
              status: 'received'
              }
            ],
          },
          {
            name: 'Flavio',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            messages: [
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'Hai la macchina?',
              status: 'sent'
              },
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'Mi raccomando',
              status: 'sent'
              },
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'La benzina ce',
              status: 'received'
              }
            ],
          },
          {
            name: 'Bruno',
            avatar: 'img/avatar_4.jpg',
            visible: true,
            messages: [
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: '123 stella',
              status: 'sent'
              },
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'ti ho visto',
              status: 'sent'
              },
              {
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              text: 'Ma come hai fatto?',
              status: 'received'
              }
            ],
          },
        ]

    },
    methods:{
      sceltaChat: function(indice){
        this.contatoreChat = indice;
      },
      sendMessage: function(ichat){
        this.datiUtentiChat[ichat].messages.push({
          text: 'ok',
          status: 'received',
          date: dayjs().format("DD/MM/YYYY HH:mm:ss")
        });
      },

      addTodo: function(chat) {
        this.datiUtentiChat[chat].messages.push({
          text: this.inputChatUtente,
          status: 'sent',
          date: dayjs().format("DD/MM/YYYY HH:mm:ss")
        });
        this.inputChatUtente = "";
        this.clock = setTimeout(this.sendMessage(chat), 1000);
      },

    }
  })