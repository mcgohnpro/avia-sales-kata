/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { useState, useCallback, useEffect } from 'react'

const URL_API = 'https://aviasales-test-api.kata.academy'

// export default class AviaSalesApi {
//   async getSearchID() {
//     if (!this.id) {
//       const response = await fetch(`${URL_API}/search`)
//       if (response.ok) {
//         const json = await response.json()
//         this.id = json.searchID
//         return json.searchID
//       }
//       // TODO переписать ошибки
//       throw new Error(`Error to get searchID, status code: ${response.status}`)
//     }
//     return this.id
//   }

//   async getTickets() {
//     try {
//       this.getSearchID().then(async (id) => {
//         const response = await fetch(`${URL_API}/tickets?searchId=${id}`)
//         if (response.ok) {
//           const json = response.json()
//           return json
//         }
//         // TODO переписать ошибки
//         return []
//       })
//     } catch (error) {
//       // TODO переписать ошибки
//       throw new Error()
//     }
//   }
// }
