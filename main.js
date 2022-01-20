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
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
              },
              {
              date: '10/01/2020 16:15:22',
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
              date: '10/01/2020 15:30:55',
              text: 'Hai la macchina?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              text: 'Mi raccomando',
              status: 'sent'
              },
              {
              date: '10/01/2020 16:15:22',
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
              date: '10/01/2020 15:30:55',
              text: '123 stella',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              text: 'ti ho visto',
              status: 'sent'
              },
              {
              date: '10/01/2020 16:15:22',
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
          status: 'received'
        });
      },

      addTodo: function(chat) {
        this.datiUtentiChat[chat].messages.push({
          text: this.inputChatUtente,
          status: 'sent'
        });
        this.inputChatUtente = "";
        this.clock = setInterval(this.sendMessage(chat), 1000);
      },

    }
  })
