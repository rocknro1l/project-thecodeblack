import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api/';

export class ProductDiscountAPI {
  constructor() { }
  
  getDiscount() {
    return axios.get('products/discount').then(res => res.data)      
  }  
}