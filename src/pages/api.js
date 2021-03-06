export class Api{
    constructor(){
        this.url = `https://nomoreparties.co/cohort12`;
    }

    getCards = () => {
        return fetch (`${this.url}/cards`, { 
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }

    addCard = () => {
        fetch (`${this.url}/cards`, { 
            method: 'POST',
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.forms.card.elements.name.value,
                link: document.forms.card.elements.link.value
              })
        })
    }

    likeCard = (id) => {
        return fetch (`${this.url}/cards/like/${id}`, { 
            method: 'PUT',
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
    }

    disLikeCard = (id) => {
        return fetch (`${this.url}/cards/like/${id}`, { 
            method: 'DELETE',
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
    }

    deleteCard = (id) => {
        fetch (`${this.url}/cards/${id}`, { 
            method: 'DELETE',
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
                'Content-Type': 'application/json'
            }
        })
    }

    getUser = () => {
       return fetch (`${this.url}/users/me`, { 
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
            }
        })
        .then((user) => {
            return user.json();
        })
    }

    updateUser = () => {
        fetch (`${this.url}/users/me`, { 
            method: 'PATCH',
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.forms.user.elements.name.value,
                about: document.forms.user.elements.description.value
              })
        })
    }

    getAvatar = () => {
        return fetch (`${this.url}/users/me`, { 
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
            }
        })
        .then((avatar) => {
            return avatar.json();
        })
    }

    updateAvatar = () => {
        fetch (`${this.url}/users/me/avatar`, { 
            method: 'PATCH',
            headers: {
                authorization: 'a52cee62-1a4c-4ffb-bcca-6afcb9f95180',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: document.forms.avatar.elements.link.value,
              })
        })
    }

}