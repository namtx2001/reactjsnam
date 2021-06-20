import { axiosClient } from './axiosClient';

const SlideAPI = {
    getAll(){
        const url = `/slides`;
        return axiosClient.get(url);
    },
    get(id){
      const url = `/slides/${id}`;
      return axiosClient.get(url);
    },
    add(slide){
      const url = `/slides`;
      return axiosClient.post(url, slide);
  },
    remove(id){
      const url = `/slides/${id}`;
      return axiosClient.delete(url);
    },
    update(id, data){   // id là sản phẩm cần sửa && data là cái sản phẩm mới
         const url = `/slides/${id}`;
         return axiosClient.put(url, data);
    }
}
export default  SlideAPI;