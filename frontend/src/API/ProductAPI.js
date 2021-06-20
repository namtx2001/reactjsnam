import { isAuthenticated } from '../auth';
import { axiosClient } from './axiosClient';

const { user, token } = isAuthenticated()
const ProductAPI = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(product) {
    const url = `/product/create/${user._id}`;
    return axiosClient.post(url, product, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  remove(id) {
    const url = `/products/${id}/${user._id}`;
    return axiosClient.delete(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  update(id, data) {   // id là sản phẩm cần sửa && data là cái sản phẩm mới
    const url = `/products/${id}/${user._id}`;
    return axiosClient.put(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );
  }
}
export default ProductAPI;