const root = new Vue({
    el: '#root',
    data: {
        contacts: [        
        {
            name: 'Michele',
            lastAccess: 'Ultimo accesso ieri alle 16.30',
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
            lastAccess: 'Ultimo accesso ieri alle 13.50',
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
            lastAccess: 'Ultimo accesso ieri alle 18.35',
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

                const contact = this.contacts[this.chatOpened];

                const message = {
                    messageTime: currentTime,
                    message: this.newMessage,
                    type: "sent",
                };

                contact.chat.push(message);
                this.newMessage = '';  
                
                setTimeout( () => {
                    contact.lastAccess = 'Online';
                },2500)

                setTimeout( () => {
                    contact.lastAccess = 'Sta scrivendo...';
                },5000)

                setTimeout( () => {
                    contact.lastAccess = 'Online';

                    let contactMessage = {
                        messageTime: currentTime,
                        message: this.contactAnswer,
                        type: 'received',
                    }
                    contact.chat.push(contactMessage);
                    this.newMessage = '';  
    
                }, 7500)

                setTimeout( () => {
                    contact.lastAccess = `Oggi alle ${currentTime}`;
                }, 10000)
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