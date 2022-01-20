var app = new Vue({
    el: '#app',
    data: {
      contatoreChat: null,
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
            name: 'Bruno',
            avatar: 'img/avatar_4.jpg',
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
        ]
    }
  })