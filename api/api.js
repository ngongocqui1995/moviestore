import fetch from 'isomorphic-fetch'
import axios from 'axios'
import { url } from '../variables/general'
import {__get_Projection} from "../config/database"

export default class {
  static async __get_Data_Carousel_Top() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 4,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Feature_Main_Home() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 10,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_7() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_8() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_9() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_10() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async _getData_1() {
    const res = await fetch(`${url}collection/Limit/22`)
    const data = await res.json()
    return data
  }

  static async _getData_2() {
    const res = await fetch(`${url}collection/Limit/6`)
    const data = await res.json()
    return data
  }

  static async _getData_3() {
    const res = await fetch(`${url}collection/Limit/10`)
    const data = await res.json()
    return data
  }

  static async _getData_4() {
    const res = await fetch(`${url}collection/Limit/5`)
    const data = await res.json()
    return data
  }

  static async _getData_5() {
    const res = await fetch(`${url}collection/Limit/5`)
    const data = await res.json()
    return data
  }

  static async _getData_6() {
    const res = await fetch(`${url}collection/Limit/4`)
    const data = await res.json()
    return data
  }

  static async _getData_8() {
    const res = await fetch(`${url}collection/Limit/22`)
    const data = await res.json()
    return data
  }

  static async _getData_9() {
    try {
      const response = await axios.get(`${url}collection/Limit/2`);
      const data = response.data;
      return data
    } catch (error) {
      return null
    }
  }

  static async _getData_10() {
    try {
      const response = await axios.get(`${url}collection/Limit/2`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }

  static async _getData_11() {
    try {
      const response = await axios.get(`${url}collection/Limit/2`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }

  static async _getData_12() {
    const res = await fetch(`${url}collection/Limit/10`)
    const data = await res.json()
    return data
  }

  static async _getData_13() {
    try {
      const response = await axios.get(`${url}collection/Limit/5`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }

  static async _getData_14() {
    try {
      const response = await axios.get(`${url}collection/Limit/14`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }
}