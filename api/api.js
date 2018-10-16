import fetch from 'isomorphic-fetch'
import axios from 'axios'
import { url } from '../variables/general'
import {__get_Projection} from "../config/database"

export default class {
  static async __get_Data_Carousel_Main_Home() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 4,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Common_Movies_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Feature_Main_Home() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 10,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_7() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_8() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_9() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Day_10() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Update_Main_Home() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 6,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Week_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Week_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Week_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 3,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Week_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 4,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Week_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Week_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 6,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Trends_Main_Home() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 5,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 3,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 4,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 6,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_7() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 7,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_8() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 8,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_9() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 9,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_News_10() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 10,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Comedy() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 4,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 2,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 3,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 4,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 5,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 6,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_7() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 7,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_8() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 8,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_9() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 9,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Main_Romance_10() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 10,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
    })
    const data = res.data
    return data
  }

  //////////////////////////////////////////////////////////////////////
  /////////////////////// API CENIMA ///////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  static async __get_Data_Carousel_Cenima() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 4,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Update_Cenima() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 6,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_7() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_8() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_9() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Cenima_10() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Views_Cenima() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 6,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  //////////////////////////////////////////////////////////////////////
  ///////////////////////// API ANIME //////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  static async __get_Data_Carousel_Anime() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 6,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_New_Update_Anime() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 6,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Anime_1() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Anime_2() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Anime_3() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Anime_4() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Anime_5() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Recommend_Anime_6() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 2,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }

  static async __get_Top_Views_Anime() {
    const res = await axios.post(`${url}v1/collection/limit`, {
        "limit": 6,
        "indexPage": 1,
        "projection": __get_Projection(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    })
    const data = res.data
    return data
  }
}