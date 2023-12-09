/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = "老刘";
/**
 * 渲染图书列表
 */
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
                <td data-id=${item.id}>
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

/**
 * 添加图书
 * 
 */
// 1、创建弹框对象
const addModalDom = document.querySelector(".add-modal");
const addModal = new bootstrap.Modal(addModalDom);
// 保存按钮->点击-》隐藏弹弹窗
document.querySelector(".add-btn").addEventListener("click", function (e) {
    // 2、收集表单数据，并提交到服务器保存
    const addForm = document.querySelector(".add-form");
    const bookdata = serialize(addForm, { hash: true, empty: true });
    // 提交到服务器
    axios({
        url: "http://hmajax.itheima.net/api/books",
        method: "post",
        data: {
            ...bookdata, creator
        }
    }).then(res => {
        console.log("创建图书", res.data);
        getBookList();
        // 重置表单
        addForm.reset();
        // 隐藏弹框
        addModal.hide();
    }).catch(err => {

    });
});

/**
 * 删除图书
 * 
 * 动态元素，绑定元素使用事件委派机制
 */
document.querySelector(".list").addEventListener("click", function (e) {
    if (e.target.classList.contains("del")) {
        const bookId = e.target.parentNode.dataset.id;
        axios({
            url: `http://hmajax.itheima.net/api/books/${bookId}`,
            method: "delete",
        }).then(res => {
            getBookList();
            console.log("删除图书", res.data);
        }).catch(err => {
            console.log(err);
        });
    }
});

/**
 * 编辑图书
 */
const editModalDom = document.querySelector(".edit-modal");
const editModal = new bootstrap.Modal(editModalDom);

document.querySelector(".list").addEventListener("click", e => {
    if (e.target.classList.contains("edit")) {
        editModal.show();
        const bookId = e.target.parentNode.dataset.id;
        axios({
            url: `http://hmajax.itheima.net/api/books/${bookId}`,
            method: "get",
        }).then(res => {
            const bookObj = res.data.data;
            const keys = Object.keys(bookObj);
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key];
            })
        }).catch(err => {

        })
    }
});

document.querySelector(".edit-btn").addEventListener("click", () => {
    const editForm = document.querySelector(".edit-form");
    const changedata = serialize(editForm, { hash: true, empty: true });
    axios({
        url: `http://hmajax.itheima.net/api/books/${changedata.id}`,
        method: "put",
        data: {
            bookname: changedata.bookname,
            author: changedata.author,
            publisher: changedata.publisher,
            creator: creator
        }
    }).then(res => {
        console.log("修改图书", res.data);
        getBookList();
        editModal.hide();
    })
});