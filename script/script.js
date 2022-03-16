const root = new Vue({
    el: '#root',
    data: {
        contacts: [        
        {
            name: 'Michele',
            img: '_1',
            visible: true,
            chat: [
                {   
                    messageTime: '15.30',
                    message: 'Hai portato a spasso il cane?',
                    type: 'sent'
                },
                {   
                    messageTime: '15.50',
                    message: 'Ricorda di stendere i panni',
                    type: 'sent'
                },
                {   
                    messageTime: '16.30',
                    message: 'Tutto fatto!',
                    type: 'received'
                },
            ]
        },
        {
            name: 'Marzio',
            img: '_2',
            visible: true,
            chat: [
                {   
                    messageTime: '12.34',
                    message: 'Come va?',
                    type: 'sent'
                },
                {   
                    messageTime: '13.50',
                    message: 'Bene, tu?',
                    type: 'received'
                },
                {   
                    messageTime: '14.30',
                    message: 'Bene dai',
                    type: 'sent'
                },
            ]

        },
        {
            name: 'Fabio',
            img: '_3',
            visible: true,
            chat: [
                {   
                    messageTime: '18.34',
                    message: '1,2,3 ...',
                    type: 'sent'
                },
                {   
                    messageTime: '18.35',
                    message: 'Stella?',
                    type: 'received'
                },
                {   
                    messageTime: '18.37',
                    message: 'No! Stai la!',
                    type: 'sent'
                },
            ]

        }],
        chatOpened: null,
        newMessage: '',
        contactSearch: '',
        contactAnswer: 'ok',
    },
    methods: {
        chatSelected(index) {
            this.chatOpened = index;
        },
        sendMessage() {
            if (this.newMessage !== '') {
                const currentDate = new Date();
                const currentTime = currentDate.getHours() + '.' + currentDate.getMinutes();

                const message = {
                    messageTime: currentTime,
                    message: this.newMessage,
                    type: "sent",
                };

                this.contacts[this.chatOpened].chat.push(message);
                this.newMessage = '';  
                
                setTimeout( () => {
                    let contactMessage = {
                        messageTime: currentTime,
                        message: this.contactAnswer,
                        type: 'received',
                    }
                    this.contacts[this.chatOpened].chat.push(contactMessage);
                    this.newMessage = '';  
    
                }, 1500)
            }
        },        
        contactFilter() {
            this.contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(this.contactSearch)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });            
        },
    },

})