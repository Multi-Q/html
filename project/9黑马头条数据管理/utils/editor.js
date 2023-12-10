// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
    placeholder: '在这里编辑内容.....',
    // 编辑器变化时的回调函数
    onChange(editor) {
        const html = editor.getHtml()
        //   console.log('editor content', html)
        // 也可以同步到 <textarea>
        document.querySelector(".publish-content").value = html;
    }
}

const editor = createEditor({
    // 创建位置
    selector: '#editor-container',
    // 默认内容
    html: '<p><br></p>',
    // 配置项
    config: editorConfig,
    // 集成模式
    mode: 'default', // or 'simple'
})
// 工具栏配置对象
const toolbarConfig = {}
// 创建工具栏
const toolbar = createToolbar({
    // 为指定的编辑器创建工具栏
    editor,
    // 工具栏创建的位置
    selector: '#toolbar-container',
    // 工具栏配置对象
    config: toolbarConfig,
    mode: 'default', // or 'simple'
})