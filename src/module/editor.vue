<template>
    <div class="editor">
        <div class="title">
            <span class="title-t">标题名：</span>
            <input class="title-input" type="text" v-model="title">
        </div>
        <ckeditor
            class="editor"
            :editor="editor"
            @ready="onReady"
            v-model="editorData"
            :config="editorConfig"
        ></ckeditor>
        <!-- <button class="btn" @click="getData">预览</button> -->
        <button class="btn" @click="getData">保存</button>
    </div>
</template>

<script>
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
// import '@ckeditor/ckeditor5-font/src/font'
export default {
    data() {
        return {
            name: 'sof',
            editor: DecoupledEditor,
            editorData: '',
            title: '',
            editorConfig: {
                language: 'zh-cn',
                highlight: {
                    options: [
                        {
                            model: 'greenMarker',
                            class: 'marker-green',
                            title: 'Green marker',
                            color: 'var(--ck-highlight-marker-green)',
                            type: 'marker'
                        },
                        {
                            model: 'redPen',
                            class: 'pen-red',
                            title: 'Red pen',
                            color: 'var(--ck-highlight-pen-red)',
                            type: 'pen'
                        },
                        {
                            model: 'greenPen',
                            class: 'pen-green',
                            title: 'Green pen',
                            color: 'var(--ck-highlight-pen-green)',
                            type: 'pen'
                        }
                    ]
                },
                toolbar: [
                    'heading',
                    'fontSize',
                    'highlight',
                    'fontFamily',
                    'alignment',
                    'imageUpload',
                    'bold',
                    'italic',
                    'underline',
                    // 'imageStyle:full',
                    // 'imageStyle:alignLeft',
                    // 'imageStyle:alignRight',
                    'link',
                    'undo',
                    'redo'
                ],
                ckfinder: {
                    uploadUrl: `/upload` // 后端处理上传逻辑返回json数据,包括uploaded 上传的字节数 和url两个字段
                }
            }
        }
    },
    mounted() {
        // console.log(111)
    },
    methods: {
        onReady (editor) {
            // Insert the toolbar before the editable area.
            editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                )
        },
        getData () {
            let data = {
                title: this.title,
                info: this.editorData
            }
            this.request.post('http://test.sifjz.com:9227/save', data, this.backIndex)
        },
        backIndex (data) {
            console.log(data)
        }
    }
}
</script>

<style>
.ck-content {
    min-height: 30vh;
    border: 1px solid #ccc !important;
}
.title{
    width: 100%;
    line-height: 50px;
    padding-left: 10px;
    /* border-left: 5px solid #333; */
    /* box-sizing: border-box; */
}
.title-t{
    float: left;
}
.title-input{
    float: left;
    margin-top: 8px;
    width: 500px;
    line-height: 30px;
}
.title::after{
    width: 100%;
    height: 0;
    display: block;
    clear: both;
    content: '';
}
.btn {
    margin-top: 5px;
    width: 120px;
    line-height: 35px;
    border: 1px solid #ccc;
    background: #17abbf;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
}
</style>
