/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = "老刘";

function getBookList() {
    axios({
        url: "http://hmajax.itheima.net/api/books",
        method: "get",
        params: {
            creator: creator
        }
    }).then(function (res) {
        console.log(res);
        const bookList = res.data.data;
        const htmlstr = bookList.map((item, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.bookname}</td>
                <td>${item.author}</td>
                <td>${item.publisher}</td>
                <td>
                  <span class="del">删除</span>
                  <span class="edit">编辑</span>
                </td>
            </tr>
          `;
        }).join("");
        document.querySelector(".list").innerHTML = htmlstr;
    }).catch(function (err) {

    })
}
getBookList();