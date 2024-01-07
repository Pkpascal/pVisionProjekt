export interface Contact {
    image: string;
    class: string;
    name: string;
    email: string;
}

export const contacts: Contact[] = [
    {
        image: 'assets/images/users/1.jpg',
        class: 'online',
        name: 'Beispiel 1',
        email: 'beispiel@1.com'
    },
    {
        image: 'assets/images/users/2.jpg',
        class: 'busy',
        name: 'Beispiel 2',
        email: 'beispiel@2.com'
    },
    {
        image: 'assets/images/users/4.jpg',
        class: 'offline',
        name: 'Beispiel 3',
        email: 'beispiel@3.com'
    },
    {
        image: 'assets/images/users/5.jpg',
        class: 'online',
        name: 'Beispiel 4',
        email: 'beispiel@4.com'
    },
    {
        image: 'assets/images/users/6.jpg',
        class: 'busy',
        name: 'Beispiel 5',
        email: 'beispiel@5.com'
    },
]