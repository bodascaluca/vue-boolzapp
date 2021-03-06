

Vue.config.devtools = true;

console.log(window)
dayjs.extend(window.dayjs_plugin_customParseFormat);

const app = new Vue(
    {
        el:"#root",
        data:{
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showMe:true,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            showMe:true,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            showMe:true,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            showMe:true,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            showMe:true,
                        }
                    ],
                }
            ],
            currentContact:0,
            newMessage: '',
            newRespons:'Ok',
            search:'',
            showMe:true,
            currentObjects:0,
        },
        methods: {
            openChat(item, index) {
                this.currentContact = index;
                // console.log(item);
                // this.contacts.forEach((contact) => {
                //     contact.visible = false;
                // });

                // item.visible = true;
            },
            addMessage:function(){
                console.log('sss')
                const addNewMessage = {
                    message: this.newMessage,
                    status: 'sent',
                    date: this.getCurrentTime(),
                }
                this.contacts[this.currentContact].messages.push(addNewMessage);
                this.newMessage = '';

                setTimeout(() => {
                    console.log('messaggio di risposta');
                    const addNewRespons = {
                        message:this.newRespons,
                        status: 'received',
                        date: this.getCurrentTime(),
                    }
                    this.contacts[this.currentContact].messages.push(addNewRespons);

                }, 1000);
            },
            filter:function (){
                console.log("ss")
                this.contacts.forEach(item => {
                    if(item.name.toLowerCase().includes(this.search.toLowerCase())){
                        item.visible = true;   
                    } else {
                        item.visible = false; 
                    }
                });
            },
            iconClicked(infodato){
                console.log('Ho preso il click')
                infodato.showMe = !infodato.showMe;
            },


            removeMessagge(infodato,currentContact,index ){
                console.log('removethemessage')
                infodato.forEach((item)=>{

                })
                infodato.  message[messages.message].splice(currentContact,1)
            },
            getCurrentTime(){
                return dayjs().format('DD-MM-YYYY HH:mm:ss');
            },
            getTime(date){
                const dayjsDate = dayjs(date, 'DD-MM-YYYY HH:mm:ss');
                return dayjsDate.format('HH:mm');

            }
        }
    }
);

const date = dayjs('28/03/2020 10:20:10', 'DD-MM-YYYY HH:mm:ss');
console.log(date.format('HH:mm'));
