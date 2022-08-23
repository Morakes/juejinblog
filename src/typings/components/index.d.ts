import { ElFile,UploadFile } from "element-plus/lib/components/upload/src/upload.type";
import * as home from '@/utils/mock/home'
import * as news from '@/utils/mock/news'
import * as books from '@/utils/mock/books'
export declare interface UploadListType  {
    fileList: Array<UploadFile | FilesType>
    handleChange: (event: UploadFile) => void
    handleRemove: (file: ElFile, event: Array<UploadFile>) => void
    handlePictureCardPreview?: (file: UploadFile) => void
    [key:string]:unknown
}

export declare interface FilesType{
    status:string,
    url:string,
    [key:string]:unknown
}

declare namespace mock{
    type MockDetail = typeof home.detailsContent
    type MockHomeList = typeof home.listContent
    type MockNewsList = typeof news.list
    type MockNewsSidebar = typeof news.sidebarData
    type MockCommentSidebar = typeof home.commentSidebarData
    type MockBooksList = typeof books.list
}