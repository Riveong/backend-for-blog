const Products = require ('../data/blog.json');
let data = [];
for (let i = 0; i < Products.data.length; i++) {
  let datas = {
                "id": Products.data[i].Id,
                "name": Products.data[i].Name,
                "desc": Products.data[i].Desc,
                "image": Products.data[i].Image
};
  data.push(datas);
};

module.exports = data ;