const remoteURL = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${remoteURL}/games`).then((result) => result.json());
      },
      get(id) {
        return fetch(`${remoteURL}/games/${id}`).then((result) => result.json());
      },
      post(newGame) {
        return fetch(`${remoteURL}/games`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGame),
        }).then((data) => data.json());
      },
      delete(id) {
        return fetch(`http://localhost:5002/games/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      },
      update(editedGame) {
        return fetch(`${remoteURL}/games/${editedGame.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedGame)
        }).then(data => data.json());
      }
    }