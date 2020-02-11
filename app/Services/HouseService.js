import House from "../Models/House.js"
import store from "../store.js"


// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/houses",
  timeout: 3000
});

class HouseService {
  constructor() {

  }
  getHouses() {
    _api.get("").then(res => {
      let houses = res.data.data.map(h => new House(h));
      store.commit("houses", houses);
    })
      .catch(error => {
        console.log(error);
      });
  }
  editHouse(id, value, update) {
    console.log(id + " and " + update)
    _api
      .put(id, update)
      .then(res => {
        let house = store.State.houses.find(h => h.id === id)
        console.log(house)
        house[value] = update;
        console.log(house);
        store.commit("houses", store.State.houses)
      })
      .catch(error => {
        console.log(error);
      })
  }
  addHouse(newHouse) {
    _api.post("", newHouse).then(res => {
      let house = new House(res.data.data)
      store.State.houses.push(house);
      store.commit("houses", store.State.houses);
    })
  }
  deleteHouse(id) {
    _api.delete(id).then(res => {
      let houses = store.State.houses.filter(h => h.id !== id);
      store.commit("houses", houses);
    })
      .catch(error => {
        console.log(error);
      })
  }

}


const HOUSESERVICE = new HouseService();
export default HOUSESERVICE;
