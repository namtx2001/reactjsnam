import { axiosClient } from './axiosClient';

const NewsAPI = {
    getAll(){
        const url = `/news`;
        return axiosClient.get(url);
    },
    get(id){
      const url = `/news/${id}`;
      return axiosClient.get(url);
    },
    add(newss){
      const url = `/news`;
      return axiosClient.post(url, newss);
  },
    remove(id){
      const url = `/news/${id}`;
      return axiosClient.delete(url);
    },
    update(id, data){   // id là sản phẩm cần sửa && data là cái sản phẩm mới
         const url = `/news/${id}`;
         return axiosClient.put(url, data);
    }
}
export default NewsAPI;